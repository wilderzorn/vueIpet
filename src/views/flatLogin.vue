<template>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>平台登陆页面</span>
      </div>
      <el-form   label-width="80px">
          <el-form-item label="用户名">
            <el-input  v-model="$route.params.username" placeholder="输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input  placeholder="输入密码" v-model="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"   @click="flatInfo">登陆</el-button>
            <el-button type="primary" @click="flatReg">注册</el-button>
          </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("FlatLoginApp");
export default {
  name: "flatLogin",
    data() {
    return {
      password: "",
    };
  },
  methods: {
     ...mapActions(["flatLoginAsync"]), //获取异步方法
    flatInfo() {
      if (this.password === "" || this.$route.params.username === "") {
        this.$message("账号或密码不为空");
      }else{
        let users={
          userName:this.$route.params.username,
          userPwd:this.password
        }
        this.flatLoginAsync(users).then(res=>{
          if(res.status){
     this.$router.push({
            name: "flatinfo",
          });
          }else{
      this.$message("账号密码不存在");
          }
        })
      }
    },
    flatReg() {
      this.$router.push({ path: "/flatReg" });
    }
  }
};
</script>

<style>
.box-card {
  width: 480px;
}
</style>