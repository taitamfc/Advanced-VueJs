<template>
  <div id="app">
    <ul class="nav nav-pills">
      <li>
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li>
        <router-link to="/add" class="nav-link">Add</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
