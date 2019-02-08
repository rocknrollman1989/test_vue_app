import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { serverApi } from '../config/api'
import { FETCH_DATA, LOAD_NEW_IMAGE, DELETE_DATA_FROM_SERVER } from './actionsLib'

Vue.use(VueAxios, axios)
Vue.use(Vuex)


export const state = {
    blogPictures: [],
    fetchDataProcess: false,
    error: false,
    counterToCreateID: 0
};
export const mutations = { 
    fetchDataProcess: (state) => {
        return state.fetchDataProcess = true
    },
    addDataToStore: (state, data) => {
        state.fetchDataProcess = false;
        state.blogPictures.push(...data);
        state.counterToCreateID = state.blogPictures.length;
        return
    },
    fetchError: (state) => {
        return state.error = true
    },
    deleteDataFromStore: (state, idToDelete) => {
        return state.blogPictures = state.blogPictures.filter((item) => {
            return item.id != idToDelete
        });
    },
    addNewImageToStore: (state, newImage) => {
        state.counterToCreateID++;
        return state.blogPictures.push(newImage);
    }
};
export const actions = { 
    [FETCH_DATA]: ({commit}) => {
        commit('fetchDataProcess');
        axios.get(serverApi)
            .then((data) => {
                let ourDataImageArray = data.data.slice(0, 4);
                commit('addDataToStore', ourDataImageArray);
            })
            .catch(() => {
                commit('fetchError');
            })
    },
    [DELETE_DATA_FROM_SERVER]: ({commit}, dataId) => {
        axios.delete(`${serverApi}+/${dataId}`)
        .catch(() => {
        });
        commit('deleteDataFromStore',dataId);
    },
    [LOAD_NEW_IMAGE]: ({commit}, newImage) => {
        commit('addNewImageToStore', newImage)
        axios.post(`${serverApi}`)
        .catch(() => {
        });
    }
};
export const getters = { 

}

export const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})