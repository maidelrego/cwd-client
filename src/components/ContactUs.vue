<template>
  <v-card flat tile>
    <v-row>
      <v-col cols="12" class="justify-center align-center">
        <p class="text-center mt-5 mainHeaders">Contact Us</p>
        <v-card-text>
          <p class="aboutUsBody contactForm">Need to get in touch with us? Fill out the form below and we will get back to you as
            soon as possible or drive on down to our location and we will be happy to help you in person.
          </p>
        </v-card-text>
        <iframe title='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.617735054326!2d-94.2230803843744!3d39.34224552820393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c1a5ee7b4257b5%3A0xa3156fb668eedb48!2s255%20E%20Broadway%20Ave%2C%20Excelsior%20Springs%2C%20MO%2064024!5e0!3m2!1sen!2sus!4v1589251463454!5m2!1sen!2sus"></iframe>
      </v-col>
      <v-col cols="12" class="mt-3 mb-4">
        <ContactUsForm class="contactForm" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ContactUsForm from './ContactUsForm.vue'
export default {
  components: { ContactUsForm },

}
</script>

<style>
iframe {
  width: 80%;
  height: 300px;
  border: 0;
  margin: 0 auto;
  display: block;
  border-style: none;
}
.contactForm {
  width: 80%;
  margin: 0 auto;
  display: block;
}
</style>