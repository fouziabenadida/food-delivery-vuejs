import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1, name: "Salad",img:"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price: "100.15", description: "Very Tasty Salad", rate: "4.1"
      },
      {
        id: 2, name: "Spagetti", img:"https://images.unsplash.com/photo-1635264685671-739e75e73e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", price: "80.52", description: "Chilly", rate: "4.2"
      },
      {
        id: 3, name: "Fries", img:"https://images.unsplash.com/photo-1608219994488-cc269412b3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price: "70.85", description: "Cripsy", rate: "4.2"
      },
      {
        id: 4, name: "Pizza",img:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", price: "65.54", description: "Very Tasty", rate: "4.2"
      },
      {
        id: 5, name: "Soupe",img:"https://images.unsplash.com/photo-1621303837910-b680a8b1eae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80", price: "20.85", description: "Delicious", rate: "4.3"
      },
      {
        id: 6, name: "Burger",img:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80", price: "90.54", description: "Delicious", rate: "4.3"
      },
      
      {

        id: 6, name: "Meat",img:"https://images.unsplash.com/photo-1625631980644-062c9a959279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price: "85.54", description: "Very Delicious", rate: "4.3"
      },
      {
        id: 6, name: "Fish",img:"https://images.unsplash.com/photo-1600699899970-b1c9fadd8f9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", price: "46.54", description: "Tasty", rate: "4.3"
      },
      {
        id: 6, name: "Sushi",img:"https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", price: "90.54", description: "Delicious", rate: "4.3"
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
