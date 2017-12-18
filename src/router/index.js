import Vue from 'vue';
import Router from 'vue-router';
// import Index from '@/components/Index';
import Blog from '@/components/Blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Management from '@/components/management/Management';
import ManagementHeader from '@/components/management/ManagementHeader';
import BlogManagement from '@/components/management/BlogManagement';
import CommentManagement from '@/components/management/CommentManagement';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        header: Header,
        content: Blog,
        footer: Footer,
      },
    },
    {
      path: '/blog',
      name: 'Blog',
      components: {
        header: Header,
        content: Blog,
        footer: Footer,
      },
    },
    {
      path: '/management',
      name: 'Management',
      components: {
        header: ManagementHeader,
        content: Management,
        // footer: Footer,
      },
      children: [
        {
          path: 'blogManagement',
          component: BlogManagement,
        },
        {
          path: 'commentManagement',
          component: CommentManagement,
        },
      ],
    },
  ],
});
