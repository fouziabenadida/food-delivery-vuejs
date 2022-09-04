<template>
  <div>
    <NavBar />
    <v-container fluid>
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-card class="mx-auto" width="70%">
          <v-img :src="details.img" max-height="400"></v-img>
          <v-card-title>Name: {{ details.name }}</v-card-title>
          <v-card-title> Price: ${{ details.price }} </v-card-title>
          <v-card-title> Rating: {{ details.rate }}* </v-card-title>
          <v-card-subtitle> {{ details.description }} </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <div class="text-center">
              <v-chip @click="goToCart()" class="ma-2" color="primary">
                Go to cart
              </v-chip>

              <v-chip @click="addItem" class="ma-2" color="green">
                Add item
              </v-chip>

              <v-chip @click="removeItem" class="ma-2" color="red" text-color="white"
                >Remove item</v-chip
              >
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-container>

    <Footer />
  </div>
</template>


<script>
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";

export default {
  name: "food-details",
  components: {
    NavBar,
    Footer,
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    addItem() {
      this.$store.dispatch("addItem", this.details);
    },
    removeItem() {
      this.$store.dispatch("removeItem", this.details);
    },
  },
  data() {
    return {
      details: {},
    };
  },
  created() {
    var product = this.$store.state.products.filter(
      (x) => x.id == this.$route.params.id
    )[0];

    this.details = product;
  },
};
</script>



<style scoped>
</style>
