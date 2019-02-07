import Vuex from 'vuex'
import Vue from 'vue'
import { serverApi } from '../config/api'
// import { FETCH_DATA } from './storeConstant'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        blogPictures: [],
        fetchDataProcess: false,
        error: false
    },
    mutations: { 
        fetchDataProcess: (state) => {
            return state.fetchDataProcess = ! state.fetchDataProcess
        },
        addDataToStore: (state, data) => {
            state.fetchDataProcess = ! state.fetchDataProcess;
            return state.blogPictures.push(...data)
        },
        fetchError: (state) => {
            return state.error = !true;
        },
        deleteDataFromStore: (state, idToDelete) => {
            return state.blogPictures.splice(idToDelete-1, 1);
        }
    },
    actions: { 
        fetchDataFromServer: ({commit}) => {
            commit('fetchDataProcess');
            axios.get(serverApi)
                .then((data) => {
                    let ourDataImageArray = data.data.slice(0, 4);
                    commit('addDataToStore', ourDataImageArray);
                })
                .catch((error) => {
                    commit('fetchError');
                    console.log(error);
                })
        },
        deleteDataFromServer: ({commit}, dataId) => {
            axios.delete(`${serverApi}+/${dataId}`)
            .catch((error) => {
                console.log(error);
            });
            commit('deleteDataFromStore',dataId);
        }
    },
    getters: { 
    
    }
})