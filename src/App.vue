<template>
  <!-- App.vue -->

  <v-app>
    <v-app-bar app>
      <v-tabs v-model="tab" grow center-active background-color="#e1e2e1" hide-slider icons-and-text>
        <v-tab active-class="primary white--text" to="/">
          Home
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-divider class="tabDivider" vertical></v-divider>

        <v-tab active-class="primary white--text" to="quotes">
          Quotes
          <v-icon>mdi-file-document</v-icon>
        </v-tab>

        <v-divider class="tabDivider" vertical></v-divider>

        <v-tab active-class="primary white--text" to="galery">
          Gallery
          <v-icon>mdi-folder-multiple-image</v-icon>
        </v-tab>

        <v-divider class="tabDivider" vertical></v-divider>

        <v-tab active-class="primary white--text" to="aboutUs">
          About Us
          <v-icon>mdi-account-group</v-icon>
        </v-tab>

        <v-divider class="tabDivider" vertical></v-divider>

        <v-tab active-class="primary white--text" to="contactUs">
          Contact Us
          <v-icon>mdi-account-box</v-icon>
        </v-tab>

      </v-tabs>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="ma-0 pa-0">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  components: {
    Footer,
  },
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
.primary {
  background-color:#bea855
}

@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

@media screen and (max-width: 540px) {
  .textBox {
    margin-left: 5%;
    margin-right: 5%;
    background-color: rgba(225, 225, 225, 0.60);
    opacity: 0.;
  }

  .headTextColor {
    font-family: 'Lobster Two';
    color: #827717;
    font-size: 3rem;
  }

  .aboutUstext {
    font-family: 'Lobster Two';
    color: #827717;
    font-size: 2rem;
  }

  .aboutUsBody {
    font-family: 'Lato';
    font-size: 16px;
    text-align: justify;
  }
}

@media screen and (min-width: 540px) {
  .textBox {
    margin-left: 15%;
    margin-right: 15%;
    background-color: rgba(225, 225, 225, 0.60);
  }

  .headTextColor {
    font-family: 'Lobster Two';
    color: #827717;
    font-size: 4rem;
  }

  .aboutUstext {
    font-family: 'Lobster Two';
    color: #827717;
    font-size: 3rem;
  }

  .aboutUsBody {
    font-family: 'Lato';
    font-size: 20px;
    text-align: justify;
  }
}

.parallaxOpacity {
  opacity: 0.9;
}
</style>
