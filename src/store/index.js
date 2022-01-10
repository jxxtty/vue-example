import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        num: 1,
    },
    getters: {
        isNum() {
            return store.state.num;
        }
    },
    mutations: {
        // test() {
        //     return store.state.num + 1;
        // }
        plus (state, num) {
            state.num = state.num + num;
        },
    },
    actions: {

    }

});
