<template>
  <div>
    <b-form-select
      v-model="countries.selected"
      :options="countries.options"
      class="form-control"
      @change="actionSetCurrentStateInfo"
    ></b-form-select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  created() {
    this.actionCargarCountries();
  },
  methods: {
    ...mapActions(["actionCargarCountries", "actionSetCurrentStateInfo"])
    // ...mapActions({
    //   setCurrentStateInfo: 'actionSetCurrentStateInfo'
    // })
  },
  computed: {
    ...mapGetters(["countries"])
  }
};
</script>
