<template>
  <div>
    <!-- <VMovingTrain/> -->
    queryParams {{this.$route.query}}
    chosenSeats {{this.chosenSeats}}<div class="move">
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

      </table></div>
      <button @click="bookSelectedSeats" class="book">Book</button>
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
  button{
  display: inline-block;
    padding: 0.3em -1.3em;
    width:50%;
-webkit-box-shadow: 5px 50px 64px -20px rgba(40,77,84,1);
-moz-box-shadow: 5px 50px 64px -20px rgba(40,77,84,1);
box-shadow: 5px 50px 64px -20px rgba(40,77,84,1);
    border-radius: 0.7em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto',sans-serif;
    font-weight: 100;
    color: #FFFFFF;
    background:linear-gradient(to bottom right, rgb(146, 166, 223), #423563);
    text-align: center;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    font-size: 21px;
}

button:hover {
background-color : #214b64;
}
.book{
   background: linear-gradient(to bottom right, rgb(3, 151, 15), #72ff20);
   width: 10%;
   
text-align: center;
}
.move{
 -webkit-box-shadow: 5px 50px 64px -20px rgb(197, 211, 214);
-moz-box-shadow: 5px 50px 64px -20px rgb(197, 211, 214);
box-shadow: 5px 50px 64px -20px rgb(197, 211, 214);
background-color: white; 
width: 70%;
height: 70%;
margin-left: 17%;
border-radius: 0.9em;
}
@media all and (max-width:30em){
.button{
display:block;
margin:0.2em auto;
width:30% ;
text-align: center;
}

}
</style>