<template>
    <header>
  <div class="header">
    <div class="logo">
        <h4 class="sweet">eFood-Delivery</h4>
        <img class="photo" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" width="45px " height="45px" style="margin-left: 10px "  />
    </div>

<div class="d-flex cart">
  <i class="fa fa-shopping-cart cart-icon"></i>
  <span class="cart-count">{{count}}</span>
  <v-btn  class="login" >LogIn</v-btn>
  <v-btn class="sign" >Sign up</v-btn>

</div>

  </div>
</header>   
</template>


<script>
export default {
    name:'NavBar',

    computed: {
        count() {
            return this.$store.state.cartItemCount;
        }
    }
}

</script>



<style scoped>
.header{
    height: 60px;
    background:lightgrey ;
    display: flex;
    justify-content: space-between;
}
.logo{
    display: flex;
    margin-left: 15px;
    padding: 6px;
    cursor: pointer;
}
.cart-count{
    font-size: 16px;
    padding: 0 5px;
    margin-left: -35px;
    color: #d4570cf2;
    background: white;
    height: 20px;
    border-radius: 50%;
    width: 20px;
}
.cart{
    width: 300px;
    justify-content: space-evenly;
    padding-top: 3px;
}
.cart-icon{
    line-height: 45px;
    font-size: 24px;
    color: #2aa5a0;
    cursor: pointer;
}
.login,
.sign{
    font-weight: 600;
    margin-top: 10px;
}
.photo{
    border-radius: 50%;
}

</style>