<script setup lang="ts">
import { ref } from 'vue'
import {
  MglMap,
  MglGeoJsonSource,
  MglLineLayer,
} from '@indoorequal/vue-maplibre-gl';
import type { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css'
import { IndexSideBar } from "#components";

const mapStyleUrl = 'https://api.maptiler.com/maps/toner-v2/style.json?key=r1YS7QfxD3sbOvLMbT9K'
const geojsonUrl = '/api/venues.geojson'

const map = ref();
const mapStore = useMapStore()
const layoutStore = useLayoutStore()

const defaultSideBarRef = shallowRef(IndexSideBar);

onMounted(() => {
  layoutStore.setSideBarContext({
    component: defaultSideBarRef,
  })
});

onUnmounted(() => {
  layoutStore.setSideBarContext({
    component: null,
  })
});

const onMapLoad = ({ map }: {map: Map}) => {
  const canvas = map.getCanvas() as HTMLCanvasElement
  if (canvas) {
    canvas.addEventListener('dragstart', (e) => e.preventDefault())
  }
  
  mapStore.setMap(map);
}
</script>

<template>
  <ClientOnly>
    <MglMap
        ref="map"
        :map-style="mapStyleUrl"
        :center="[12.4964, 41.9028]"
        :zoom="8"
        height="100vh"
        @map:load="onMapLoad"
    >
      <!--      <MglGeoJsonSource />-->
    </MglMap>
  </ClientOnly>
</template>

<style scoped>
</style>