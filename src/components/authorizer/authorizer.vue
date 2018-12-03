<template>
    <div>
     <el-table
        :data="rows"
        style="width: 100%">
        <el-table-column
          prop="_id"
          label="学生编号">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="userPwd"
          label="密码">
        </el-table-column>
        <el-table-column
          prop="userMail"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="userPhone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="userAcount"
          label="姓名">
        </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div v-if="scope.row.userStatus === 0">
                <el-button  size="mini" @click="agreeBtn(scope.row)">同意授权</el-button>
                <el-button size="mini" type="danger" @click="vetoBtn(scope.row)">授权否决</el-button>
              </div>
              <span v-else-if="scope.row.userStatus === 1">已同意</span>
              <span v-else>已否决</span>
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
          :total="total">
        </el-pagination>
    </div>
 </div>
</template>

<script>
//命名空间
import { createNamespacedHelpers } from "vuex";
const {
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} = createNamespacedHelpers("AuthorizerApp");

export default {
  name: "students",
  computed: {
    //获取数据
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  //可以访问真实节点，ajax请求
  mounted() {
    this.getStudentsByPageAsync();
  },
  //当监听某一个属性发生变化被调用
  watch: {
    curPage() {
      this.getStudentsByPageAsync({
        // eachPage: this.eachPage,
        curPage: this.curPage
      });
    },
    eachPage() {
      this.getStudentsByPageAsync({
        eachPage: this.eachPage,
        curPage: this.curPage
      });
    }
  },
  methods: {
    ...mapActions(["getStudentsByPageAsync", "authorizerUsers"]), //获取异步方法
    ...mapMutations(["setCurPage", "setEachPage"]), //获取同步方法

    //下拉列表
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    //输入框
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    agreeBtn(row) {
      let _id = row._id;
      let upDate = {
        _id,
        userStatus: 1
      };
      this.authorizerUsers(upDate);
      this.getStudentsByPageAsync();
    },
    vetoBtn(row) {
      let _id = row._id;
      let upDate = {
        _id,
        userStatus: 2
      };
      this.authorizerUsers(upDate);
      this.getStudentsByPageAsync();
    }
  }
};
</script>
