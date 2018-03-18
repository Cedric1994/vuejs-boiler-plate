import { themes } from '@/assets/js/themes'
import themeLoader from '@/common/plugins/themeLoader'

const state = {
  currentTheme: 'defaultTheme'
}

const getters = {
  getCurrentTheme: state => {
    return state.currentTheme
  },
  isDefaultThemeInUse: state => {
    return state.currentTheme === 'defaultTheme'
  }
}

const mutations = {
  setTheme (state, newTheme) {
    state.currentTheme = newTheme
  }
}

const actions = {
  setTheme ({ commit }, theme) {
    themeLoader(theme)
    commit('setTheme', theme)
  },
  useDefaultTheme ({ dispatch }) {
    dispatch('setTheme', themes.DEFAULT)
  },
  useDarkTheme ({ dispatch }) {
    dispatch('setTheme', themes.DARK)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
