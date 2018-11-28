<template>
  <el-table :data="rows" stripe style="width: 100%">
    <el-table-column prop="_id" label="ID"></el-table-column>
    <el-table-column prop="shopName" label="名称"></el-table-column>
    <el-table-column prop="shopLicenceNum" label="营业执照号码"></el-table-column>
    <el-table-column prop="shopAdd" label="营业地址"></el-table-column>
    <el-table-column prop="shopLocation" label="定位"></el-table-column>
    <el-table-column prop="shopCorporate" label="法人"></el-table-column>
    <el-table-column prop="shopTel" label="联系电话"></el-table-column>
    <el-table-column prop="shopFeature" label="特色"></el-table-column>
    <el-table-column prop="shopCommission" label="佣金比例"></el-table-column>
    <el-table-column label="店员">
      <template slot-scope="shopEmployee">
        <el-button @click="handleClick(shopEmployee.row.shopEmployee)" type="text" size="small">查看店员</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions, mapState } = createNamespacedHelpers(
  "myShopApp"
);
export default {
  name: "shopList",
  // 加载完成阶段
  mounted() {
    this.getAllShopAsync();
  },
  computed: {
    ...mapState(["curPage", "eachPage", "total", "maxPage", "rows"])
  },
  methods: {
    ...mapActions(["getAllShopAsync"]),
    handleClick(employee) {
      console.log(employee);
    }
  }
};
</script>

<style>
</style>
