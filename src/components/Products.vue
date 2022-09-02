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
      <v-card class="mx-auto" max-width="344">
        <v-img :src="product.img" height="200px"></v-img>

        <v-card-title>
          {{ product.name }}
        </v-card-title>

        <v-card-subtitle>
          {{ product.description }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text> Add to cart </v-btn>

          <v-spacer></v-spacer>

          <p>${{ product.price }}</p>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>



<script>
export default {
  name: "ProductView",

  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>



<style scoped>
</style>