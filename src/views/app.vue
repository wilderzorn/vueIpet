<template>
<el-card class="box-card">
 <div slot="header" class="clearfix">
        <span>欢迎光临</span>
      </div>
           <el-form class="box-but">
          <el-form-item >
          <el-button type="primary"  @click="storeLogin" >门店注册登陆入口</el-button>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="flatLogin">平台注册登陆入口</el-button>
          </el-form-item>
          <el-form-item>
          </el-form-item>
        </el-form>
</el-card>
</template>

<script>
export default {
  name: "app",
  methods: {
    storeLogin() {
      this.$router.push({ path: "/storeLogin" });
    },
    flatLogin() {
      //   console.log(this);
      this.$router.push({ path: "/flatLogin" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
.box-card {
  margin: 200px auto;
}
.box-but {
  text-align: center;
  margin-top: 50px;
}
</style>
