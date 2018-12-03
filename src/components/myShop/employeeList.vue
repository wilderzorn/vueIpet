<template>
  <div>
    <el-table :data="employeeArr" stripe style="width: 100%">
      <el-table-column prop="empName" label="店员姓名"></el-table-column>
      <el-table-column prop="empLevel" label="店员职务"></el-table-column>
      <el-table-column prop="empPhone" label="店员电话"></el-table-column>
      <el-table-column label="修改店员">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="big">修改店员信息</el-button>
          <el-button @click="dismiss(scope.row)" type="text" size="big">开除店员</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="修改店员" :visible.sync="dialogFormVisibleopdataEmployee">
      <el-form v-model="form">
        <el-form-item label="店员姓名">
          <el-input v-model="form.empName"></el-input>
        </el-form-item>
        <el-form-item label="店员职务">
          <el-input v-model="form.empLevel"></el-input>
        </el-form-item>
        <el-form-item label="店员电话">
          <el-input v-model="form.empPhone"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleopdataEmployee = false">取 消</el-button>
        <el-button type="primary" @click="opdataEmployee">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="新增店员" :visible.sync="dialogFormVisible">
      <el-form v-model="editObj">
        <el-form-item label="店员姓名">
          <el-input v-model="editObj.empName"></el-input>
        </el-form-item>
        <el-form-item label="店员职务">
          <el-input v-model="editObj.empLevel"></el-input>
        </el-form-item>
        <el-form-item label="店员电话">
          <el-input v-model="editObj.empPhone"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOneEmployee">确 定</el-button>
      </div>
    </el-dialog>
    <div style="margin:20px;">
      <el-button type="text" @click="addEmployee">新增店员</el-button>
      <el-button type="warning" @click="backShop" round>返回门店</el-button>
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
      }
    };
  },
  mounted() {
    this.setShopByIdAsync(this.$route.params);
  },
  computed: {
    ...mapState(["employeeArr"])
  },
  methods: {
    ...mapActions([
      "setShopByIdAsync",
      "addEmployeeAsync",
      "addOneEmployeeByIdAsync"
    ]),
    addEmployee() {
      this.dialogFormVisible = true; // 显示弹窗
    },
    backShop() {
      console.log(this.employeeArr);
      this.$router.push({ name: "myShop" });
    },
    async addOneEmployee() {
      let data = await this.addOneEmployeeByIdAsync({
        shopEmployee: [this.editObj, ...this.employeeArr],
        ...this.$route.params
      });
      if (data.status === 200) {
        this.setShopByIdAsync(this.$route.params);
        this.dialogFormVisible = false; // 关闭弹窗
      }
    },
    handleClick(row) {
      this.dialogFormVisibleopdataEmployee = true;
      this.form._id = row._id;
      this.form.empName = row.empName;
      this.form.empLevel = row.empLevel;
      this.form.empPhone = row.empPhone;
    },
    // 修改店员
    opdataEmployee() {
      // console.log(this.form);
      // console.log(this.employeeArr);
      this.employeeArr.map((item, index) => {
        if (item._id === this.form._id) {
          this.employeeArr.splice(index, 1);
          this.employeeArr.push(this.form);
          this.addOneEmployeeByIdAsync({
            shopEmployee: [...this.employeeArr],
            ...this.$route.params
          });
          this.dialogFormVisibleopdataEmployee = false; // 关闭弹窗
        }
      });
    },
    dismiss() {
      console.log(123123);
    }
  }
};
</script>

<style>
</style>
