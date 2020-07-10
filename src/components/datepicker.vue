<template>
  <div justify="center">
    
      <v-row>
        <v-col class="hidden-xs-only">
          
        </v-col>
        <v-col xs12 lg4 class="d-flex main">
          
          <v-icon color="primary" class="dateicon">
              mdi-calendar-blank
            </v-icon>
            <span>
              選擇日期
            </span>
            <v-icon color="grey" class="close ml-auto mr-3">
              mdi-close 
            </v-icon>
            <!-- <v-card
      class="d-flex mb-6"
      color="grey lighten-2"
      flat
      tile
    >
      <v-card
        v-for="n in 3"
        :key="n"
        :class="n === 3 && 'ml-auto'"
        class="pa-2"
        outlined
        tile
      >
        Flex item
      </v-card>
    </v-card> -->
        </v-col>
        <v-col class="hidden-xs-only">
         
        </v-col>
      </v-row>
      <v-row>
        
      
      <v-col class="text-center" xs12 sm6>
      <v-date-picker
        v-model="picker"
        year-icon="mdi-calendar-blank"
        color="#7f74B7"
        class="yellor"
        next-icon=""
        prev-icon=""
        no-title
        first-day-of-week="1"
      ></v-date-picker>
      <div class="my-2">
        <router-link :to="query" >
          <v-btn dark color="#7f74B7" depressed >選擇</v-btn>
        </router-link>
          
      </div>
    </v-col>
</v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        picker: new Date().toISOString().substr(0, 10),
      }
    },
    computed:{
      query(){
        return '/weekcalendar?date='+ this.picker
      }
    },
    methods:{
      format(){
        today=>today.toISOString
      }
    }

  }
</script>

<style >
thead tr{
  box-shadow: 0 8px 4px -6px rgba(0, 0, 0, 0.3) ;
}

.main{
  margin:0 150px;
}

.dateicon{
  margin-left: calc(15%+20px);
}

@media(max-width: 420px){
  .dateicon{
  margin-left: 30px;
}

.main{
  margin:0 0px;
}
}



/* tbody{
  background-color: grey;
} */
</style>