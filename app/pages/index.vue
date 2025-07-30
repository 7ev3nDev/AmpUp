<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  MglMap,
  MglGeoJsonSource,
  MglLineLayer,
} from '@indoorequal/vue-maplibre-gl';

const mapStyleUrl = 'https://api.maptiler.com/maps/toner-v2/style.json?key=r1YS7QfxD3sbOvLMbT9K'
const geojsonUrl = '/api/venues.geojson'

const map = ref()

const onMapLoad = ({ map }) => {
  const canvas = map.getCanvas() as HTMLCanvasElement
  if (canvas) {
    canvas.addEventListener('dragstart', (e) => e.preventDefault())
  }
  
  map.on('click', 'unclustered-points', (e) => {
    const props = e.features?.[0]?.properties
    if (props) alert(props.name)
  })
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