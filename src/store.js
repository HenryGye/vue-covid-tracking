import Vue from "vue";
import Vuex from "vuex";

import {
  getCountries,
  getSpecificCountrie,
  getCurrentValueState,
} from "./assets/api/api";

import usLatLng from "./assets/json/usLatLng";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectCountries: {
      selected: null,
      options: [
        { value: null, text: "Please select an option", disabled: true },
      ],
    },
    currentStateInfo: null,
    currentValueState: null,
  },
  mutations: {
    SET_COUNTRIES(state, payload) {
      state.selectCountries.options = payload;
    },
    SET_CURRENT_STATE_INFO(state, payload) {
      state.currentStateInfo = payload;
    },
    SET_CURRENT_VALUE_STATE(state, payload) {
      state.currentValueState = payload;
    },
  },
  actions: {
    actionCargarCountries(context, payload) {
      getCountries().then((data) => {
        context.state.selectCountries.options = [
          ...context.state.selectCountries.options,
          ...data.map((c) => {
            return {
              value: c.state,
              text: c.name,
            };
          }),
        ];
        context.commit("SET_COUNTRIES", context.state.selectCountries.options);
      });
    },
    actionSetCurrentStateInfo(context, payload) {
      getSpecificCountrie(payload.toLowerCase()).then((data) => {
        let latLng =
          usLatLng
            .filter((e) => e.state.toLowerCase() == data.name.toLowerCase())
            .map((e) => {
              return {
                latitude: e.latitude,
                longitude: e.longitude,
              };
            })[0] ?? 0;
        let currentStateInfo = { ...data, ...latLng };
        context.commit("SET_CURRENT_STATE_INFO", currentStateInfo);
      });
      getCurrentValueState(payload.toLowerCase()).then((data) => {
        context.commit("SET_CURRENT_VALUE_STATE", data);
      });
    },
  },
  getters: {
    countries(state) {
      return state.selectCountries;
    },
    currentStateInfo(state) {
      return state.currentStateInfo;
    },
    currentValueState(state) {
      return state.currentValueState;
    },
  },
});
