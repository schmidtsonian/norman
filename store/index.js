export const state = () => ({
  navigation: {}
})

export const mutations = {
  SET_NAVIGATION (state, navigation) {
    state.navigation = navigation
  },
  SET_ERROR (state, error) {
    state.navigation = error
  }
}

export const actions = {
  async fetchMenu ({ commit }, $prismic) {
    try {
      const navigation = (await $prismic.api.getSingle('navigation')).data
      commit('SET_NAVIGATION', navigation)
    } catch (e) {
      const error = 'Please create a menu document'

      commit('SET_ERROR', error)
    }
  }
}
