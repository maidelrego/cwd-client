<template>
  <v-card class="flex lightGrey" flat tile>
    <v-row justify="center">

      <v-col cols="12" sm="6" md="4" lg="4">
        <v-card-title class="">
          <strong>Follow us!</strong>
          <v-btn href="https://www.facebook.com/campbellwooddesigns" target='blank' class="white--text" fab icon>
            <v-icon color="indigo" x-large>mdi-facebook</v-icon>
          </v-btn>
          <v-btn href="https://www.instagram.com/campbell_wood_designs/?hl=en" target='blank' class="white--text" fab
            icon>
            <v-icon color="red lighten-3" href="" x-large>mdi-instagram</v-icon>
          </v-btn>
        </v-card-title>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="4">
        <v-card-subtitle>
          Family owned business, located in our hometown of Excelsior Springs, Missouri.
          We are here to help you and delivery the best service.
        </v-card-subtitle>
      </v-col>

      <v-col cols="12" sm="12" md="4" lg="4">
        <v-card-subtitle>
          Created By <a href="mailto: mregodeveloper@gmail.com">mregodeveloper@gmail.com</a>
        </v-card-subtitle>
      </v-col>
      
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'FooterPage',
  data: () => ({
  }),
}
</script>

<style>
.logo {
  width: 200px;
  height: 100px;
}
</style>