<template>
  <div>
    <el-table :data="petAry" stripe style="width: 100%">
      <el-table-column prop="petsName" label="宠物名称"></el-table-column>
      <el-table-column prop="petsSpecies" label="种类"></el-table-column>
      <el-table-column prop="petsType" label="宠物品种"></el-table-column>
      <el-table-column prop="petsGender" label="宠物性别"></el-table-column>
      <el-table-column prop="petsPrice" label="宠物价格"></el-table-column>
      <el-table-column prop="petsColor" label="颜色"></el-table-column>
      <el-table-column prop="petsBirthday" label="出生年月"></el-table-column>
      <el-table-column prop="petsCharacter" label="性格"></el-table-column>
    </el-table>
    <el-dialog title="新增宠物" :visible.sync="dialogFormVisible">
      <el-table
        ref="multipleTable"
        :data="rows"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="_id" label="编号" width="120" show-overflow-tooltip></el-table-column>
        <el-table-column prop="petsName" label="宠物名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="petsSpecies" label="种类" show-overflow-tooltip></el-table-column>
        <el-table-column prop="petsType" label="宠物品种" show-overflow-tooltip></el-table-column>
        <el-table-column prop="petsGender" label="宠物性别" show-overflow-tooltip></el-table-column>
        <el-table-column prop="petsPrice" label="宠物价格" show-overflow-tooltip></el-table-column>
        <el-table-column prop="petsColor" label="颜色" show-overflow-tooltip></el-table-column>
        <el-table-column prop="petsBirthday" label="出生年月" show-overflow-tooltip></el-table-column>
        <el-table-column prop="petsCharacter" label="性格" show-overflow-tooltip></el-table-column>
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
        <el-button @click="addIpet">确认增加</el-button>
        <el-button @click="cancelAdd">取消增加</el-button>
      </div>
    </el-dialog>
    <div style="margin:20px;">
      <el-button type="text" @click="addEmployee">新增宠物</el-button>
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
    this.getAllPetsAsync();
  },
  computed: {
    ...mapState("myShopApp", ["petAry"]),
    ...mapState("myPetApp", ["curPage", "eachPage", "maxPage", "total", "rows"])
  },
  watch: {
    curPage() {
      this.getAllPetsAsync({ curPage: this.curPage });
    }
  },
  methods: {
    ...mapActions("myShopApp", ["setShopByIdAsync", "addIpetForShopAsync"]),
    ...mapActions("myPetApp", ["getAllPetsAsync"]),
    ...mapMutations("myPetApp", ["setCurPage"]),
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
    addIpet() {
      this.multipleSelection.map(item => {
        this.addIpetForShopAsync({
          petId: item._id,
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
