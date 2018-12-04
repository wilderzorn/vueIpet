<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>爱宠帮门店登陆页面</span>
    </div>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" placeholder="输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="flatLogin">平台管理员登录</el-button>
        <el-button type="primary" @click="storeInfo">登陆</el-button>
        <el-button type="primary" @click="storeReg">注册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("StoreLoginAPP");
export default {
  name: "storeLogin",
  data() {
    return {
      password: "",
      username: ""
    };
  },
  methods: {
    ...mapActions(["loginAsync"]), //获取异步方法
    storeInfo() {
      if (this.password === "" || this.username === "") {
        alert("账号或者密码不能为空");
      } else {
        let users = {
          userName: this.username,
          userPwd: this.password
        };
        this.loginAsync(users).then(res => {
          let [user] = res;
          if (res.length >= 1) {
            localStorage.user = JSON.stringify({
              _id: user._id,
              userName: user.userName
            });
            this.$router.push({ name: "info" });
          } else {
            this.$message("账号密码不存在");
          }
        });
      }
    },
    // 门店注册
    storeReg() {
      this.$router.push({ path: "/storeReg" });
    },
    flatLogin() {
      this.$router.push({ path: "/flatlogin" });
    }
  }
};
</script>

<style>
.box-card {
  width: 480px;
}
</style>
