/**
 * Created by coolevis on 16.05.17.
 */

export default {

  getRandomColor(){
    return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
  },

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


}
