<template>
<div >
    <span style="color: white">{{this.$route.query}}</span>
    <div class="main-content">
        <form @submit.prevent="bookTickets">
            <div v-for="(ticket,i) in ticketList" :key="'Ticket ' + i">
                <div class="ticket">
                    <div class="ticket__main">
                        <div class="header">treenatree</div>
                        <div class="info passenger">
                            <div class="info__item">Document Number</div>
                            <input class="input_field" type="number" v-model="ticketList[i].documentID"
                                   placeholder="Document Number" autocomplete="off" required>
                        </div>
                        <div class="info departure">
                            <div class="info__item">First Name</div>
                            <input class="input_field" type="text" v-model="ticketList[i].firstName"
                                   placeholder="First Name" autocomplete="off" required>
                        </div>
                        <div class="info arrival">
                            <div class="info__item">Last Name</div>
                            <input class="input_field" type="text" v-model="ticketList[i].lastName"
                                   placeholder="Last Name" autocomplete="off" required>
                        </div>
                        <div class="info date">
                            <div class="info__item">Date</div>
                            <!--   <input class="input_field" type="text" value=""
                               placeholder="input" autocomplete="off">-->
                            <div class="info__detail">{{ticket.date}}</div>
                        </div>
                        <div class="info time">
                            <div class="info__item">Time</div>
                            <div class="info__detail">{{ticket.time}}</div>
                        </div>
                        <div class="info carriage">
                            <div class="info__item">car</div>
                            <div class="info__detail">{{ticket.carriageNum}}</div>
                        </div>
                        <div class="info seat">
                            <div class="infox__item">Seat</div>
                            <div class="info__detail">{{ticket.seatNum}}</div>
                        </div>
                        <div class="fineprint">
                            <p>Boarding begins 30 minutes before departure. Snacks available for purchase from The Honeydukes Express.</p>
                            <p>This ticket is Non-refundable • bla bla some information </p>
                        </div>

                        <div class="barcode">
                            <div class="barcode__scan"></div>
                            <div class="barcode__id">{{ticket.ticketId}}</div>
                        </div>
                    </div>
                    <br><br>
                </div>
                <br><br>
            </div>
            <input class="input_field1" type="email" v-model="email" placeholder="Please, enter your email" autocomplete="off" required>
            <input class="input_field1" type="text" v-model="firstName" placeholder="first name" autocomplete="off" required>
            <input class="input_field1" type="text" v-model="lastName" placeholder="last name" autocomplete="off" required>
            <input class="input_field1" v-model="phone" placeholder="Please, enter your phone number" autocomplete="off" required>
            <button class="button" type="submit">Buy ticket</button>
        </form>
    </div>
</div>



</template>
<script>
import { repositoryFactory } from "../api/repositoryFactory";
const routesRepository = repositoryFactory.get("routes");
 export default {
    name: "TicketOrder",
    created() {
        // add route protection, if any of the fields required is missing - redirect to home
        if(typeof(this.$route.query.chosenSeats[0]) === 'string') {
            this.$router.push("/")
        } else {
            let passedData = {...this.$route.query};
            this.routeId = passedData.routeId;
            this.chosenSeats = passedData.chosenSeats;
            this.from = passedData.from;
            this.to = passedData.to;
            this.trainId = passedData.trainId;
            this.ticketList = [];
            this.date = passedData.date;
            this.chosenSeats.forEach(seat => {
                this.ticketList.push({
                    date: passedData.date,
                    time: passedData.depDate.split(" ")[1],
                    carriageNum: seat.carriageNum,
                    seatNum: seat.seatNum,
                    ticketId: 'randomly generated',
                    firstName: null,
                    lastName: null,
                    documentID: null
                });
            })
        }
        },
    data() {
        //{ "startDate": "2019-12-01", "depDate": "2019-12-01 01:22:22", "arrDate": "2019-12-02 22:22:22", "routeId": 4, "chosenSeats": [ { "seatNum": 2, "carriageNum": "1" }, { "seatNum": 3, "carriageNum": "1" } ] }
      return {
        ticketList:[],
        routeId: null,
        trainId: null,
        to: null,
        from: null,
        email: null,
        phone: null,
        firstName: null,
        lastName: null,
        chosenSeats: null
      }
    },
    methods: {
        bookTickets() {
            this.$emit("toggleLoadingSpinner", true);
            let passengersData = [];
            this.ticketList.forEach(seat => {
                passengersData.push({
                    carriage_num: seat.carriageNum,
                    seat_num: seat.seatNum,
                    first_name: seat.firstName,
                    last_name: seat.lastName,
                    documentID: seat.documentID
                });
            });
            routesRepository.bookTicket({
                route_id: this.routeId,
                date: this.date,
                train_id: this.trainId,
                to: this.to,
                from: this.from,
                email: this.email,
                phone: this.phone,
                first_name: this.firstName,
                last_name: this.lastName,
                passengers: passengersData
            })
                .then(() => {
                    this.$emit("toggleLoadingSpinner", false);
                    alert("Tickets have been successfully purchased! Please check your account");
                })
                .catch(() => {
                    alert("error!");
                });
        }
    },
    components: {
    }
  }
