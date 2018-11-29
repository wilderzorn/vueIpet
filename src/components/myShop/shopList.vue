<template>
  <div>
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
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="big">查看店员</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="eachPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :page-count="maxPage"
      ></el-pagination>
    </div>
  </div>
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
    ...mapMutations(["setCurPage", "setEachPage"]),
    handleClick(shop) {
      this.$router.push({ name: "_employee", params: { shopId: shop._id } });
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    handleSizeChange(val) {
      this.setEachPage(val);
    }
  },
  watch: {
    curPage() {
      this.getAllShopAsync({
        curPage: this.curPage,
        eachPage: this.eachPage
      });
    },
    eachPage() {
      this.getAllShopAsync({ eachPage: this.eachPage });
    }
  }
};
</script>

<style>
</style>
