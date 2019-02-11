import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { FETCH_DATA, LOAD_NEW_IMAGE, DELETE_IMAGE } from './actionsConstants';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/photos';

export const state = {
  blogPictures: [],
  fetchDataProcess: false,
  error: false,
  counterToCreateID: 0,
};
export const mutations = {
  fetchDataProcess: (state) => {
    state.fetchDataProcess = true;
  },
  loadImage: (state, data) => {
    state.fetchDataProcess = false;
    state.blogPictures.push(...data);
    state.counterToCreateID = state.blogPictures.length;
  },
  fetchError: (state) => {
    state.error = true;
  },
  deleteImage: (state, idToDelete) => {
    state.blogPictures = state.blogPictures.filter((item) => {
      return item.id !== idToDelete;
    });
  },
  addNewImageToStore: (state, newImage) => {
    state.counterToCreateID++;
    return state.blogPictures.push(newImage);
  },
};
export const actions = {
  [FETCH_DATA]: ({ commit }) => {
    commit('fetchDataProcess');
    axios.get()
      .then((data) => {
        const ourDataImageArray = data.data.slice(0, 4);
        commit('loadImage', ourDataImageArray);
      })
      .catch(() => {
        commit('fetchError');
      });
  },
  [DELETE_IMAGE]: ({ commit }, dataId) => {
    axios.delete()
      .catch(() => {
      });
    commit('deleteImage', dataId);
  },
  [LOAD_NEW_IMAGE]: ({ commit }, newImage) => {
    commit('addNewImageToStore', newImage);
    axios.post()
      .catch(() => {
      });
  },
};
export const getters = {

};

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
