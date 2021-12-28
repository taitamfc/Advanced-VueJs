import Vue from 'vue'
import Router from 'vue-router'
import ProductsComponent from '@/components/products.component'
import ProductAddComponent from '@/components/product-add.component'
import ProductEditComponent from '@/components/product-edit.component'
import ProductDeleteComponent from '@/components/product-delete.component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products.index',
      component: ProductsComponent
    },
    {
      path: '/add',
      name: 'products.add',
      component: ProductAddComponent
    },
    {
      path: '/edit/:id',
      name: 'products.edit',
      component: ProductEditComponent
    },
    {
      path: '/delete/:id',
      name: 'products.delete',
      component: ProductDeleteComponent
    }
  ]
})
