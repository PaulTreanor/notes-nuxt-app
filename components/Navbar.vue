<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand>Scratch</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/signup">Link</b-nav-item>
        <b-nav-item href="/login" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>