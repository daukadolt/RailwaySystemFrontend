<template>
<div >
    
   <div class="main-content">
      <div class="ticket">
        <div class="ticket__main">
          <div class="header">treenatree</div>
          <div class="info passenger">
            <div class="info__item">Passenger</div>
            <input class="input_field" type="text" value="" 
            placeholder="Passenger Name" autocomplete="off">
          </div>
         <button class="button"> <span> Buy ticket </span></button>
           <div class="info departure">
            <div class="info__item">Document ID</div>
            <input class="input_field" type="text" value="" 
            placeholder="input" autocomplete="off">
          </div>
          <div class="info arrival">
            <div class="info__item">Phone Number</div>
            <input class="input_field" type="text" value="" 
            placeholder="input" autocomplete="off">
          </div>
          <div class="info date">
            <div class="info__item">Date</div>
         <!--   <input class="input_field" type="text" value="" 
            placeholder="input" autocomplete="off">-->
            <input type="date" id="datepicker">
          </div>
          <div class="info time">
            <div class="info__item">Time</div>
            <div class="info__detail">input</div>
          </div>
          <div class="info carriage">
            <div class="info__item">car</div>
            <div class="info__detail"></div>
          </div>
          <div class="info seat">
            <div class="infox__item">Seat</div>
            <div class="info__detail"></div>
          </div>
          <div class="fineprint">
            <p>Boarding begins 30 minutes before departure. Snacks available for purchase from The Honeydukes Express.</p>
            <p>This ticket is Non-refundable • bla bla some information </p>
          </div>

          <div class="barcode">
            <div class="barcode__scan"></div>
            <div class="barcode__id">001256733</div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
 export default {
    name: "TicketOrder",
    data() {
      return {
          
      }
    },
    methods: {
    },
    components: {
    }
  }
</script>
