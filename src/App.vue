<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app>
      <v-tabs v-model="tab" grow center-active background-color="#e1e2e1" hide-slider centered icons-and-text>
        <v-tab active-class="primary white--text" to="/">
          Home
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-tab active-class="primary white--text" to="quotes">
          Quotes
          <v-icon>mdi-file-document</v-icon>
        </v-tab>

        <v-tab active-class="primary white--text" to="galery">
          Gallery
          <v-icon>mdi-folder-multiple-image</v-icon>
        </v-tab>

        <v-tab active-class="primary white--text" to="aboutUs">
          About Us
          <v-icon>mdi-account-group</v-icon>
        </v-tab>

        <v-tab active-class="primary white--text" to="contactUs">
          Contact Us
          <v-icon>mdi-account-box</v-icon>
        </v-tab>

      </v-tabs>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>

    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    tab: null,
    tabItems: ['Home', 'Quotes', 'Gallery', 'About Us', 'Contact Us']
  }),
};
</script>
