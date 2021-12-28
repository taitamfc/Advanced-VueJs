<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="panel-title">Manage products</h3>
        </div>
        <div class="col-lg-6">
          <div class="input-group">
            <input type="text" class="form-control" />
            <span class="input-group-btn">
              <button
                on-click="search(txt.value)"
                class="btn btn-default"
                type="button"
              >
                Go!
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" v-bind:key="product.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>
              <router-link
                :to="{ name: 'products.edit', params: { id: product.id } }"
                class="btn btn-info"
                >Edit</router-link
              >
              |
              <router-link
                :to="{ name: 'products.delete', params: { id: product.id } }"
                class="btn btn-danger"
                >Delete</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductService from './../services/product.service'
export default {
  name: 'ProductsComponent',
  data () {
    return {
      products: []
    }
  },
  methods: {
    getAll () {
      ProductService.getAll().then((response) => {
        this.products = response.data
      })
    }
  },
  mounted () {
    this.getAll()
  }
}
</script>
