import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../pages/homepage.vue';
import ToDoList from '../pages/todolist.vue';
import SearchFilter from '../pages/filter.vue';
import AdminOrder from '../pages/adminOrder.vue';
import allLists from '../pages/todolist/allLists.vue';
import InProgressLists from '../pages/todolist/inProgressLists.vue';
import CompletedLists from '../pages/todolist/completedLists.vue';
import AdminOrderIndex from '../pages/adminOrder/index.vue';
import AdminOrderOrders from '../pages/adminOrder/orders.vue';
import AdminOrderProduct from '../pages/adminOrder/product.vue';
import ProductGallery from '../pages/productGallery.vue';
import ProductGalleryIndex from '../pages/productGallery/index.vue';
import ProductPage from '../pages/productGallery/productPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '', component: Homepage },
    {
      path: '/ToDoList',
      component: ToDoList,
      children: [
        { path: '', component: allLists },
        { path: 'in-progress', component: InProgressLists },
        { path: 'completed', component: CompletedLists }
      ]
    },
    { path: '/SearchFilter', component: SearchFilter },
    {
      path: '/AdminOrder',
      component: AdminOrder,
      children: [
        { path: '', component: AdminOrderIndex },
        { path: 'orders', component: AdminOrderOrders },
        { path: 'product', component: AdminOrderProduct }
      ]
    },
    {
      path: '/ProductGallery',
      component: ProductGallery,
      children: [
        { path: 'index', component: ProductGalleryIndex },
        { path: 'product/:product', component: ProductPage }
      ]
    }
  ]
});

