// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Order from '@/views/Order.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import CategoryProductList from '@/views/CategoryProductList.vue';
import Cart from '@/views/Cart.vue';
import Profile from "@/views/Profile.vue";
import UserActivity from "@/views/UserActivity.vue";

const routes = [
  { path: '/', 
    name: 'home',
    component: Home
  },
  { path: '/order',
    name: 'order',
    component: Order,
    beforeEnter: [authCheck]
  },
  { path: '/register', 
    name: 'register',
    component: Register 
  },
  { path: '/login', 
    name: 'login',
    component: Login 
  },
  {
    path: '/products/:id',
    name: 'product',
    component: ProductDetail,
    props: true,
    beforeEnter: [authCheck]
  },
  {
    path: '/category/:id?',
    name: 'category',
    component: CategoryProductList,
    props: true,
    beforeEnter: [authCheck]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    beforeEnter: [authCheck]
  },
  {
    path: '/profile/:id',
    name: 'profile',
    component: Profile
  },
  {
    path: '/activity',
    name: 'activity',
    component: UserActivity,
    beforeEnter: [authCheck]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function authCheck(to){
  if (
    // make sure the user is authenticated
    sessionStorage.getItem('userData') === null && to.name !== 'login'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  }
}

export default router;