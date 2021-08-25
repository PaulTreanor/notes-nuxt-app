<template>
    <div class="Signup">
        <b-form v-on:submit.prevent="handleSubmit">

            <b-form-group  id="email-input" label="Email" >
                <b-form-input autoFocus type="email" value="email" v-model="email" required></b-form-input>
            </b-form-group>

            <b-form-group id="password-input" label="Password">
                <b-form-input type="password" v-model="password" required></b-form-input>
            </b-form-group>

            <b-form-group id="confirm-password-input" label="Conform password">
                <b-form-input type="password" v-model="confirmPassword" required></b-form-input>
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
            password: "",
            confirmPassword: "",
            confirmationCode: ""
        }
    },
    methods : {
        

        async handleSubmit(a) {
            console.log("handling signup submit")

            // display confirmation component 
            
        },

        
    },
    computed: {
        isFormInvalid() {
            // log in button disabled if form invalid
            if (this.email.length > 0 && this.password.length > 0 && this.password != this.confirmPassword){
                return false
            }
            return true
        },

        isConfirmationCodeValid() {
            return this.confirmationCode.length > 0;
        }
    },
    
}
</script>

<style scoped>
@media all and (min-width: 480px) {
  .Signup {
    padding: 60px 0;
  }

  .Signup form {
    margin: 0 auto;
    max-width: 320px;
  }
}
</style>

