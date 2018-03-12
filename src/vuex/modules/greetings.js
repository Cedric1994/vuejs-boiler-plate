import { fakeCall } from '../../api/fake-api'

const state = {
  greetings: ['Welcome to VueJS.']
}

const getters = {
  getAllGreetings: state => {
    return state.greetings
  }
}

// Mutation are syncronous, should only mutate the state
const mutations = {
  removeLastGreeting (state) {
    state.greetings.pop()
  },
  addGreeting (state, greeting) {
    state.greetings.push(greeting)
  }
}

// Action are asyncronous
const actions = {
  addGreeting ({ commit }, greeting) {
    commit('addGreeting', 'Wait for it ...')
    fakeCall.then(() => {
      commit('addGreeting', greeting)
    })
  }
}

export default {
  namespaced: true,
  actions,
  getters,
  state,
  mutations
}
