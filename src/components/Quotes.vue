<template>
  <v-stepper v-model="stepNumber" vertical>
    <!-- IF ERROR OCCURS, CHECK THIS FILE -->
    <v-row class="mt-5" justify="center">
      <v-col cols="6">
        <Error v-if="error" :err="error" />
      </v-col>
    </v-row>
    
    <v-stepper-step :complete="stepNumber > 1" step="1">
      Info
    </v-stepper-step>

    <v-stepper-content step="1">
      <ValidationObserver ref="Info" v-slot="{ valid }">
        <v-card flat class="mb-5">
          <v-card-text>
            <img src="../assets/logo.png" class="logo">
            <p class="text-center mainHeaders">Info</p>

            <v-row class="mt-5" justify="center">
              <v-col cols="12" sm="12" md="4" lg="4">
                <ValidationProvider name="First Name" rules="required" v-slot="{ errors }">
                  <v-text-field v-model="firstName" label="First Name" filled rounded dense clearable />
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="12" md="4" lg="4">
                <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
                  <v-text-field v-model="lastName" label="Last Name" filled rounded dense clearable />
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="12" md="4" lg="4">
                <ValidationProvider name="Phone Number" rules="required|digits:10" v-slot="{ errors }">
                  <PhoneNumberMask v-model="phone" label="Phone" filled rounded dense clearable />
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row>

            <v-row justify="center">
              <v-col cols="12">
                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                  <v-text-field v-model="email" label="E-mail" filled rounded dense clearable />
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row>

            <v-row justify="start">
              <v-col cols="6">
                <ValidationProvider name="Install or Delivery" rules="required" v-slot="{ errors }">
                  <v-radio-group v-model="installOrDelivery">
                    <v-radio label="Delivery?" value="Delivery"></v-radio>
                    <v-radio label="Install?" value="Install"></v-radio>
                  </v-radio-group>
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>

                <v-subheader v-if="isDelivery" class="mt-0 pt-0">We need your address if you are
                  choosing
                  Delivery</v-subheader>
              </v-col>
            </v-row>

            <v-row justify="center" v-if="isDelivery">
              <v-col cols="12">
                <ValidationProvider name="Address" :rules="isDelivery ? 'required' : ''" v-slot="{ errors }">
                  <v-text-field v-model="address" label="Address" filled rounded dense clearable />
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="address2" label="Address 2" filled rounded dense clearable />
              </v-col>
              <v-col cols="12" sm="12" md="4" lg="4">
                <ValidationProvider name="City" :rules="isDelivery ? 'required' : ''" v-slot="{ errors }">
                  <v-text-field v-model="city" label="City" filled rounded dense clearable />
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="12" md="4" lg="4">
                <ValidationProvider name="State" :rules="isDelivery ? 'required' : ''" v-slot="{ errors }">
                  <v-text-field v-model="state" label="State" filled rounded dense clearable />
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="12" md="4" lg="4">
                <ValidationProvider name="Zip" :rules="isDelivery ? 'required|digits:5' : ''" v-slot="{ errors }">
                  <v-text-field v-model.number="zip" label="Zip" type="number" filled rounded dense clearable />
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="error">
              Cancel
            </v-btn>
            <v-btn :disabled="!valid" color="primary" @click="stepNumber = stepNumber + 1">
              Continue<v-icon rigth>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>

        </v-card>
      </ValidationObserver>
    </v-stepper-content>

    <v-stepper-step :complete="stepNumber > 2" step="2">
      Door Design
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card flat class="mb-5">
        <v-card-text>
          <img src="../assets/logo.png" class="logo">
          <p class="text-center mainHeaders">Door Design</p>
          <p class="text-center mt-5">All our doors are made out of high grade cabinet pine</p>

          <v-row justify="center">
            <v-col v-for="{ url, name } in doorDesignsUrls" :key="url" cols="6" sm="6" md="2" lg="2">
              <v-card class="fill-height">
                <v-img class="white--text align-end" :src="url" height="300" />
                <v-card-text class="text-center">
                  <p class="text-center aboutUsBody">{{ name }}</p>
                  <v-btn icon @click="doorDesign = name">
                    <v-icon class="iconSize" :color="doorDesign === name ? 'primary' : ''">mdi-heart</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card-actions>
        <v-btn text @click="stepNumber = stepNumber - 1">
          <v-icon rigth>mdi-chevron-left</v-icon>Back
        </v-btn>
        <v-btn :disabled="!doorDesign" color="primary" @click="stepNumber = stepNumber + 1">
          Continue<v-icon rigth>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-stepper-content>

    <v-stepper-step :complete="stepNumber > 3" step="3">
      Finish Color or Stain
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card flat class="mb-5">
        <v-card-text>
          <img src="../assets/logo.png" class="logo">
          <p class="text-center mainHeaders">Finish</p>

          <v-row justify="center" class="mt-5">
            <v-col v-for="{ url, name } in finishColorsUrls" :key="url" cols="6" sm="6" md="2" lg="2">
              <v-card class="fill-height">
                <v-img class="white--text align-end" :src="url" />
                <v-card-text class="text-center">
                  <p class="text-center aboutUsBody">{{ name }}</p>
                  <v-btn icon @click="finishColor = name">
                    <v-icon class="iconSize" :color="finishColor === name ? 'primary' : ''">mdi-heart</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card-actions>
        <v-btn text @click="stepNumber = stepNumber - 1">
          <v-icon rigth>mdi-chevron-left</v-icon>Back
        </v-btn>
        <v-btn :disabled="!finishColor" color="primary" @click="stepNumber = stepNumber + 1">
          Continue<v-icon rigth>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>

    </v-stepper-content>

    <v-stepper-step :complete="stepNumber > 4" step="4">
      Door Kits
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card flat class="mx-auto mb-5">
        <v-card-text>
          <img src="../assets/logo.png" class="logo">
          <p class="text-center mainHeaders">Door Kits</p>

          <v-row justify="center" class="mt-5">
            <v-col v-for="{ url, name } in doorKitsUrls" :key="url" cols="6" sm="3" md="3" lg="3">
              <v-card class="fill-height">
                <v-img class="white--text align-end" :src="url" />
                <v-card-text class="text-center">
                  <p class="text-center aboutUsBody">{{ name }}</p>
                  <v-btn icon @click="doorKit = name">
                    <v-icon class="iconSize" :color="doorKit === name ? 'primary' : ''">mdi-heart</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="stepNumber = stepNumber - 1">
            <v-icon rigth>mdi-chevron-left</v-icon>Back
          </v-btn>
          <v-btn :disabled="!doorKit" color="primary" @click="stepNumber = stepNumber + 1">
            Continue<v-icon rigth>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-stepper-content>

    <v-stepper-step :complete="stepNumber > 5" step="5">
      Handles
    </v-stepper-step>
    <v-stepper-content step="5">
      <v-card flat class="mx-auto mb-5">
        <v-card-text>
          <img src="../assets/logo.png" class="logo">
          <p class="text-center mainHeaders">Handles</p>

          <v-row justify="center" class="mt-5">
            <v-col v-for="{ url, name } in handlesUrls" :key="url" cols="6" sm="3" md="2" lg="2">
              <v-card class="fill-height">
                <v-img class="white--text align-end" :src="url" />
                <v-card-text class="text-center">
                  <p class="text-center aboutUsBody">{{ name }}</p>
                  <v-btn icon @click="doorHandle = name">
                    <v-icon class="iconSize" :color="doorHandle === name ? 'primary' : ''">mdi-heart</v-icon>
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="stepNumber = stepNumber - 1">
            <v-icon rigth>mdi-chevron-left</v-icon>Back
          </v-btn>
          <v-btn :disabled="!doorHandle" color="primary" @click="stepNumber = stepNumber + 1">
            Continue<v-icon rigth>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-stepper-content>

    <v-stepper-step :complete="stepNumber > 6" step="6">
      Dimensions
    </v-stepper-step>
    <v-stepper-content step="6">
      <v-card flat class="mx-auto mb-5">
        <v-card-text>
          <img src="../assets/logo.png" class="logo">
          <p class="text-center mainHeaders">Dimensions</p>

          <v-row class="mt-5" justify="center">
            <v-col cols="12" sm="4" md="4" lg="4">
              <v-text-field v-model.number="dimensionsW" label="Width" type="number" suffix="Inches" filled dense rounded
                clearable />
              <v-text-field v-model.number="dimensionsH" label="Height" type="number" suffix="Inches" filled dense rounded
                clearable />
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="stepNumber = stepNumber - 1">
            <v-icon rigth>mdi-chevron-left</v-icon>Back
          </v-btn>
          <v-btn color="primary" @click="stepNumber = stepNumber + 1">
            Continue<v-icon rigth>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-stepper-content>

    <v-stepper-step :complete="stepNumber > 7" step="7">
      Review
    </v-stepper-step>
    <v-stepper-content step="7">
      <v-card flat class="mx-auto mb-5">
        <v-card-text>
          <img src="../assets/logo.png" class="logo">
          <p class="text-center mainHeaders">Review</p>
          <QuotesSummary :quote="obj" />
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="stepNumber = stepNumber - 1">
            <v-icon rigth>mdi-chevron-left</v-icon>Back
          </v-btn>
          <v-btn color="primary" @click="saveData">
            Send<v-icon class="ml-2" rigth>mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-stepper-content>
  </v-stepper>
