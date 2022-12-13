<template>
  <v-card flat class="mt-5">
    <v-card-text>
      <v-row>
        <v-col>
          <p class="text-center mb-5 mainHeaders">Gallery</p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="12" md="12" lg="4">
          <v-carousel hide-delimiters>
            <v-carousel-item v-for="({ url, name }) in galleryImages" :key="name">
              <img :src="url" height="500" width="100%" />
            </v-carousel-item>
            
          </v-carousel>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>

</template>

<script>
import { doAPIGet } from '../lib/api.js';

export default {
  name: 'GalleryPage',
  data() {
    return {
      galleryImages: []
    }
  },
  beforeMount() {
    this.getGalleryImages();
  },
  methods: {
    async getGalleryImages() {
      await doAPIGet('cloudinary/galleryImages').then((res) => {
        this.galleryImages = res.data
      })
    }
  }
}
</script>