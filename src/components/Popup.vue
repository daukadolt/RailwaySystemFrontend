<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Choose your city"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          invalid-feedback="City is required"
        >
        <!--<label class="typo__label">Select with search</label>-->
        <multiselect v-model="value" :options="options" :custom-label="nameWithLang" placeholder="Select one" label="name" track-by="name"></multiselect>
        <pre class="language-json"><code>{{ value  }}</code></pre>
        </b-form-group>
      </form>
      
    </b-modal>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
 
  export default {
    components: { Multiselect },
    name: "Popup",
    data() {
      return {
        value: { name: 'Vue.js', language: 'JavaScript' },
        options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
      }
    },
    methods: {
      nameWithLang ({ name, language }) {
      return `${name} — [${language}]`
    }, 
     showModal() {
        this.$refs['modal'].show()
      },
      hideModal() {
        this.$refs['modal'].hide()
      }
    }, 
     mounted() {
      this.showModal();
    }
  }



</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

