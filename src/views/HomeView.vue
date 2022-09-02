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
          <Clients />
        </v-card>
        <v-toolbar flat color="transparent" class="mt-8">
          <v-toolbar-title class="text-h6">Our Trusted Partner</v-toolbar-title>
        </v-toolbar>
        <Partner />
        <v-card
          flat
          color="#E2F2E5"
          class="rounded-xl mtop mbottom mx-10 pa-4"
          height="350"
        >
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="5">
              <v-card
                class="rounded-xl  mobile"
                outlined
                flat
                height="350"
                width="200"
              >
                <v-img src="phone.png" height="350" ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="7">
              <h1 class="mt-16">Download App</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                Provident sequi esse tempore maiores quasi quia non.<br />
                Itaque laboriosam dicta nostrum accusantium assumenda,<br />
                vitae ab ut vel tenetur minima natus commodi!
              </p>
              <v-btn color="black" dark class="mb-10">
                <v-icon color="white" left>fab fa-apple</v-icon>
                App Store
              </v-btn>
              <v-btn color="black" dark class="ml-4 mb-10">
                <v-icon color="white" left>fab fa-google-play</v-icon>
                Play Store
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Clients from "../components/Clients";
import Partner from "../components/Partner";

export default {
  name: "HomeVue",

  components: {
    NavBar,
    Footer,
    Products,
    Clients,
    Partner,
  },
};
</script>
