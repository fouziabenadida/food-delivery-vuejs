<template>
  <div class="wrapper">
    <NavBar />
    <div class="content">
      <div class="container mb-5">
        <v-toolbar flat color="transparent" class="mt-5">
          <v-toolbar-title class="text-h6">Popular Product</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn rounded color="#2aa5a0" dark class="px-8">See All</v-btn>
        </v-toolbar>
        <Products />
        <v-card flat color="#FAFAFA" class="mt-8 py-5 px-16">
            <div
              style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <h3>What Our Clients Say</h3>
            </div>
            <Clients/>
          </v-card>
          <v-toolbar flat color="transparent" class="mt-8">
            <v-toolbar-title class="text-h6"
              >Our Trusted Partner</v-toolbar-title
            >
          </v-toolbar>
          
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Clients from '../components/Clients'

export default {
  name: "HomeVue",

  components: {
    NavBar,
    Footer,
    Products,
    Clients
  },
};
</script>
