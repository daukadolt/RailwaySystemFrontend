<template>
<div>
  <!-- <VMovingTrain/> -->
  queryParams {{this.$route.query}}
  chosenSeats {{this.chosenSeats}}
<div v-for="(arrayOfSeats, carriageNumber) in variants" v-bind:key="carriageNumber">
    <button>{{ carriageNumber }}</button>
  <table>
  <tr>
    <th v-for="(seatObj, i) in variants[carriageNumber]" :key=i>
      <input type="checkbox" :checked='!variants[carriageNumber][i]["is_free"]' @change="updateSelectedSeats(carriageNumber, seatObj['seatNum'], $event)"/>{{seatObj['seatNum']}}
    </th>
  </tr>
</table>
</div>
</div>
</template>
<script>
// import VMovingTrain from "../components/VMovingTrain.vue";
import { repositoryFactory } from '../api/repositoryFactory';
const routesRepository = repositoryFactory.get("routes");
export default {
    name: "BookingPage",
    created() {
      routesRepository.getSeatsForRoute(this.$route.query.startDate, this.$route.query.depDate, this.$route.query.arrDate, this.$route.query.routeId)
        .then( (response) => {
          response.data // json
          // this.variants = response.data;
          this.variants = {}
          response.data.forEach((seatObj) => {
            console.log(seatObj)
            if(seatObj.carriage_num in this.variants) {
              this.variants[seatObj.carriage_num].push( {"seatNum": seatObj.seat_num, "is_free": seatObj.is_free} )
            } else {
              this.variants[seatObj.carriage_num] = []
              this.variants[seatObj.carriage_num].push( {"seatNum": seatObj.seat_num, "is_free": seatObj.is_free} )
            }
          })
          /*
          data: {
            variants: []
          }
          */
        } 
        )
  //       this.variants = { '1':
  //  [ { seatNum: 1, is_free: true },
  //    { seatNum: 2, is_free: true },
  //    { seatNum: 3, is_free: true },
  //    { seatNum: 4, is_free: true } ],
  // '2':
  //  [ { seatNum: 1, is_free: true },
  //    { seatNum: 2, is_free: true },
  //    { seatNum: 3, is_free: true },
  //    { seatNum: 4, is_free: true } ],
  // '3': [ { seatNum: 1, is_free: true } ] }
      // finalForm = {
      //   1: [{seatNum: 1, is_free: true}, {}]
      // }
    },
    data: function() {
        return {
        variants: [],
        chosenSeats: [],
        newResponse: {}
        }
    }, components: {
        // VMovingTrain
    }, methods: {
      testMethod() {
        alert(123)
      },
      updateSelectedSeats(carriageNum, seatNum, event) {
        if (event.target.checked === true) {
          this.chosenSeats = this.chosenSeats.filter(reservation => {
            if(reservation.carriageNum === carriageNum && reservation.seatNum === seatNum) return false;
            return true;
          })
          this.chosenSeats.push({ "seatNum": seatNum, "carriageNum": carriageNum })
        } else {
          this.chosenSeats = this.chosenSeats.filter(reservation => {
            if(reservation.carriageNum === carriageNum && reservation.seatNum === seatNum) return false;
            return true;
          })
        }
      }
    }
}
</script>
<style lang="scss" scoped>
  @import "../assets/SeatReserve";
</style>