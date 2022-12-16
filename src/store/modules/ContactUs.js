import { doAPIPost } from '@/lib/api'
import moduleFactory from '../modules/moduleFactory'
import router from '@/router'

function defaultState () {
  return {
    name: '',
    email: '',
    message: '',
    isRead: false
  }
}

function getMeta () {
  return {
    objectName: 'ContactUs',
    apiStub: 'contact-us',
    stateFunction: defaultState
  }
}

const Quotes = moduleFactory(getMeta)

Quotes.actions.saveData = async function ({ commit, state }) {
  commit('CLEAR_ERROR')
  await doAPIPost('contact-us', state.obj).then((res) => {
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
