<template>
    <div>
        <div class="bg">
            <VNavbar/>
            <VFromToSearch/>
        </div>
    </div>
</template>

<script>
import VNavbar from "./VNavbar.vue";
import VFromToSearch from "./VFromToSearch.vue";

export default {
    name: "VIndex",
    components: {
        VNavbar,
        VFromToSearch
    }
}
</script>

<style scoped>
</style>