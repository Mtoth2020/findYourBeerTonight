import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        search: null,
        beers: [],
        loading: true
    },
    mutations: {
        set_products: (state, products) => {
            state.products = products
        },
        changeLoadingState: (state, loading) => {
            state.loading = loading
        }
    },
    actions: {
        get_products_from_api({commit}) {
            return axios('https://api.punkapi.com/v2/beers?page=2&per_page=12', {
                method: "GET"
            })
                .then((products) => {
                    commit('set_products', products.data)
                    commit('changeLoadingState', false)
                    return products
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
    },
    getters: {
        products(state) {
            return state.products
        },
    },
    modules: {
    }
})
