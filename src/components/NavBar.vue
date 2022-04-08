<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      class="p-3 justify-content-center"
    >
      <b-navbar-brand :to="{ name: 'home' }">
        Vue Covid Tracking
        <b-icon icon="globe"></b-icon>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>
