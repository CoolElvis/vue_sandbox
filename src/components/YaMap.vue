<template>
  <div>
    <div>{{ header }}</div>
    <button v-on:click="addLine">Add line</button>
    <button v-on:click="reset">reset</button>
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
          this.myMap.setBounds(this.myMap.geoObjects.getBounds())
        }
      },

      reset() {
        this.myMap.geoObjects.removeAll();
      },

      createLine() {
        return new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
            [Services.getRandomArbitrary(55.40, 55.50), Services.getRandomArbitrary(37.40, 37.50)],
            [Services.getRandomArbitrary(55.30, 55.20), Services.getRandomArbitrary(37.40, 37.50)]
          ], {
            balloonContent: "Ломаная линия"
          },
          {
            balloonCloseButton: false,
            strokeColor: Services.getRandomColor(),
            strokeWidth: 6,
            strokeOpacity: 1
          });
      },

      initMap() {
        ymaps.ready(() => {
          this.myMap = new ymaps.Map("map", {
            center: [55.72, 37.44],
            zoom: 10,
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
    width: 900px;
    height: 500px;
    padding: 0;
    margin: 0;
  }
</style>
