import greetings from './modules/greetings'

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).

export default {
  modules: {
    greetings
  },
  strict: true // throw error if state mutated outside mutation handlers
}

// All types use to interact with the store are defined here
export const types = {
  // Getters
  GET_ALL_GREETINGS: 'greetings/getAllGreetings',

  // mutations
  REMOVE_LAST_GREETING: 'greetings/removeLastGreeting',

  // Actions
  ADD_GREETING: 'greetings/addGreeting'
}
