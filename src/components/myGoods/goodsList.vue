<template>
  <div>
    <el-table :data="rows" border style="width: 100%">
      <el-table-column fixed prop="goodsName" label="商品名称" width="90"></el-table-column>
      <el-table-column prop="goodsType" label="品类" width="50"></el-table-column>
      <el-table-column prop="goodsMaterial" label="材质" width="100"></el-table-column>
      <el-table-column prop="goodsCanFor" label="适用规格" width="80"></el-table-column>
      <el-table-column prop="goodsOnlyFor" label="专属规格" width="80"></el-table-column>
      <el-table-column prop="goodsSize" label="包装规格" width="80"></el-table-column>
      <el-table-column prop="goodsTaste" label="口味" width="80"></el-table-column>
      <el-table-column prop="goodsSpecial" label="特殊功用" width="80"></el-table-column>
      <el-table-column prop="goodsRegion" label="产地" width="50"></el-table-column>
      <el-table-column prop="goodsDate" label="出厂日期" width="80"></el-table-column>
      <el-table-column prop="goodsTime" label="保质期" width="50"></el-table-column>
      <el-table-column prop="goodsSupplier" label="供应商" width="80"></el-table-column>
      <el-table-column prop="goodsIntro" label="特色说明" width="100"></el-table-column>
      <el-table-column prop="goodsPrice" label="价格" width="50"></el-table-column>
      <el-table-column prop="goodsClassify" label="分类" width="50"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row._id)" type="text" size="small">修改</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[2, 3, 5,10]"
        :page-size="eachPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
   
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "myGoodsApp"
);
export default {
  name: "myGoods",
  mounted() {
    this.getGoodsByPageAsync();
  },
  computed: {
    //数据发生变化时，才调用
    // curPage当前在哪页，eachPage每页多少个
    ...mapState(["curPage", "eachPage", "maxPage", "total", "rows"])
  },
  methods: {
    ...mapActions(["getGoodsByPageAsync", "getRemoveByPageAsync"]),
    ...mapMutations(["setCurPage", "setEachPage"]),
    handleClick(updateId) {
      // console.log(updateId);
      //把要修改的id转过去
      this.$router.push({
        name: "updateMygoods",
        params: { updateId: updateId }
      });
    },
    //删除
    remove(removeId) {
      this.getRemoveByPageAsync(removeId), this.getGoodsByPageAsync();
    },
    handleCurrentChange(val) {
      //获取当前在哪页的值
      this.setCurPage(val); //把值传过去
    },
    handleSizeChange(val) {
      //获取当前页有多少条
      this.setEachPage(val);
    },
    //上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  watch: {
    curPage() {
      this.getGoodsByPageAsync({
        //调用方法把当前页传过去
        curPage: this.curPage,
        eachPage: this.eachPage
      });
    },
    eachPage() {
      this.getGoodsByPageAsync({
        eachPage: this.eachPage
      });
    }
  }
};
</script>

<style>
</style>