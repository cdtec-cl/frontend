<template>
  <div>
    <v-layout wrap>
      <v-app-bar
        color="primary"
        dark
      >
        <v-app-bar-nav-icon @click.stop="menu = !menu" class="d-block d-sm-block d-md-none"></v-app-bar-nav-icon>
        <v-img 
            src="../assets/icon.png"
            max-height=40
            max-width=40
        />
        <v-toolbar-title>
            
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>info</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon @click.stop="profile = !profile">account_circle</v-icon>
          
        </v-btn>       
      </v-app-bar>
    </v-layout>
    
    <v-navigation-drawer
        v-model="menu"
        absolute
        temporary
        Disable-Resize-Watcher=true
        float=true
    >
        <Mainmenu/>
    </v-navigation-drawer>
        
    <v-navigation-drawer
        v-model="profile"
        absolute
        temporary
        right
        Disable-Resize-Watcher=true
        float=true
        >
        <v-list-item>
            <v-list-item-avatar>
            <v-icon>account_circle</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>Usuario admin</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        
    </v-navigation-drawer>
  </div>
</template>



<script>

import Mainmenu from './Menu.vue'

export default {
    name: 'Navbar',
    components: {
        Mainmenu,
    },
    props:{
        menu: false,
        profile: true
    },
    data() {
        return {
        }
    }
}
</script>