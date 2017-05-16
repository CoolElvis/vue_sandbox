<template>
  <div>
    <div>{{ header }}</div>
    <button v-on:click="addLine">Add line</button>
    <div id="map"></div>
  </div>
</template>


<script>
  import Services from '../services'

  export default {
    name: 'ya-map',
    data() {
      return {
        header: "Yandex Map",
        myMap: {}
      };
    },

    methods: {
      addLine(event) {
        if (event) {
          this.myMap.geoObjects.add(this.createLine());
        }
      },

      createLine() {
        return new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
            [55.80, 37.50],
            [55.70, Services.getRandomArbitrary(37.40, 37.50)]
          ], {
            balloonContent: "Ломаная линия"
          },
          {
            balloonCloseButton: false,
            strokeColor: Services.getRandomColor(),
            strokeWidth: 6,
            strokeOpacity: 0.8
          });
      },

      initMap() {
        ymaps.ready(() => {
          this.myMap = new ymaps.Map("map", {
            center: [55.72, 37.44],
            zoom: 12,
            type: 'yandex#hybrid',
            controls: ['smallMapDefaultSet']
          });
        });
      }

    },

    created() {
      this.initMap()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    width: 800px;
    height: 500px;
    padding: 0;
    margin: 0;
  }
</style>
