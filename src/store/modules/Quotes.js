import { doAPIPost } from '@/lib/api'
import moduleFactory from '../modules/moduleFactory'
import router from '@/router'

function defaultState () {
  return {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: 0,
    finishColor: '',
    doorDesign: '',
    doorKit: '',
    doorHandle: '',
    installOrDelivery: '',
    dimensionsH: 0,
    dimensionsW: 0,
  }
}

function getMeta () {
  return {
    objectName: 'Quotes',
    apiStub: 'quotes',
    stateFunction: defaultState
  }
}

const Quotes = moduleFactory(getMeta)

Quotes.mutations.RESET_ADDRESS = function (state) {
  state.obj.address = ''
  state.obj.address2 = ''
  state.obj.city = ''
  state.obj.state = ''
  state.obj.zip = 0
}

Quotes.actions.resetAddress = function ({ commit }) {
  commit('RESET_ADDRESS')
}

Quotes.actions.saveData = async function ({ commit, state }) {
  commit('CLEAR_ERROR')
  await doAPIPost('quotes', state.obj).then((res) => {
    if (res.status !== 201) {
      console.log(res)
      commit('SET_ERROR', res.message)
      throw new Error('There was an error during the API Post operation')
    } else {
      commit('CLEAR_ERROR')
      commit('CLEAR_OBJECT')
      router.push({ name: 'Thank You' })
    }
  })
}

export default Quotes
