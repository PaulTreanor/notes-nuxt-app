<template>
    <div class="Confirm">
        <b-form v-on:submit.prevent="handleSubmit">

            <b-form-group id="confirm-password-input" label="Conform password">
                <b-form-input type="tel" v-model="confirmationCode" required></b-form-input>
            </b-form-group>

            <b-button block variant="primary" type="submit" :disabled="isConfirmationCodeValid">Log in</b-button>
        </b-form>
    </div>
</template>

<script>

import { Auth } from "aws-amplify";

export default {
    data() {
        return {
            confirmationCode: ""
        }
    },
    methods : {
        

        async handleSubmit(a) {
            console.log("handling Confirm submit")

            // d
            
        },

        
    },
    computed: {
        

        isConfirmationCodeValid() {
            return this.confirmationCode.length > 0;
        }
    },
    
}
</script>

<style scoped>
@media all and (min-width: 480px) {
  .Confirm {
    padding: 60px 0;
  }

  .Confirm form {
    margin: 0 auto;
    max-width: 320px;
  }
}
</style>

