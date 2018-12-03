<template>
     <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>平台注册页面</span>
      </div>
      <el-form   label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="username" ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input  ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="reg">注册</el-button>
          </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
  name: "flatReg",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    reg() {
      this.$router.push({
        name: "_flatlogin",
        params: { username: this.username }
      });
    }
  }
};
</script>

