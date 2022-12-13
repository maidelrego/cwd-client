import moduleFactory from '../modules/moduleFactory'

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
    zip: '',
    finishColor: '',
    doorDesign: '',
    doorKit: '',
    doorHandle: '',
    installOrDelivery: '',
    dimensionsH: null,
    dimensionsW: null,
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
  state.obj.zip = ''
}

Quotes.actions.resetAddress = function ({ commit }) {
  commit('RESET_ADDRESS')
}

export default Quotes
