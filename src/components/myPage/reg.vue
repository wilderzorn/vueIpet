<template>
  <div>
    <el-card class="box-card">
      <el-input style=" margin:0 0 0 0" placeholder="请输入你的账号" clearable></el-input>
      <el-input style=" margin:20px 0 0 0" placeholder="请输入你的密码" clearable></el-input>
      <el-input style=" margin:20px 0 0 0" placeholder="请输入你的邮箱" clearable></el-input>
      <el-input style=" margin:20px 0 0 0" placeholder="请输入你的姓名" clearable></el-input>
      <el-input style=" margin:20px 0 0 0" placeholder="请输入你的电话号码" clearable></el-input>
      <el-button style="margin:20px 0 0 0" type="primary" @click="reg">注册</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "reg",
  data() {
    return {};
  },
  methods: {
    reg() {
      this.$message({
        showClose: true,
        message: "注册成功！！"
      });
      this.$router.push({
      name:"_users"
      });
    }
  }
};
</script>

<style>
.box-card {
  margin: auto;
  text-align: center;
  width: 480px;
}
.text {
  font-size: 14px;
}
</style>