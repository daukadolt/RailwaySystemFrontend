<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Choose your city"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          invalid-feedback="City is required"
        >
        <!--<label class="typo__label">Select with search</label>-->
        <multiselect v-model="value" :options="options" :custom-label="nameWithLang" placeholder="Select one" label="name" track-by="name"></multiselect>
        <!--pre class="language-json"><code> {{value}} </code></pre-->
        </b-form-group>
      </form>
      
    </b-modal>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { repositoryFactory } from "../api/repositoryFactory";
const citiesRepository = repositoryFactory.get("cities");
  export default {
    components: { Multiselect },
    name: "Popup",
    data() {
      return {
        value: { name: 'City name', language: 'JavaScript' },
        options: []
      }
    },
    methods: {
      nameWithLang ({ name }) {
      return `${name}`
    }, 
     showModal() {
        this.$refs['modal'].show()
      },
      hideModal() {
        this.$refs['modal'].hide()
      },
      handleOk() {
        this.$emit("currentCitySelected", this.value);
      }
    },
    created() {
      citiesRepository.get()
            .then(response => {
              this.options = response.data;
              this.$store.commit('setCities', response.data);
      });
    },
     mounted() {
      this.showModal();
    }
  }



</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