</script>
<style scoped>
    .bg {
        background-image: url("../assets/back.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .input_field{
        width: 100%;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        background-color: white;
        background-position: 1px 1px; 
        background-repeat: no-repeat;
        padding: 12px 20px 12px 40px;}
         .input_field1{
       
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        background-color: white;
        background-position: 1px 1px; 
        background-repeat: no-repeat;
        padding: 12px 20px 12px 40px;}
    
    
    .logo {
  float: left;
}

#menu {
  float: right;
}


body {

  font-family: 'Questrial', sans-serif;
}
aside.context {
  text-align: center;
  color: #333;
  line-height: 1.7;
}
aside.context a {
  text-decoration: none;
  color: #333;
  padding: 3px 0;
  border-bottom: 1px dashed;
}
aside.context a:hover {
  border-bottom: 1px solid;
}
aside.context .explanation {
  max-width: 700px;
  margin: 4em auto 0;
}
footer {
  text-align: center;
  margin: 4em auto;
  width: 100%;
}
footer a {
  text-decoration: none;
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: transparent;
  border: 1px dashed #333;
  color: #333;
  margin: 5px;
}
footer a:hover {
  background: rgba(255, 255, 255, 0.1);
}
footer a .icons {
  margin-top: 12px;
  display: inline-block;
  font-size: 20px;
}

.main-content {
  margin: 4em auto 0;
  width: 740px;
  text-transform: uppercase;
}

