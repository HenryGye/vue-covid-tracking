<template>
  <!-- <b-button :to="{ name: 'test' }">ir a test</b-button> -->
  <div class="bv-example-row">
    <b-row>
      <b-col cols="8">
        <Map />
      </b-col>
      <b-col cols="4">
        <TableInfo />
        <Notes />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Notes from "../components/Notes.vue";
import TableInfo from "../components/TableInfo.vue";
import Map from "../components/Map.vue";
export default {
  components: {
    Notes,
    TableInfo,
    Map
  }
};
</script>
