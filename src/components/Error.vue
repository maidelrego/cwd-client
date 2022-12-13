<template>
  <v-alert prominent dismissible type="error">
    <ul>
      <li v-for="error in err" :key="error">{{ error }}</li>
    </ul>
  </v-alert>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    err: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>