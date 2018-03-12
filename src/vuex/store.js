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
