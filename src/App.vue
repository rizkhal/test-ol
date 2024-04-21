<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    class="w-full h-screen"
  >
    <ol-view
      ref="view"
      :center="center"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-image-layer>
      <ol-source-vector :url="wpp" :format="geoJson"> </ol-source-vector>
      <ol-style>
        <!-- <ol-style-fill color="#d2d4d4" /> -->
        <ol-style-stroke color="#64748b" :width="2" />
      </ol-style>
    </ol-vector-image-layer>
    <ol-vector-image-layer v-for="(url, index) in filenames" :key="index">
      <ol-source-vector :url="`${domain}/buffer/${url}.json`" :format="geoJson">
      </ol-source-vector>
      <ol-style>
        <ol-style-stroke color="#64748b" :width="2" />
      </ol-style>
    </ol-vector-image-layer>
  </ol-map>
</template>

<script setup>
import { ref, inject } from "vue";
import { filenames } from "./utils"; // anjay keren bat gua 😱

const center = ref([119.9623869, -1.5261941]);
const projection = ref("EPSG:4326");
const zoom = ref(5);
const domain = window.location.origin;

const wpp = ref(`${window.location.origin}/wpp.json`);
const format = inject("ol-format");
const geoJson = new format.GeoJSON();
</script>
