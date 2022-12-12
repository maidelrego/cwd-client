<template>
  <v-card class="flex lightGrey" flat tile>
    <v-card-title class="">
      <strong class="subheading text-center">Follow us!</strong>
      <v-spacer></v-spacer>
      <v-btn v-for="(social, i) in socials" :key="i" :color="social.color" class="white--text" fab icon>
        <v-icon x-large>{{ social.icon }}</v-icon>
      </v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'FooterPage',
  data: () => ({
    socials: [
      {
        icon: 'mdi-facebook',
        color: 'indigo',
      },
      {
        icon: 'mdi-instagram',
        color: 'red lighten-3',
      },
    ],
  }),
}
</script>

<style>
  .logo {
    width: 200px;
    height: 100px;
  }
</style>