</template>

<script>
import { doAPIGet } from '../lib/api'
import { mapFields } from '../store/dataMappers'
import { mapState, mapActions } from 'vuex'
import QuotesSummary from './QuoteSummary.vue'
import Error from './Error.vue'

export default {
  components: {
    Error,
    QuotesSummary
  },
  name: 'QuotesPage',
  data() {
    return {
      stepNumber: 1,
      doorDesignsUrls: [],
      finishColorsUrls: [],
      doorKitsUrls: [],
      handlesUrls: [],
    }
  },
  beforeMount() {
    this.fetchCloudImages()
  },
  computed: {
    ...mapState('Quotes', ['obj', 'error', 'changed']),
    ...mapFields({
      fields: [
        'firstName',
        'lastName',
        'email',
        'phone',
        'address',
        'address2',
        'city',
        'state',
        'zip',
        'installOrDelivery',
        'doorDesign',
        'finishColor',
        'doorKit',
        'doorHandle',
        'dimensionsW',
        'dimensionsH'
      ],
      base: 'Quotes',
      mutation: 'INIT_OBJECT'
    }),
    isDelivery() {
      return this.installOrDelivery === 'Delivery'
    },
  },
  watch: {
    installOrDelivery(oldVal, val) {
      if (oldVal !== val) {
        this.resetAddress()
      }
    }
  },
  methods: {
    ...mapActions('Quotes', ['clear', 'clearError', 'reset', 'saveData', 'resetAddress']),
    async fetchCloudImages() {
      await doAPIGet('cloudinary/doorDesigns').then((res) => {
        this.doorDesignsUrls = res.data
      })
      await doAPIGet('cloudinary/finishColors').then((res) => {
        this.finishColorsUrls = res.data
      })
      await doAPIGet('cloudinary/doorKits').then((res) => {
        this.doorKitsUrls = res.data
      })
      await doAPIGet('cloudinary/handles').then((res) => {
        this.handlesUrls = res.data
      })
    }
  }

}
</script>

<style>
.logo {
  display: block;
  margin: auto;
  margin-bottom: 35px;
}
</style>