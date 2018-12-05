<template>
  <div>
    <el-table :data="serviceAry" stripe style="width: 100%">
      <el-table-column prop="serviceName" label="名称"></el-table-column>
      <el-table-column prop="serviceType" label="服务类别"></el-table-column>
      <el-table-column prop="serviceSchedule" label="排期"></el-table-column>
      <el-table-column prop="serviceCanFor" label="适用规格"></el-table-column>
      <el-table-column prop="serviceDetial" label="服务规格"></el-table-column>
      <el-table-column prop="serviceTime" label="耗时"></el-table-column>
      <el-table-column prop="serviceLevel" label="服务员等级"></el-table-column>
      <el-table-column prop="servicePrice" label="价格"></el-table-column>
    </el-table>
    <el-dialog title="新增服务" :visible.sync="dialogFormVisible">
      <el-table
        ref="multipleTable"
        :data="rows"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="_id" label="编号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="serviceName" label="名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="serviceSchedule" label="排期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="serviceCanFor" label="适用规格" show-overflow-tooltip></el-table-column>
        <el-table-column prop="serviceTime" label="耗时" show-overflow-tooltip></el-table-column>
        <el-table-column prop="serviceLevel" label="服务员等级" show-overflow-tooltip></el-table-column>
        <el-table-column prop="servicePrice" label="价格" show-overflow-tooltip></el-table-column>
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
        <el-button @click="addServer">确认增加</el-button>
        <el-button @click="cancelAdd">取消增加</el-button>
      </div>
    </el-dialog>
    <div style="margin:20px;">
      <el-button type="text" @click="addEmployee">新增服务</el-button>
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
    this.getAllServicesByPageAsync();
  },
  computed: {
    ...mapState("myShopApp", ["serviceAry"]),
    ...mapState("myServiceApp", [
      "curPage",
      "eachPage",
      "maxPage",
      "total",
      "rows"
    ])
  },
  watch: {
    curPage() {
      this.getAllServicesByPageAsync({ curPage: this.curPage });
    }
  },
  methods: {
    ...mapActions("myShopApp", ["setShopByIdAsync", "addServerForShopAsync"]),
    ...mapActions("myServiceApp", ["getAllServicesByPageAsync", "setCurPage"]),
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
    // 新增门店服务
    addServer() {
      // console.log(this.multipleSelection);
      this.multipleSelection.map(item => {
        this.addServerForShopAsync({
          serviceId: item._id,
          _id: this.$route.params.shopId
        }).then(res => {
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
