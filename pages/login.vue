<template>
    <div class="Login">
        <b-form v-on:submit.prevent="handleSubmit">

            <b-form-group  id="email-input" label="Email" >
                <b-form-input autoFocus type="email" value="email" v-model="email" required></b-form-input>
            </b-form-group>

            <b-form-group id="password-input" label="Password">
                <b-form-input type="password" v-model="password" required></b-form-input>
            </b-form-group>

            <b-button block variant="primary" :disabled="isFormInvalid">Log in</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods : {
        handleSubmit() {
            console.log("Form submitted")
        }
    },
    computed: {
        isFormInvalid() {
            // log in button disabled if form invalid
            if (this.email.length > 0 && this.password.length > 0){
                return false
            }
            return true
        }
    }
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