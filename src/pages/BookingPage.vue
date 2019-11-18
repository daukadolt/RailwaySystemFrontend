<template>
<div>
  <VMovingTrain/>
  numOfCarriages {{numOfCarriages}}
  queryParams {{this.$route.query}}
  chosenSeats {{chosenSeats}}
<div v-for="(arrayOfSeats, carriageNumber) in variants" v-bind:key="carriageNumber">
    <button>{{ carriageNumber }}</button>
  <table>
  <tr>
    <th v-for="(seatObj, i) in variants[carriageNumber]" :key=i>
      <input type="checkbox" :checked='!variants[carriageNumber][i]["is_free"]' @click="updateSelectedSeats(carriageNumber, seatObj['seatNum'])"/>{{seatObj['seatNum']}}
    </th>
    <!-- <th><input type="checkbox" id="1" />1A</th>
      <th><input type="checkbox" id="2" />2A</th>
        <th><input type="checkbox" id="3" />3A</th>
          <th><input type="checkbox" id="4" />4A</th>
            <th><input type="checkbox" id="5" />5A</th>
              <th><input type="checkbox" id="6" />6A</th>
                <th><input type="checkbox" id="7" />7A</th>
                  <th><input type="checkbox" id="8" />8A</th>
                    <th><input type="checkbox" id="9" />9A</th> -->
  </tr>
</table>
</div>
</div>
</template>
<script>
import VMovingTrain from "../components/VMovingTrain.vue";
import { repositoryFactory } from '../api/repositoryFactory';
const routesRepository = repositoryFactory.get("routes");
export default {
    name: "VSeatReserve",
    created() {
      routesRepository.getSeatsForRoute("startDate", "depDate", "arrDate", "routeId")
        .then( (response) => {
          response.data // json
          this.variants = response.data;

          /*
          data: {
            variants: []
          }
          */
        } 
        )
        this.variants = { '1':
   [ { seatNum: 1, is_free: true },
     { seatNum: 2, is_free: true },
     { seatNum: 3, is_free: true },
     { seatNum: 4, is_free: true } ],
  '2':
   [ { seatNum: 1, is_free: true },
     { seatNum: 2, is_free: true },
     { seatNum: 3, is_free: true },
     { seatNum: 4, is_free: true } ],
  '3': [ { seatNum: 1, is_free: true } ] }
      // finalForm = {
      //   1: [{seatNum: 1, is_free: true}, {}]
      // }
    },
    data: function() {
        return {
        variants: null,
        numOfCarriages: null,
        chosenSeats: []
        }
    }, components: {
        VMovingTrain
    }, methods: {
      testMethod() {
        alert(123)
      },
      updateSelectedSeats(carriageNum, seatNum) {
        if(carriageNum, seatNum in this.chosenSeats) {
          var index;
          var arrayLength = this.chosenSeats.length;
          for (var i = 1; i < arrayLength; i++) {
              if(this.chosenSeats[i]==={carriageNum, seatNum}) {
                index = i;
                break;
              }
          }
          this.chosenSeats.splice(index, 1)
          console.log(this.chosenSeats.splice(index, 1))

        } else {
        this.chosenSeats.push({carriageNum, seatNum})
        }
      }
    }
}
</script>
<style lang="scss" scoped>
  @import "../assets/SeatReserve";
</style>