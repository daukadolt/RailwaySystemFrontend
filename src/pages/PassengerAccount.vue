<template>
    <div>Passenger account {{passengerData}}</div>
</template>

<script>
import store from '../store';

    export default {
        name: "PassengerAccount",
        data() {
            return {
                passengerData: null
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => vm.setPassenger(store.state.passenger))
        },
        methods: {
            setPassenger(passengerData) {
                this.passengerData = passengerData;
            }
        }
    }
</script>

<style scoped>

</style>