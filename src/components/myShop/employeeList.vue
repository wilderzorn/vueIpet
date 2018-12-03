<template>
  <div>
    <el-table :data="rows[0].shopEmployee" stripe style="width: 100%">
      <el-table-column prop="empName" label="店员姓名"></el-table-column>
      <el-table-column prop="empLevel" label="店员职务"></el-table-column>
      <el-table-column prop="empPhone" label="店员电话"></el-table-column>
      <el-table-column label="店员">
        <template slot-scope="shopEmployee">
          <el-button @click="handleClick(shopEmployee.row)" type="text" size="big">修改店员信息</el-button>
          <el-button @click="dismiss(shopEmployee.row)" type="text" size="big">开除店员</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin:20px;">
      <el-button type="primary" round @click="addEmployee">新增店员</el-button>
      <el-button type="warning" round>返回门店</el-button>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions, mapState } = createNamespacedHelpers(
  "myShopApp"
);
export default {
  name: "employee",
  mounted() {
    this.setShopByIdAsync(this.$route.params);
  },
  computed: {
    ...mapState(["rows"])
  },
  methods: {
    ...mapActions(["setShopByIdAsync"]),
    // handleClick(data) {
    //   console.log(data);
    // },
    addEmployee() {
      // console.log(this.$route.params); // 门店ID
      console.log(this.rows);
    }
  }
};
</script>

<style>
</style>
