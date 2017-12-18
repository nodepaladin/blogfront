<template>
  <div>
    <div class="container-footer">
      <ul style="flex: 1;text-align: right">
        <li v-for="item in footerList1">{{item.name}}</li>
      </ul>
      <ul style="flex: 1;text-align: center">
        <li v-for="item in footerList2">{{item.name}}</li>
      </ul>
      <ul style="flex: 1;">
        <li v-for="item in footerList3">{{item.name}}</li>
      </ul>
    </div>
    <div style="display: flex;flex-direction: row;padding-bottom: 16px;justify-content: center;background-color: lightgray;">
      2011-2017 &copy; icarus
    </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      footerList1: [
        { name: '底部菜单1' },
        { name: '底部菜单1' },
        { name: '底部菜单1' },
        { name: '底部菜单1' },
      ],
      footerList2: [
        { name: '底部菜单2' },
        { name: '底部菜单2' },
        { name: '底部菜单2' },
        { name: '底部菜单2' },
      ],
      footerList3: [
        { name: '底部菜单3' },
        { name: '底部菜单3' },
        { name: '底部菜单3' },
        { name: '底部菜单3' },
      ],
    };
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

li {
  margin: 8px;
}

a {
  color: #42b983;
}
.container-footer{
    display: flex;
    flex-direction: row;
    padding: 16px;
    font-size: 13px;
    background-color: lightgray;
}
</style>
