<template>
  <div class="containerBlog">
    <div class="blogContentHeader">
      选择1
      <Select class="headerItem">
        <Option value="beijing">New York</Option>
        <Option value="shanghai" disabled>London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
      选择2
      <Select class="headerItem">
        <Option value="beijing">New York</Option>
        <Option value="shanghai" disabled>London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
      选择3
      <Select class="headerItem">
        <Option value="beijing">New York</Option>
        <Option value="shanghai" disabled>London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
      <div style="flex: 3;"></div>
        <Button type="primary" shape="circle" icon="plus">写文章</Button>
    </div>
    <Table border :columns="list" :data="data6"></Table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            title: '标题',
            key: 'title',
            sortable: true,
          },
          {
            title: '作者',
            key: 'author',
          },
          {
            title: '内容概要',
            key: 'summary',
            sortable: true,
          },
          {
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 120,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small',
                  },
                }, 'View'),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small',
                  },
                }, 'Edit'),
              ]);
            },
          },
        ],
        data6: [
          {
            title: 'Nodejs入门教程（一）',
            author: 'Donz',
            summary: 'Nodejs作为时下流行的轻量级服务端语言，具有非阻塞I/O，高并发等优势。',
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗',
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道',
          },
        ],

      };
    },

  };
</script>

<style scoped>
  .containerBlog{
    /*width: 100%;*/
    min-height: 200px;
    margin: 0 16px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .blogContentHeader{
    display: flex;
    width: 100%;
    padding: 8px;
    flex-direction: row;
    /*justify-content: flex-end;*/
    align-items: center;
  }
  .headerItem{
    flex: 2;
    margin-left: 16px;
  }
</style>
