import greetings from './modules/greetings'
import style from './modules/style'

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).

export default {
  modules: {
    greetings,
    style
  },
  strict: true // throw error if state mutated outside mutation handlers
}

// All types use to interact with the store are defined here
export const types = {
  // Getters
  GET_ALL_GREETINGS: 'greetings/getAllGreetings',
  GET_CURRENT_THEME: 'style/getCurrentTheme',
  IS_DEFAULT_THEME_IN_USE: 'style/isDefaultThemeInUse',

  // mutations
  REMOVE_LAST_GREETING: 'greetings/removeLastGreeting',

  // Actions
  ADD_GREETING: 'greetings/addGreeting',
  USE_DEFAULT_THEME: 'style/useDefaultTheme',
  USE_DARK_THEME: 'style/useDarkTheme'
}
