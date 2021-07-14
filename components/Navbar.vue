<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>Scratch</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/login">Login</b-nav-item>
        <b-nav-item href="/signup">Sign up</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>