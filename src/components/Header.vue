<template>
  <div class="hello">

    <Menu mode="horizontal" active-name="1" class="nav">
      <div class="nav-left">
      <MenuItem name="1" class="title">
        <router-link to="/">
        <Icon type="ios-paper"></Icon>
        Home
        </router-link>
      </MenuItem>
      <MenuItem name="2" class="title">
        <router-link to="/blog">
        <Icon type="ios-people"></Icon>
        Blog
        </router-link>
      </MenuItem>
      <MenuItem name="3" class="title">
        <router-link to="/">
        <Icon type="settings"></Icon>
        Music
        </router-link>
      </MenuItem>
      <MenuItem name="4" class="title">
        <router-link to="/blog">
          <Icon type="settings"></Icon>
          Movie
        </router-link>
      </MenuItem>
      <MenuItem name="5" class="title">
        <router-link to="/">
          <Icon type="settings"></Icon>
          Soon
        </router-link>
      </MenuItem>
      </div>
      <div class="nav-right">
        <a @click="registerModal = true">
          signIn
        </a>
        |
        <a @click="loginModal = true">
          login
        </a>
      </div>
    </Menu>
    <Modal
      v-model="registerModal"
      title="登录"
      @on-ok="ok"
      @on-cancel="cancel"
      >
      <Form ref="formInline" :model="formLogin" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formLogin.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formLogin.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">登录账号</Button>
        </FormItem>
      </Form>
      <div slot="footer"></div>
    </Modal>

    <Modal
      v-model="loginModal"
      title="注册"
      @on-ok="register"
      @on-cancel="cancel"
    >
      <Form ref="formInline" :model="formLogin" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formLogin.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formLogin.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">注册账号</Button>
        </FormItem>
      </Form>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginModal: false,
      registerModal: false,
      formLogin: {
        user: '',
        password: '',
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    login() {

    },
    register() {

    },
    cancel() {

    },
    handleSubmit(name) {
//      let that = this;
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loginModal = false;
          this.$Message.success('提交成功!');
          this.$router.push('/management');
        } else {
          this.$Message.error('表单验证失败!');
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    font-size: 17px;
  }
  .nav{
    display: flex;
    flex-direction: row;
  }
  .nav-left{
    flex: 5;
  }
  .nav-right{
    flex: 1;
    font-size: 17px;
    font-weight: 500;
  }
  .logo {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-image: url('../assets/logo.png');
    background-size: 40px 40px;
  }
  .ivu-menu-horizontal.ivu-menu-light:after{
    display: none;
  }
</style>
