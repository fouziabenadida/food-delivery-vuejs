<template>
    
<v-row justify="center" class="space px-16">
    <v-col 
    cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="(product, i) in products"
      :key="i"
    >
 
    <v-card class="mx-auto rounded-xl" max-width="300" color="" flat outlined >
   <div align="center" justify="center">

   </div>
    </v-card>


    </v-col>
</v-row>
</template>



<script>
export default {
    name:'ProductView',

    data() {
        return {

        }
    },
    computed : {
        products () {
            return this.$store.state.products
        }
    }
    
}

</script>



<style scoped>

</style>