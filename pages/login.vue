<template>
    <div class="Login">
        <b-form v-on:submit.prevent="handleSubmit">

            <b-form-group  id="email-input" label="Email" >
                <b-form-input autoFocus type="email" value="email" v-model="email" required></b-form-input>
            </b-form-group>

            <b-form-group id="password-input" label="Password">
                <b-form-input type="password" v-model="password" required></b-form-input>
            </b-form-group>

            <b-button block variant="primary" type="submit" :disabled="isFormInvalid">Log in</b-button>
        </b-form>
    </div>
</template>

<script>

import { Auth } from "aws-amplify";

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods : {
        

        async handleSubmit(a) {
            console.log("handling the submit    ")
            try {
                await Auth.signIn(this.email, this.password);
                alert("Logged in");
                
                // set Vuex variable loggedIn as true
                this.setLogIn();
                this.$router.push('/')  

                

            } catch (e) {
                alert(e.message);
            }
        }, 

        setLogIn() {
            console.log('setting login to true')
            this.$store.commit('logIn')
            
        },

        
    },
    computed: {
        isFormInvalid() {
            // log in button disabled if form invalid
            if (this.email.length > 0 && this.password.length > 0){
                return false
            }
            return true
        }
    },
    
}
</script>

<style scoped>
@media all and (min-width: 480px) {
  .Login {
    padding: 60px 0;
  }

  .Login form {
    margin: 0 auto;
    max-width: 320px;
  }
}
</style>