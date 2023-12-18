/*
 * General application related logic.
 */

export const useAppStore = defineStore('global-application', {
  state: () => ({
    currentTheme: 'light',
    user: null,
    isLoading: false
  }),

  persist: {
    //Persist only currentTheme
    paths: ['currentTheme']
  },

  getters: {
    isDark: (state) => state.currentTheme === 'dark'
  },

  actions: {
    async getUser() {
      this.isLoading = true
      await delay(3000)
      this.user = { name: 'Tyrion Lannister', avatar: '/avatars/tyrion.png' }
      this.isLoading = false
    }
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
