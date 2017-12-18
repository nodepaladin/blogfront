<template>
  <div class="container">
    <div class="managementLeft">
      <Menu active-name="1-2" :open-names="['1']" accordion @on-select="switchContent">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            内容管理
          </template>
            <MenuItem name="/management/blogManagement">文章管理</MenuItem>
            <MenuItem name="/management/commentManagement">评论管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
    </div>
    <div class="managementRight">
      <router-view></router-view>
    </div>


  </div>

</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    switchContent(pathName) {
      this.$router.push(pathName);
    },
    select() {
    },
    cancel() {

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #2d8cf0;
  font-size: 15px;
  font-weight: 500
}
a:hover{
  font-weight:800;
}
  .container{
    padding: 16px;
    display: flex;
    flex-direction: row;
  }
  p{
    text-indent: 2em;
  }
  .managementRight{
    flex: 1;
  }
  /*.managementLeft{*/
    /**/
  /*}*/
</style>
