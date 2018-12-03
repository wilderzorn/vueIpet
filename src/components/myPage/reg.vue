<template>
  <div>
    <el-card class="box-card">
      <!-- 账号 -->
      <el-form :model="zc" ref="zc" label-width="100px">
        <el-form-item label="账号：" prop="zh" :rules="[{ required: true, message: '账号不能为空'}]">
          <el-input type="zh" v-model.number="zc.zh" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item label="密码：" prop="mm" :rules="[{ required: true, message: '密码不能为空'}]">
          <el-input type="zh" v-model.number="zc.mm" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 邮箱 -->
        <el-form-item
          label="邮箱："
          prop="yx"
          :rules="[{ required: true, message: '邮箱不能为空'},{ type: 'email', message: '请输入正确的邮箱地址'}]"
        >
          <el-input type="zh" v-model.number="zc.yx" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 姓名 -->
        <el-form-item label="姓名：" prop="xm" :rules="[{ required: true, message: '姓名不能为空'}]">
          <el-input type="zh" v-model.number="zc.xm" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 电话号码 -->
        <el-form-item
          label="电话号码："
          prop="dh"
          :rules="[{ required: true, message: '电话号码不能为空'},{ type: 'number', message: '请输入正确的电话号码'}]"
        >
          <el-input type="zh" v-model.number="zc.dh" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-button style="margin:20px 0 0 0" type="primary" @click="reg('zc')">注册</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zc: {
        zh: "",
        mm: "",
        yx: "",
        xm: "",
        dh: ""
      }
    };
  },
  methods: {
    reg(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            showClose: true,
            message: "注册成功！！"
          });
          this.$router.push({
            name: "_users"
          });
        } else {
          this.$message({
            showClose: true,
            message: "注册失败！！"
          });
          return false;
        }
      });
    }
  }
};
</script>

<style>
.box-card {
  margin: 100px auto;
  text-align: center;
  width: 480px;
}
.text {
  font-size: 14px;
}
</style>
