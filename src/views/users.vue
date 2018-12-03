<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="color: rgb(63, 146, 142)">欢迎来到爱宠邦，新人请点击注册，已有账号请点击登录</span>
      </div>

      <!-- 账号 -->
      <el-form :model="dlzc" ref="dlzc" label-width="100px">
        <el-form-item label="账号：" prop="zh" :rules="[{ required: true, message: '账号不能为空'}]">
          <el-input type="zh" v-model.number="dlzc.zh" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item label="密码：" prop="mm" :rules="[{ required: true, message: '密码不能为空'}]">
          <el-input type="zh" v-model.number="dlzc.mm" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 邮箱 -->
        <el-form-item
          label="邮箱："
          prop="yx"
          :rules="[{ required: true, message: '邮箱不能为空'},{ type: 'email', message: '请输入正确的邮箱地址'}]"
        >
          <el-input type="zh" v-model.number="dlzc.yx" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 姓名 -->
        <el-form-item label="姓名：" prop="xm" :rules="[{ required: true, message: '姓名不能为空'}]">
          <el-input type="zh" v-model.number="dlzc.xm" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 电话号码 -->
        <el-form-item
          label="电话号码："
          prop="dh"
          :rules="[{ required: true, message: '电话号码不能为空'},{ type: 'number', message: '请输入正确的电话号码'}]"
        >
          <el-input type="zh" v-model.number="dlzc.dh" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <el-button style="margin:20px 0 0 0" type="primary" @click="login('dlzc')">登录</el-button>
      <el-button type="primary" @click="reg">注册</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      dlzc: {
        zh: "",
        mm: "",
        yx: "",
        xm: "",
        dh: ""
      },
    }
  },

  methods: {
    login(dlzc) {
      this.$refs[dlzc].validate(valid => {
        if (valid) {
          this.$message({
            showClose: true,
            message: "登录成功！！"
          });
          this.$router.push({
            name: "login"
          });
        } else {
          this.$message({
            showClose: true,
            message: "登录失败！！"
          });
          return false;
        }
      });
    },
    reg() {
      this.$router.push({
        name: "reg"
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


