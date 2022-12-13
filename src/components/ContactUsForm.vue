<template>
  <v-card class="mt-5" tile>
    <v-row class="mt-5" justify="center">
      <v-col cols="6">
        <Error v-if="error" :err="error" />
      </v-col>
    </v-row>
    <v-card-text>
      <ValidationObserver ref="contactUs" v-slot="{ valid }">
        <v-form class="mt-3">
          <v-row>
            <v-col cols="12">
              <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                <v-text-field clearable filled rounded dense v-model="name" label="Name" />
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
            <v-btn :disabled="!valid" color="primary" class="mr-4" @click="saveData">
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
import { mapFields } from '../store/dataMappers'
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
  }),
  computed: {
    ...mapState('ContactUs', ['obj', 'error', 'changed']),
    ...mapFields({
      fields: [
        'name',
        'message',
        'email',
      ],
      base: 'ContactUs',
      mutation: 'INIT_OBJECT'
    }),
  },
  methods: {
    ...mapActions('ContactUs', ['saveData',]),
  },
}
</script>