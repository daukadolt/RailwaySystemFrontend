<template>
    <div class="autocomplete">
        <input type="text" v-model="search" @input="onChange" >
        <ul class="autocomplete-results" v-show="isOpen">
            <li v-for="(result, i) in results" :key="i" @click="setResult(result)" class="autocomplete-result">{{result.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "autocomplete",
        props: {
            items: {

            },
            value: null,
        },
        data() {
            return {
                search: '',
                results: [],
                isOpen: false,
                placeholder: ''
            }
        },
        methods: {
            onChange() {
                this.isOpen = true;
                this.filterResults();
            },
            filterResults() {
                this.results = this.items.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
            },
            setResult(result) {
                this.search = result.name;
                this.$emit("input", result.localityId);
                this.isOpen = false;
            }
        }
    }
</script>

<style scoped>
    .autocomplete {
        position: inline;
        margin:10px;
    }

    .autocomplete-results {
        padding: 0;
        margin: 0;
        border: 1px solid #eeeeee;
    }

    .autocomplete-result {
        list-style: none;
        text-align: left;
        padding: 4px 2px;
        cursor: pointer;
    }

    .autocomplete-result:hover {
        background-color: #4AAE9B;
        color: white;
    }
    input {
        align-content: center;
        vertical-align: middle;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ddd;
    }
</style>