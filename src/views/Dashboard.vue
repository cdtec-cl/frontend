<template>
  <div>
    
    <v-layout :wrap="true" class="pa-5">
      <v-flex xs12> <h1>DASHBOARD {{title}} .</h1> </v-flex>
      <v-flex xs12 md7 >
        <v-flex xs12>        
          <v-card 
            :loading="false"
            :elevation=1            
          >
            <v-img
              class="white--text"
              height="120px"
              src="../assets/3.jpg"
            >
              <v-card-title class="align-end fill-height">I'm a title</v-card-title>
            </v-img>
            
            <v-card-title>I'm a title</v-card-title>

            <v-card-text>I'm card text</v-card-text>
            <v-card-actions>
              <v-btn icon>
                <v-icon>star_border</v-icon>
              </v-btn>
              <v-btn text>Click</v-btn>
              <v-btn outlined>Click</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>  
        <v-layout>
          <v-flex xs12 md7 class="pa-5">        
            <v-card 
              :elevation=1
              :loading="false"             
            >
              <v-img
                class="white--text"
                height="120px"
                src="../assets/2.jpg"
              >
                <v-card-title class="align-end fill-height">I'm a title</v-card-title>
              </v-img>
              <v-card-text>I'm card text</v-card-text>
              <v-card-actions>                
                <v-btn outlined>Click</v-btn>
              </v-card-actions>

            </v-card>
          </v-flex>
          <v-flex xs12 md5 class="pa-5">        
            <v-card 
              :loading="true"
              :elevation=1
            >
              <v-img
                class="white--text"
                height="120px"
                src="../assets/1.jpg"
              >
                <v-card-title class="align-end fill-height">I'm a title</v-card-title>
              </v-img>
              <v-card-text>I'm card text</v-card-text>
              <v-card-actions>
                <v-btn outlined>Click</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>   
        </v-layout>   
      </v-flex>
      <v-flex xs12 md5
        color="success"
        height="100"
      >
        <span>Irrimax</span>

      </v-flex>
      
      
    </v-layout>
    
    
  </div>
</template>

<script>



export default {
    name: 'Footer',
    props: {
        title: 'Dashboard'
    },
    data() {
        return {
        }
    }
}
</script>

