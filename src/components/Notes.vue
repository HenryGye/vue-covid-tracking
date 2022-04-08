<template>
  <div class="mt-4" v-if="currentStateInfo">
    <b-alert show variant="info" style="text-align:left">
      <h4 class="alert-heading">Notes!</h4>
      <p class="truncate">
        {{ currentStateInfo.notes }}
      </p>
      <hr />
      <p class="mb-0">
        Visit the site
        <b-link
          :href="currentStateInfo.covid19Site"
          style="word-break:break-all;"
          target="_blank"
          >{{ currentStateInfo.covid19Site }}</b-link
        >
      </p>
    </b-alert>
  </div>
  <!-- <div v-if="currentStateInfo">
    <b-button
      class="mt-4 mb-4"
      variant="outline-primary"
      v-b-modal.modal-scrollable
      >View Notes</b-button
    >
    <b-modal
      id="modal-scrollable"
      scrollable
      centered
      :title="'State of ' + currentStateInfo.name"
      ok-only
    >
      <p class="my-1">
        {{ currentStateInfo.notes }}
      </p>
      <p class="my-2 text-center">
        Visit the site <b-link :href="currentStateInfo.covid19Site">{{ currentStateInfo.covid19Site }}</b-link>
      </p>
    </b-modal>
  </div> -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentStateInfo"])
  }
};
</script>

<style>
.modal-header .close {
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
}
button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}
.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
.modal-dialog-scrollable .modal-body {
  word-break: break-word;
}

.truncate {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
