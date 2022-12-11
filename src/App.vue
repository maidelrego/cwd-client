<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app>
      <v-tabs v-model="tab" grow center-active background-color="#e1e2e1" hide-slider icons-and-text>
        <v-tab active-class="activeColor white--text" to="/">
          Home
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-divider class="tabDivider" vertical></v-divider>

        <v-tab active-class="activeColor white--text" to="quotes">
          Quotes
          <v-icon>mdi-file-document</v-icon>
        </v-tab>

        <v-divider class="tabDivider" vertical></v-divider>

        <v-tab active-class="activeColor white--text" to="galery">
          Gallery
          <v-icon>mdi-folder-multiple-image</v-icon>
        </v-tab>

        <v-divider class="tabDivider" vertical></v-divider>

        <v-tab active-class="activeColor white--text" to="aboutUs">
          About Us
          <v-icon>mdi-account-group</v-icon>
        </v-tab>

        <v-divider class="tabDivider" vertical></v-divider>

        <v-tab active-class="activeColor white--text" to="contactUs">
          Contact Us
          <v-icon>mdi-account-box</v-icon>
        </v-tab>

      </v-tabs>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <router-view></router-view>
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

<style>
  .tabDivider {
  max-width: 1px !important;
  color: white !important;
  border: solid !important;
  background-color: white;
  border-width: thin !important;
}
.activeColor {
  background-color:#bea855
}
</style>
