<template>
  <v-stepper v-model="stepNumber" vertical>
    <v-stepper-step :complete="stepNumber > 1" step="1">
      Info
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card flat class="mb-5">
        <v-card-text>
          <img src="../assets/logo.png" class="logo">
          <p class="text-center mainHeaders">Info</p>

          <v-row class="mt-5">
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-text-field label="First Name" filled rounded dense />
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-text-field label="Last Name" filled rounded dense />
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <PhoneNumberMask v-model="phone" label="Phone" filled rounded dense />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field label="E-mail" filled rounded dense />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-checkbox v-model="delivery" class="mt-0 pt-0" label="Delivery?" />
              <v-subheader v-if="delivery" class="mt-0 pt-0">We need your address if you are choosing Delivery</v-subheader>
            </v-col>
          </v-row>

          <v-row v-if="delivery">
            <v-col cols="12">
              <v-text-field label="Address" filled rounded dense />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Address 2" filled rounded dense />
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-text-field label="City" filled rounded dense />
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-text-field label="State" filled rounded dense />
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
              <v-text-field label="Zip" filled rounded dense />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-btn color="primary" @click="stepNumber = 2">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="stepNumber > 2" step="2">
      Configure analytics for this app
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="stepNumber = 3">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="stepNumber > 3" step="3">
      Select an ad format and name ad unit
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="stepNumber = 4">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      View setup instructions
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="stepNumber = 1">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  name: 'QuotesPage',
  data() {
    return {
      stepNumber: 1,
      phone: '',
      delivery: false,
    }
  },
}
</script>

<style>
.logo {
  display: block;
  margin: auto;
  margin-bottom: 35px;
}
</style>