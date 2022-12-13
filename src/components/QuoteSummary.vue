<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-icon color="primary" class="mr-5" x-large>mdi-account</v-icon><span class="aboutUsBody">{{ fullName }}</span>
          <br>
          <v-icon color="primary" class="mr-5" x-large>mdi-phone</v-icon><span class="aboutUsBody">{{ quote.phone }}</span>
          <br>
          <v-icon color="primary" class="mr-5" x-large>mdi-map-marker</v-icon><span class="aboutUsBody">{{ fullAddress }}</span>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-icon color="primary" class="mr-5" x-large>mdi-door</v-icon><span class="aboutUsBody">{{ quote.doorDesign }}</span>
          <br>
          <v-icon color="primary" class="mr-5" x-large>mdi-brush-variant</v-icon><span class="aboutUsBody">{{ quote.finishColor }}</span>
          <br>
          <v-icon color="primary" class="mr-5" x-large>mdi-hanger</v-icon><span class="aboutUsBody">{{ quote.doorKit }}</span>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-icon color="primary" class="mr-5" x-large>mdi-hand-extended</v-icon><span class="aboutUsBody">{{ doorHandleString}}</span>
          <br>
          <v-icon color="primary" class="mr-5" x-large>mdi-ruler</v-icon><span class="aboutUsBody">{{ fullDimensions }}</span>
          <br>
          <v-icon color="primary" class="mr-5" x-large>{{ installOrDeliveryIcon }}</v-icon><span class="aboutUsBody">{{ installOrDeliveryString }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    fullAddress() {
      if (this.quote.address && this.quote.city && this.quote.state && this.quote.zip) {
        return `${this.quote.address} ${this.quote.address2}, ${this.quote.city}, ${this.quote.state} ${this.quote.zip}`;
      } else {
        return '';
      }
    },
    fullName() {
      return `${this.quote.firstName} ${this.quote.lastName}`;
    },
    fullDimensions() {
      return `${this.quote.dimensionsH}in H  x ${this.quote.dimensionsW}in W`;
    },
    doorHandleString() {
      return 'Door Handle' + ' - ' + this.quote.doorHandle;
    },
    installOrDeliveryString() {
      return this.fullName + ' ' + 'wants ' + this.quote.installOrDelivery;
    },
    installOrDeliveryIcon() {
      if (this.quote.installOrDelivery === 'Delivery') {
        return 'mdi-truck-delivery';
      } else {
        return 'mdi-account-hard-hat';
      }
    }
  },
}
</script>