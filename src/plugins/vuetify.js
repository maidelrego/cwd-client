import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VuetifyMask from 'vuetify-mask'
Vue.use(VuetifyMask)

Vue.use(Vuetify);
Vue.component('PhoneNumberMask', () => import('@/components/Masks/PhoneNumberMask.vue'))

export default new Vuetify({
  theme: {
    breakpoint: {
      thresholds: {
        xs: 340,
        sm: 540,
        md: 800,
        lg: 1280
      }
    },
    themes: {
      light: {
        primary: '#bea855',
        secondary: '#958270',
        success: '#69BC45',
        vuetifyPrimary: '#1867c0',
        almostBlack: '#323336',
        lightGrey: '#F1F1F1',
        muted: '#76787B'
      },
      dark: {
        white: '#ffffff'
      }
    }
  }
});
