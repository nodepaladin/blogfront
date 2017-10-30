import Vue from 'vue';
import Router from 'vue-router';
// import Index from '@/components/Index';
import Blog from '@/components/Blog';
import Header from '@/components/Header';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        header: Header,
        content: Blog,
      },
    },
    {
      path: '/blog',
      name: 'Blog',
      components: {
        header: Header,
        content: Blog,
      },
    },
  ],
});
