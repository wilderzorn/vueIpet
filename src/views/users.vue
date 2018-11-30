<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="color: rgb(63, 146, 142)">欢迎来到爱宠邦，新人请点击注册，已有账号请点击登录</span>
      </div>
      <el-input style=" margin:0 0 0 0" placeholder="请输入你的账号" clearable></el-input>
      <el-input style=" margin:20px 0 0 0" placeholder="请输入你的密码" clearable></el-input>
      <el-input style=" margin:20px 0 0 0" placeholder="请输入你的邮箱" clearable></el-input>
      <el-input style=" margin:20px 0 0 0" placeholder="请输入你的姓名" clearable></el-input>
      <el-input style=" margin:20px 0 0 0" placeholder="请输入你的电话号码" clearable></el-input>
      <el-button style="margin:20px 0 0 0" type="primary" @click="login">登录</el-button>
      <el-button type="primary" @click="reg">注册</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "users",
  methods: {
    login() {
      this.$router.push({
        name:"login"
      });
    },
    reg() {
      this.$router.push({
        name:"reg"
      });
    }
  }
};
</script>

<style>
.box-card {
  margin: 100px auto;
  width: 480px;
}
.text {
  font-size: 14px;
}
</style>


