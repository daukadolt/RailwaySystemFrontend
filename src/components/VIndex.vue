<template>
    <div>
        <div class="bg">
            <VNavbar/>
            <VFromToSearch/>
            <VMainPageTableAndMap/>
            <Popup/>
        </div>
    </div>
</template>

<script>
import VNavbar from "./VNavbar.vue";
import VFromToSearch from "./VFromToSearch.vue";
import VMainPageTableAndMap from "./VMainPageTableAndMap.vue";
import Popup from "./Popup.vue";


export default {
    name: "VIndex",
    data: function() {
        return {
            currentTableComponent: 'VFromToSearch'
        }
    },
    components: {
        VNavbar,
        VFromToSearch,
        VMainPageTableAndMap,
        Popup
    },
    mounted: Popup, function(){},
    computed: {
        currentTableComputed: function() {
            return this.currentTableComponent
        }
    }
}
</script>

<style scoped>
</style>