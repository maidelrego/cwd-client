<template>
  <v-text-field-simplemask v-model="displayValue" v-bind:label="label" v-bind:properties="{
    prefix: '',
    suffix: '',
    disabled: false,
    outlined: outlined,
    filled: filled,
    rounded: rounded,
    clearable: clearable,
    dense: true,
    error: error,
    placeholder: '555-555-5555',
  }" v-bind:options="{
  inputMask: '(###) ###-####',
  outputMask: '##########',
  empty: null,
  applyAfter: false,
  alphanumeric: false,
  lowerCase: false,
}" v-bind:focus="focus" v-on:focus="focus = false" />
</template>
  
<script>
export default {
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      required: false
    },
    filled: {
      type: Boolean,
      required: false,
      default: false
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false
    },
    dense: {
      type: Boolean,
      required: false,
      default: false
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false
    },
    error: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({
    focus: false
  }),
  beforeMount() {
  },
  computed: {
    displayValue: {
      get: function () {
        const val = this.value ? this.value : ''
        return val
      },
      set: function (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
  