.ticket {
  display: grid;
  grid-template-columns: auto 0px;
  background: white;
  border-radius: 10px;
  border: 2px solid #222;
  cursor: default;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.ticket__main {
  display: grid;
  grid-template-columns: repeat(6, 1fr) 0px;
  grid-template-rows: repeat(4, min-content) auto;
  padding: 10px;
}

.header {
  grid-area: title;
  grid-column: span 7;
  grid-row: 1;
  font: 900 38px 'Montserrat', sans-serif;
  padding: 5px 0 5px 20px;
  letter-spacing: 6px;
  background: #111;
  color: #ffffff;
}

.info {
  border: 3px solid;
  border-width: 0 3px 3px 0;
  padding: 8px;
}
.info__item {
  font: 400 13px 'Questrial', sans-serif;
  letter-spacing: 0.5px;
}
.info__detail {
  font: 700 20px/1 'Jura';
  letter-spacing: 1px;
  margin: 4px 0;
}

.passenger {
  grid-column: 1 / span 6;
}

.platform {
  grid-column: 7 / span 1;
  grid-row: 2 / span 3;
  background: #c02a28;
  color: #fff;
  border-color: #000;
  text-align: center;
  padding: 10px 0;
}
.platform span {
  display: block;
}
.platform span:nth-child(1) {
  font: 900 22px/1 'Montserrat';
  letter-spacing: 1.5px;
}
.platform span:nth-child(2) {
  font: 900 29px/1 'Montserrat';
  letter-spacing: 3px;
}
.platform span:nth-child(3) {
  font: 900 16px/1.2 'Montserrat';
  letter-spacing: 0.5px;
}
.platform .number {
  display: flex;
  margin-top: 12px;
  position: relative;
}
.platform .number div:nth-child(1) {
  position: absolute;
  left: 16px;
  font: 900 90px/1 'Old Standard TT';
}
.platform .number span {
  font: 900 36px/1 'Old Standard TT';
  position: absolute;
  right: 18px;
}
.platform .number span:nth-child(1) {
  top: -2px;
  border-bottom: 2px solid;
  padding: 0 2px;
}
.platform .number span:nth-child(2) {
  top: 44px;
}

.departure, .arrival {
  grid-column-start: span 3;
}

.passenger, .departure, .date {
  border-left: 3px solid;
}

.date, .time {
  grid-column-start: span 2;
}

.fineprint {
  grid-column-start: span 5;
  font-size: 14px;
  font-family: 'Inconsolata';
  line-height: 1;
  margin-top: 10px;
  padding-right: 5px;
}
.fineprint p:nth-child(2) {
  margin: 4px 4px 0 0;
  padding-top: 4px;
  border-top: 1.5px dotted;
  font: 11px/1 'Inconsolata';
}

.snack {
  grid-column: 6 / span 1;
  width: 65px;
  margin: 10px 10px 0 0;
  position: relative;
  background: #000;
  padding: 6px 0 2px;
  text-align: center;
  border-radius: 5px;
}
.snack svg {
  fill: #f3f1c9;
  width: 36px;
}
.snack__name {
  color: #f3f1c9;
  font-size: 12px;
}
.barcode {
  grid-column-start: span 1;
  display: grid;
  margin: 10px 0 0;
  grid-template-rows: 1fr min-content;
}
.barcode__scan {
  background: linear-gradient(to right, #333 2%, #333 4%, transparent 4%, transparent 5%, #333 5%, #333 6%, transparent 6%, #333 6%, #333 8%, transparent 8%, transparent 9%, #333 9%, #333 10.5%, transparent 10.5%, transparent 11%, #333 11%, #333 12%, transparent 12%, transparent 13.5%, #333 13.5%, #333 15%, #333 17%, transparent 17%, transparent 19%, #333 19%, #333 20%, transparent 20%, transparent 21%, #333 21%, #333 22%, transparent 22%, transparent 23.5%, #333 23.5%, #333 25%, transparent 25%, transparent 26.5%, #333 26.5%, #333 27.5%, transparent 27.5%, transparent 28.5%, #333 28.5%, #333 30%, transparent 30%, transparent 32%, #333 32%, #333 34%, #333 36%, transparent 36%, transparent 37.5%, #333 37.5%, #333 40%, transparent 40%, transparent 41.5%, #333 41.5%, #333 43%, transparent 43%, transparent 46%, #333 46%, #333 48%, transparent 48%, transparent 49%, #333 49%, transparent 49%, transparent 50%, #333 50%, #333 51%, transparent 51%, transparent 53%, #333 53%, #333 54.5%, transparent 54.5%, transparent 56%, #333 56%, #333 58%, transparent 58%, transparent 59%, #333 59%, #333 60%, #333 62.5%, transparent 62.5%, transparent 64%, #333 64%, #333 64%, #333 67%, transparent 67%, transparent 69%, #333 69%, #333 70%, transparent 70%, transparent 71%, #333 71%, #333 72%, transparent 72%, transparent 73.5%, #333 73.5%, #333 76%, transparent 76%, transparent 79%, #333 79%, #333 80%, transparent 80%, transparent 82%, #333 82%, #333 82.5%, transparent 82.5%, transparent 84%, #333 84%, #333 87%, transparent 87%, transparent 89%, #333 89%, #333 91%, transparent 91%, transparent 92%, #333 92%, #333 95%, transparent 95%);
}
.barcode__id {
  letter-spacing: 4px;
  padding: 2px 0 0;
  color: #c02a28;
  font: 700 16px/1 'Jura';
}

.ticket__side {
  background: rgba(192, 42, 40, 0.2);
  box-sizing: border-box;
  border-left: 1.5px dashed #111;
  display: grid;
  grid-template-rows: repeat(2, 124px) 60px;
  grid-template-columns: 40px repeat(2, 45px);
  border-radius: 0 10px 10px 0;
}
.ticket__side .logo {
  text-align: center;
  background: #c02a28;
  padding: 10px 5px 10px 0px;
  margin: 10px 0 0 10px;
  font: 900 16px/1 'Montserrat';
  letter-spacing: 1.5px;
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  position: relative;
  color: #fff;
  writing-mode: vertical-rl;
}
.ticket__side .logo p {
  transform: rotate(180deg);
}
.ticket__side .info {
  border: 3px solid #c02a28;
  border-width: 3px 3px 0;
  grid-column-start: 2;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.ticket__side .info.side-arrive {
  margin-top: 10px;
  border-width: 3px;
}
.ticket__side .info.side-date {
  grid-column-start: 3;
  border-right: none;
}
.ticket__side .info.side-time {
  grid-column: 3 / span 1;
  grid-row: 1;
  margin-top: 10px;
  border-width: 3px 0  3px 3px;
}
.ticket__side .info__item {
  font-size: 11px;
  color: #c02a28;
}
.ticket__side .info__detail {
  font-size: 12px;
  margin: 0 2px 0 0;
  letter-spacing: 0px;
}
.ticket__side .barcode {
  grid-template-rows: 30px min-content;
  grid-row-start: 3;
  grid-column: 1 / span 3;
  margin: 9px 0 0 10px;
  text-align: center;
}
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);

body {
  background: no transparent; 
  color: #414141;
  font: 400 17px/2em 'Source Sans Pro', sans-serif;
}

.select-box {
  cursor: pointer;
  position : relative;
  max-width:  20em;
  margin: 5em auto;
  width: 100%;
}

.select,
.label {
  color: #414141;
  display: block;
  font: 400 17px/2em 'Source Sans Pro', sans-serif;
}

.select {
  width: 100%;
  position: absolute;
  top: 0;
  padding: 5px 0;
  height: 40px;
  opacity: 0;
  background: none transparent;
  border: 0 none;
}
.select-box1 {
  background: #ececec;
}
.label {
  position: relative;
  padding: 5px 10px;
  cursor: pointer;
}
.open .label::after {
   content: "▲";
}
.label::after {
  content: "▼";
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 15px;
  border-left: 5px solid #fff;
}
#datepicker {
    width: 150px;
}

</style>