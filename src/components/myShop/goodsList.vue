<template>
  <div>
    <el-table :data="goodsAry" stripe style="width: 100%">
      <el-table-column prop="goodsName" label="商品品牌名"></el-table-column>
      <el-table-column prop="goodsType" label="品类"></el-table-column>
      <el-table-column prop="goodsMaterial" label="材质或制作方法"></el-table-column>
      <el-table-column prop="goodsCanFor" label="适用规格"></el-table-column>
      <el-table-column prop="goodsOnlyFor" label="专属规格"></el-table-column>
      <el-table-column prop="goodsSize" label="包装规格"></el-table-column>
      <el-table-column prop="goodsTaste" label="口味"></el-table-column>
      <el-table-column prop="goodsSpecial" label="特殊功用"></el-table-column>
      <el-table-column prop="goodsRegion" label="产地"></el-table-column>
      <el-table-column prop="goodsDate" label="出厂日期"></el-table-column>
      <el-table-column prop="goodsTime" label="保质期"></el-table-column>
      <el-table-column prop="goodsSupplier" label="供应商"></el-table-column>
      <el-table-column prop="goodsIntro" label="特色说明"></el-table-column>
      <el-table-column prop="goodsPrice" label="价格"></el-table-column>
    </el-table>
    <el-dialog title="新增商品" :visible.sync="dialogFormVisible">
      <el-table
        ref="multipleTable"
        :data="rows"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="_id" label="编号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="goodsName" label="名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="goodsCanFor" label="适用规格" show-overflow-tooltip></el-table-column>
        <el-table-column prop="goodsSize" label="包装规格" show-overflow-tooltip></el-table-column>
        <el-table-column prop="goodsRegion" label="产地" show-overflow-tooltip></el-table-column>
        <el-table-column prop="goodsDate" label="出厂日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="goodsTime" label="保质期" show-overflow-tooltip></el-table-column>
      </el-table>
      <el-pagination
        small
        layout="prev, pager, next"
        :current-page="curPage"
        :page-size="eachPage"
        :total="total"
        @current-change="handleSizeChange"
      ></el-pagination>
      <div style="margin-top: 20px">
        <el-button @click="addGoods">确认增加</el-button>
        <el-button @click="cancelAdd">取消增加</el-button>
      </div>
    </el-dialog>
    <div style="margin:20px;">
      <el-button type="text" @click="addEmployee">新增商品</el-button>
      <el-button type="warning" @click="backShop" round>返回门店</el-button>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "employee",
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisibleopdataEmployee: false,
      editObj: {
        empName: "",
        empLevel: "",
        empPhone: ""
      },
      form: {
        _id: "",
        empName: "",
        empLevel: "",
        empPhone: ""
      },
      multipleSelection: []
    };
  },
  mounted() {
    this.setShopByIdAsync(this.$route.params);
    this.getGoodsByPageAsync();
  },
  computed: {
    ...mapState("myShopApp", ["goodsAry"]),
    ...mapState("myGoodsApp", [
      "curPage",
      "eachPage",
      "maxPage",
      "total",
      "rows"
    ])
  },
  watch: {
    curPage() {
      this.getGoodsByPageAsync({ curPage: this.curPage });
    }
  },
  methods: {
    ...mapActions("myShopApp", [
      "setShopByIdAsync",
      "addEmployeeAsync",
      "addOneEmployeeByIdAsync",
      "addGoodsForShopAsync"
    ]),
    ...mapActions("myGoodsApp", ["getGoodsByPageAsync"]),
    ...mapMutations("myGoodsApp", ["setCurPage"]),
    handleSizeChange(val) {
      this.setCurPage(val);
    },
    addEmployee() {
      this.dialogFormVisible = true; // 显示弹窗
    },
    backShop() {
      this.$router.push({ name: "myShop" });
    },
    toggleSelection(rows) {
      console.log(row);
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    cancelAdd() {
      this.dialogFormVisible = false;
    },
    // 新增门店商品
    addGoods() {
      this.multipleSelection.map(item => {
        this.addGoodsForShopAsync({
          goodsId: item._id,
          _id: this.$route.params.shopId
        }).then(res => {
          console.log(res);
          if (res.status === 200) {
            this.dialogFormVisible = false;
            this.setShopByIdAsync(this.$route.params);
          }
        });
      });
    }
  }
};
</script>

<style>
</style>
