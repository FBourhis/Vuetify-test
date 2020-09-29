import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'

  },
// this is the spot to modify

  theme: {
    themes: {
      light: {
        primary: '#ECC30B',
        success: '#7FEFBD',
        info: '#D56062',
        error: '#f83e70'
      }
    }
  }
})
