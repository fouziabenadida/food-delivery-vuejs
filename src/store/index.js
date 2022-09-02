import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1, name: "Cake",img:"https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80", Price: "$100", description: "Very Tasty Cake", rate: "4.1"
      },
      {
        id: 2, name: "Spagetti", img:"https://images.unsplash.com/photo-1635264685671-739e75e73e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", Price: "$80", description: "Chilly", rate: "4.2"
      },
      {
        id: 3, name: "Fries", img:"https://images.unsplash.com/photo-1608219994488-cc269412b3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", Price: "$70", description: "Cripsy", rate: "4.2"
      },
      {
        id: 4, name: "Pizza",img:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", Price: "$65", description: "Very Tasty", rate: "4.2"
      },
      {
        id: 5, name: "Soupe",img:"https://images.unsplash.com/photo-1621303837910-b680a8b1eae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80", Price: "$20", description: "Delicious", rate: "4.3"
      },
      {
        id: 6, name: "Burger",img:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80", Price: "$105", description: "Delicious", rate: "4.3"
      }
    ]




  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
