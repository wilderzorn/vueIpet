<template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>门店登陆页面</span>
      </div>
      <el-form   label-width="80px">
          <el-form-item label="用户名">
            <el-input  v-model="$route.params.username" placeholder="输入用户名" ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input  v-model="password"  placeholder="输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"   @click="storeInfo">登陆</el-button>
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
      username:""
    };
  },
  methods: {
    ...mapActions(["loginAsync"]), //获取异步方法
    storeInfo() {
      // this.$router.push({ path: "/storeInfo" });
      if (this.password === "" || this.$route.params.username === "") {
        alert("账号或者密码不能为空");
      }else{
        let users={
          userName:this.$route.params.username,
          userPwd:this.password
        }
        this.loginAsync(users).then(res=>{
          if(res.status){
     this.$router.push({
            name: "info",
          });
          }else{
      this.$message("账号密码不存在");
          }
        })
      }
    },
    storeReg() {
      this.$router.push({ path: "/storeReg" });
    }
  }
};
</script>

<style>
.box-card {
  width: 480px;
}
</style>
