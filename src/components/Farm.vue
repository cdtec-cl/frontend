<template>
    <div>    
    <v-layout :wrap="true" class="pa-5">
        <v-flex xs12>
            <h1>{{$route.params.name}}</h1>
            <span>{{this.$store.state.login}}</span>
        </v-flex>
        <v-flex xs12>
            <v-banner single-line :elevation=1>
                <v-icon slot="icon" color="success" size="36">settings_input_antenna</v-icon>
                Estado GATEWAY                 
                <v-btn left color="success" text >
                    {{state}}
                </v-btn>
                
            </v-banner>
        </v-flex>
        <v-flex xs6 md4 class="pt-5">
            <v-card 
                color="secondary"
                dark
            >
                <v-card-text class="white--text">
                    <v-icon slot="icon" size="36">dns</v-icon>  
                    <div class="headline mb-2">Sistema de bombeo</div>
                    Ver datos de sistema de bombeo.
                </v-card-text>

                <v-card-actions>
                    <v-btn text>Listen Now</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex> 
        <v-flex xs6 md4 class="pt-5">
            <v-card 
                color="secondary"
                dark
            >
                <v-card-text class="white--text">
                    <v-icon slot="icon" size="36">dns</v-icon>  
                    <div class="headline mb-2">Sistema de bombeo</div>
                    Ver datos de sistema de bombeo.
                </v-card-text>

                <v-card-actions>
                    <v-btn text>Listen Now</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>      
    </v-layout>
    </div>
</template>

<script>
export default {
    name: 'Farm',
    data() {
        return {
            title: '',
            state: 'Operando'
        }
    }
}
</script>
