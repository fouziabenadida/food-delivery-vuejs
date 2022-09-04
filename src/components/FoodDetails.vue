<template>
  <div class="d-flex food-details-outer">
    <NavBar />
    <div class="food-details">
      <div class="container mb-5">
        <h4 class="my-4 fw-600">Add item to cart</h4>
        <div class="row">
          <div class="col md-4" style="cursor: pointer">
            <img src="" width="300" height="300 " style="border-radius: 15px" />
          </div>
          <div class="col mb-4" style="cursor: pointer">
            <h5 class="my-4 fw-600">Name:</h5>
            <h5 class="my-4 fw-600">Price:</h5>
            <h5 class="my-4 fw-600">Description:</h5>
            <h5 class="my-4 fw-600">Rate:</h5>
          </div>
          <div>
            <v-btn @click="goToCart()" color="warning" dark> Go to cart</v-btn>
            <v-btn color="success" dark>Add item</v-btn>
            <v-btn color="danger" dark> Remove item </v-btn>
          </div>
        </div>
      </div>
    </div>
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
  },
};
</script>



<style>
</style>