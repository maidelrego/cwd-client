<template>
  <v-card class="mt-5" tile>
    <v-card-text>
      <ValidationObserver ref="contactUs" v-slot="{  }">
        <v-form class="mt-3">
          <v-row>
            <v-col cols="12">
              <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                <v-text-field clearable filled rounded dense v-model="name" :counter="10" label="Name" />
                <span class="red--text">{{ errors[0] }}</span>
              </ValidationProvider>
            </v-col>
            <v-col cols="12">
              <ValidationProvider name="Name" rules="required|email" v-slot="{ errors }">
                <v-text-field clearable filled rounded dense v-model="email" label="E-mail"/>
                <span class="red--text">{{ errors[0] }}</span>
            </ValidationProvider>
            </v-col>
            <v-col cols="12">
              <ValidationProvider name="Name" rules="required|min:10|max:200" v-slot="{ errors }">
                <v-textarea clearable filled rounded dense v-model="message" :counter="200" label="Message" />
                <span class="red--text">{{ errors[0] }}</span>
            </ValidationProvider>
            </v-col>
          </v-row>
          <v-row justify="center" class="mb-3">
            <v-btn :disabled="!validation" color="primary" class="mr-4" @click="sendMessage">
              Send
              <v-icon class="ml-2">mdi-send</v-icon>
            </v-btn>
          </v-row>
        </v-form>
      </ValidationObserver>
    </v-card-text>
  </v-card>
</template>

<script>
import { ValidationObserver } from 'vee-validate';

export default {
  data: () => ({
    name: '',
    email: '',
    message: '',
    validation: true
  }),
  methods: {
    async sendMessage() {
      this.validation = await this.$refs.contactUs.validate();
    },
  },
  components: { ValidationObserver }
}
</script>