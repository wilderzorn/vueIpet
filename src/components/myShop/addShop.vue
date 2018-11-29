<template>
  <el-form :model="form" status-icon label-width="120px" style="width:500px;margin: auto;">
    <el-form-item required label="门店名称">
      <el-input v-model="form.shopName"></el-input>
    </el-form-item>
    <el-form-item required label="营业执照号码">
      <el-input v-model="form.shopLicenceNum"></el-input>
    </el-form-item>
    <el-form-item required label="营业执照图片">
      <el-input v-model="form.shopLicenceImg"></el-input>
    </el-form-item>
    <el-form-item required label="营业地址">
      <el-input v-model="form.shopAdd"></el-input>
    </el-form-item>
    <el-form-item required label="定位">
      <el-input v-model="form.shopLocation"></el-input>
    </el-form-item>
    <el-form-item required label="法人">
      <el-input v-model="form.shopCorporate"></el-input>
    </el-form-item>
    <el-form-item required label="联系电话">
      <el-input v-model="form.shopTel"></el-input>
    </el-form-item>
    <el-form-item required label="头图">
      <el-input v-model="form.shopImg"></el-input>
    </el-form-item>
    <el-form-item required label="特色">
      <el-input v-model="form.shopFeature"></el-input>
    </el-form-item>
    <el-form-item required label="佣金比例">
      <el-input v-model="form.shopCommission" :rules="[{
         type: 'number'
      }]"></el-input>
    </el-form-item>
    <el-form-item label="操作">
      <el-button type="primary" @click="addShop(form)">提交</el-button>
      <el-button type="warning" @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions, mapState } = createNamespacedHelpers(
  "myShopApp"
);
export default {
  name: "addShop",
  data() {
    return {
      form: {
        shopName: "",
        shopLicenceNum: "",
        shopLicenceImg: "",
        shopAdd: "",
        shopLocation: "",
        shopCorporate: "",
        shopTel: "",
        shopImg: "",
        shopFeature: "",
        shopCommission: ""
      }
    };
  },
  methods: {
    ...mapActions(["addShopAsync"]),
    addShop(form) {
      this.addShopAsync(form);
      this.$message("门店增加成功");
      this.$router.push({ name: "myShop" });
    },
    cancel() {}
  }
};
</script>