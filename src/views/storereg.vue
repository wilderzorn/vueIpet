<template>
     <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>门店注册页面</span>
      </div>
      <el-form   label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="username" ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password"  v-model="password"></el-input>
          </el-form-item>
          <el-form-item label="登陆名">
            <el-input   v-model="userAcount"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input   v-model="userPhone"></el-input>
          </el-form-item>
            <el-form-item label="邮箱">
            <el-input   v-model="userMail"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="reg">注册</el-button>
          </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("StoreregApp");
export default {
  name: "storereg",
  data() {
    return {
      username: "",
      password: "",
      userAcount: "",
      userPhone: "",
      userMail: ""
    };
  },
  methods: {
    ...mapActions(["regAsync"]), //获取异步方法
    reg() {
      let users = {
        userName: this.username,
        userPwd: this.password,
        userAcount: this.userAcount,
        userPhone: this.userPhone,
        userMail: this.userMail,
        userType: 1,
        userStatus: 0
      };
      if (!this.username || !this.password) {
        this.$message("账号密码不能为空");
      } else {
        this.regAsync(users).then(res => {
          if (res.status) {
            this.$router.push({
              name: "_storelogin",
              params: { username: this.username, password: this.password }
            });
          } else {
            this.$message("账号或者登陆名存在");
          }
        });
      }
    }
  }
};
</script>
