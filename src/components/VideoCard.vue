<template>
  <v-flex xs12 sm6 md3 lg2 pa-2>
    <v-card>
      <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px"></v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
          <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat class="orange--text">Share</v-btn>
        <v-btn flat class="orange--text">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex> 
</template>

<script>
  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>
