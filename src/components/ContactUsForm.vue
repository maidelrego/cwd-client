<template>
  <v-card class="mt-5" tile>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation class="mt-3">
        <v-row>
          <v-col cols="12">
            <v-text-field clearable filled rounded dense v-model="name" :counter="10" :rules="nameRules" label="Name" required />
          </v-col>
          <v-col cols="12">
            <v-text-field clearable filled rounded dense v-model="email" :rules="emailRules" label="E-mail" required />
          </v-col>
          <v-col cols="12">
            <v-textarea clearable filled rounded dense v-model="message" :counter="200" :rules="messageRules" label="Message"
              required />
          </v-col>
        </v-row>
        <v-row justify="center" class="mb-3">
          <v-btn :disabled="!valid" color="primary" class="mr-4" @click="validate">
            Send
            <v-icon class="ml-2">mdi-send</v-icon>
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    message: null,
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length >= 20 && v.length <= 200) || 'Message must be less than 200 characters or more than 10',
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>