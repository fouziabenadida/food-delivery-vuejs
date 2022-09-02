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
        
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "HomeVue",

  components: {
    NavBar,
    Footer,
  },

};
</script>
