<template>
    <div>
        <NavBar/>
    <form>
         <label>Email :</label>
        <input type="email"  required>

        <label>Password :</label>  
        <input type="password"  required>    

        <label>Role :</label>
        <select>
            <option value="designer">Web Designer</option> 
            <option value="developer">Web Developer</option> 
        </select>

        <div>
            <input type="checkbox" value="highschool"  >
            <label>High School</label>
            <input type="checkbox" value="bechelors"  >
            <label>Bachelor's Degree</label>
             <input type="checkbox"  value="masters" >
            <label>Master's Degree</label>
        </div>      

        <div>
            <input type="checkbox" required>
            <label>Please accept terms and conditions</label>
        </div>
        <div class="button">
            <button class="submit" type="submit">Sign up here</button>
        </div>
    </form>
    <Footer/>
</div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import Footer from '../components/Footer'
export default {
  
    name:'sign-up',
    data() {
        return {
            email: '',
            password: '',
            role: 'designer',
            education: [],
            terms: false,
        }
    },
    components: {
        NavBar,
        Footer
    }
}
    
</script>



<style scoped>
 form {
    max-width: 600px;
    margin: 30px auto;
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display:inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: bordre-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width:16px;
    margin: 0 10px 0;
    position: relative;
    top: 2px;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0 ;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    background: #eee;
}

button {
    background: rgb(7, 24, 7);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>