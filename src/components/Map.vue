<template>
  <div class="mt-4" v-if="currentStateInfo">
    <!-- <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-circle :lat-lng="circle.center" :radius="circle.radius" :color="circle.color" />
    </l-map> -->
    <l-map :zoom="zoom" :center="centers" style="height: 500px; width: 100%">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-circle :lat-lng="centers" :radius="circle.radius" :color="circle.color" />
    </l-map>
    <!-- {{centers}} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LCircle,
  LRectangle,
  LPolygon,
  LPolyline
} from "vue2-leaflet";

export default {
  name: "GeometryTest",
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LRectangle,
    LPolygon,
    LPolyline
  },
  data() {
    let latitude = 47.41322;
    let longitude = -1.0482;
    return {
      zoom: 10,
      center: [latitude, longitude],
      circle: {
        center: latLng(latitude, longitude),//latLng(47.41322, -1.0482),
        radius: 4500,
        color: "green"
      },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  computed: {
    ...mapGetters(["currentStateInfo"]),
    centers() {
      console.log('esto ', this.currentStateInfo)
      return [this.currentStateInfo.latitude ?? 0, this.currentStateInfo.longitude ?? 0]
    }
  }
};
</script>
