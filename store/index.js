export const state = () => ({
  selectedCategories: []
})

export const mutations = {
  MUTATE_SELECTED_CATEGORY(state, selectedCategories) {
    state.selectedCategories = [...selectedCategories]
  }
}

export const actions = {
  mutateCategories({ commit }, selectedCategories) {
    commit('MUTATE_SELECTED_CATEGORY', selectedCategories)
  }
}
