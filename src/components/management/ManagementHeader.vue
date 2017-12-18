<template>
  <div class="hello">
    <div class="managementHeader">
      <div class="nav-left">
        <img src="../../../static/logo.jpg" alt="" style="width: 48px;height: 48px;">
      </div>
        <span class="title">
          Management
        </span>
      <div class="nav-right">
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <span>Donz</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    font-size: 18px;
    font-weight: 600;
    color: white;
  }
  .managementHeader{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background-color: #2b85e4;
  }
  .nav{
    display: flex;
    flex-direction: row;
  }
  .nav-left{
    margin-left: 2%;
  }
  .nav-right{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    padding-right: 2%;
    font-size: 15px;
    color: white;
  }
</style>
