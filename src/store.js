import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        quizs: []
    },
    mutations: {
        setData(state, data) {
            state.quizs = data;
        }
    },
    actions: {
        async getData(context) {
            let data = (await Axios.get('http://localhost:3000/quizs')).data;
            context.commit("setData", data);
        }
    }
})
