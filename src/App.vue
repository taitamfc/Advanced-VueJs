<template>
  <div id="app">
    <h1> {{ msg }} </h1>
    <h1 v-html="msg"></h1>
    <a v-bind:href="link">Go to</a>
    <button type="button" class="btn" v-bind:class="{ 'btn-primary': true }" v-on:click="handleShowForm()" >Show Form</button>
    <input v-model="msg" placeholder="edit me">
    <p v-if="isShowForm"> THis is form </p>
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
  name: 'App',
  props: [],
  data () {
    return {
      isShowForm: false,
      link: 'google.com',
      msg: '<strong>Xin chao vuejs</strong>',
      products: []
    }
  },
  methods: {
    handleSubmit () {
      alert('submit')
    },
    handleShowForm () {
      this.isShowForm = true
    }
  },
  beforeCreate () {
    console.log('before create')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
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
