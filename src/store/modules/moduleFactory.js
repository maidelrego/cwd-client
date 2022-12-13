import { doAPIGet, doAPIPost, doAPIPut } from '../../lib/api'
import _ from 'lodash'

function moduleFactory (getMeta) {
  const template = _.cloneDeep(objectTemplate)
  template.state = getDefaultState(getMeta)
  return template
}

/**
 * Returns the default state
 *
 * @returns {Object} Default state
 */
function getDefaultState (metaFunc) {
  // add logic for initializing a default state

  return {
    error: null, // basic state for all should be null error
    obj: {
      id: null, // basic state for all should be a null id,
      ...metaFunc().stateFunction()
    },
    changed: false,
    metaFunc: metaFunc,
  }
}

const objectTemplate = {
  state: {
  },
  namespaced: true,
  mutations: {
    INIT_OBJECT (state, obj) {
      Object.keys(state.obj).forEach((key) => {
        if (obj === null || obj[key] === undefined) {
          return
        }
        if (state.obj[key] !== obj[key]) {
          if (Number(obj[key]) === Number(state.obj[key]) && Number(obj[key]) !== 0) return 
          else {
            state.changed = true
          }
          state.obj[key] = obj[key]
        }
      })
    },
    SET_CHANGED_FLAG (state, flag) {
      state.changed = flag
    },
    CLEAR_OBJECT (state) {
      Object.assign(state, getDefaultState(state.metaFunc))
    },
    SET_ERROR (state, msg) {
      state.error = msg
    },
    CLEAR_ERROR (state) {
      state.error = ''
    }
  },
  actions: {
    clear ({ commit }) {
      commit('CLEAR_OBJECT')
    },
    setChangedFlag ({ commit }, val) {
      commit('SET_CHANGED_FLAG', val)
    },
    setFromObject ({ commit }, obj) {
      commit('INIT_OBJECT', obj)
    },
    saveData ({ state, dispatch, commit }) {
      const saveData = {}
      const meta = state.metaFunc()

      // iterate through the state object
      Object.keys(state.obj).forEach((key) => {
        // any logic to trim state to fields ONLY in the database

        // for example, we can't save the id as part of the record
        if (state.obj[key] === undefined ||
          key === 'id') {
          return
        }

        // save an object that's DB/api compatible
        saveData[key] = state.obj[key]
      })

      return new Promise((resolve, reject) => {
        // update vs save
        if (state.obj.id) {
          doAPIPut(`${meta.apiStub}/${state.obj.id}`, saveData).then(async (res) => {
            if (res.status !== 200) {
              commit('SET_ERROR', res.data)
              reject(res)
            } else {
              commit('CLEAR_ERROR')
              dispatch('setFromObject', res.data).then(() => {
                commit('SET_CHANGED_FLAG', false)
                resolve(res.data)
              })
            }
          }, (err) => {
            console.debug(meta.objectName + ' rejected in doput:', err)
          }).catch((err) => {
            console.debug(meta.objectName + 'caught in doput:', err)
          })
        } else {
          doAPIPost(`${meta.apiStub}`, saveData).then(async (res) => {
            if (res.status !== 200) {
              commit('SET_ERROR', res.data)
              reject(res.data)
            } else {
              commit('CLEAR_ERROR')
              commit('INIT_OBJECT', { id: res.data.id })
              dispatch('setFromObject', res.data).then(() => {
                commit('SET_CHANGED_FLAG', false)
                resolve(res.data)
              })
            }
          }, (err) => {
            console.debug(meta.objectName + ' rejected in dopost:', err)
          }).catch((err) => {
            console.debug(meta.objectName + ' caught in dopost:', err)
          })
        }
      })
    },
    pullData: ({ commit, state }) => {
      const meta = state.metaFunc()
      return doAPIGet(`${meta.apiStub}`).then((res) => {
        if (res.status !== 200) {
          commit('SET_ERROR', res.data)
          throw new Error('There was an error during the API Get operation')
        } else {
          return res.data
        }
      })
    },
  }
}

export default moduleFactory
