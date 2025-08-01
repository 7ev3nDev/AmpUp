import { defineStore } from 'pinia'
import type {Map, LngLat} from "maplibre-gl";

export const useMapStore = defineStore('map', () => {
    const map = ref<Map | null>(null);
    const center = ref<LngLat | null>(null);

    function setMap(mapInstance: Map) {
        map.value = mapInstance
        center.value = mapInstance.getCenter();
        mapInstance.on('moveend', () => {
            center.value = mapInstance.getCenter();
        });
    }

    return {
        map,
        center,
        setMap
    }
});