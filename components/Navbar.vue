<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>Scratch</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="loggedIn" @click="handleLogOut">Log out </b-nav-item>
        <b-nav-item v-if="!loggedIn" href="/login">Log in</b-nav-item>
        <b-nav-item v-if="!loggedIn" href="/signup">Sign up</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
import { Auth } from "aws-amplify";

export default {

  methods: {
    async handleLogOut() {
      await Auth.signOut();
      this.$store.commit('logOut')
      this.$router.push('/login') 

    }
  },

  computed: {
    loggedIn: function() {
      return this.$store.state.loggedIn;
    }
  }
}
</script>