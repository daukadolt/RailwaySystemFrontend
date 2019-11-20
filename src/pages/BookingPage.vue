<template>
  <div>
    <!-- <VMovingTrain/> -->
    queryParams {{this.$route.query}}
    chosenSeats {{this.chosenSeats}}
    <div v-for="(arrayOfSeats, carriageNumber) in variants" v-bind:key="'Carriage ' + carriageNumber">
      <button>Carriage #{{ carriageNumber }}</button>
      <table>
        <tr>
          <th v-for="(seatObj, i) in variants[carriageNumber]" :key="'Seat ' + i">
            <input type="checkbox" :checked='!variants[carriageNumber][i]["is_free"]'
                   @change="updateSelectedSeats(carriageNumber, seatObj['seatNum'], $event)"
                   :disabled='!variants[carriageNumber][i]["is_free"]'/>
            {{seatObj['seatNum']}}
          </th>
        </tr>
      </table>
      <button @click="bookSelectedSeats">Book</button>
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
          this.variants = {};

          response.data.forEach((seatObj) => {
            console.log(seatObj);
            if(seatObj.carriage_num in this.variants) {
              this.variants[seatObj.carriage_num].push( {"seatNum": seatObj.seat_num, "is_free": seatObj.is_free} )
            } else {
              this.variants[seatObj.carriage_num] = [];
              this.variants[seatObj.carriage_num].push( {"seatNum": seatObj.seat_num, "is_free": seatObj.is_free} )
            }
          })
        }
        )
    },
    data: function() {
      return {
        variants: [],
        chosenSeats: [],
      }
    }, components: {
      // VMovingTrain
    }, methods: {
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
      },
      bookSelectedSeats() {
        this.$router.push({ path: 'buyticket', query: {...this.$route.query, chosenSeats: this.chosenSeats} })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/SeatReserve";
</style>