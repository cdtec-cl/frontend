<template>  

  <v-app> 
    <v-content>
      
        <Navbar/>
        <v-layout>
          <v-flex class="d-none d-sm-none d-md-flex">
            <Mainmenu /> 
          </v-flex>
          <v-flex>
            <router-view style="min-height: 81vh"/>
          </v-flex>
        </v-layout>
               
        
        <Footer/>
           
    </v-content>     
  </v-app>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Mainmenu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components:{
    Navbar,
    Mainmenu,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
