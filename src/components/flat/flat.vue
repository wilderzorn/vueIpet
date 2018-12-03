  <template>
    <div>
     <el-table
        :data="rows"
        style="width: 100%">
        <el-table-column
          prop="_id"
          label="管理员编号">
        </el-table-column>
        <el-table-column
          prop="userAcount"
          label="登录名">
        </el-table-column>
        <el-table-column
          prop="userPwd"
          label="密码">
        </el-table-column>
        <el-table-column
          prop="userPhone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="userMail"
          label="邮件">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名">
        </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" icon="el-icon-edit"  type="primary" @click="handclick(scope.row),dialogFormVisible =true">修改</el-button>
              <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="登陆名" :label-width="formLabelWidth">
                  <el-input  v-model="form.usersLoginName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.usersWord" autocomplete="off"></el-input>
                </el-form-item>
                     <el-form-item label="联系方式" :label-width="formLabelWidth">
                         <el-input v-model="form.usersPhone" autocomplete="off"></el-input>
                </el-form-item>
                     <el-form-item label="邮件" :label-width="formLabelWidth">
                         <el-input v-model="form.usersEmail" autocomplete="off"></el-input>
                </el-form-item>
                     <el-form-item label="姓名" :label-width="formLabelWidth">
                         <el-input v-model="form.usersName" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false,removeUsers(row)">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible= false,sureClick()">确 定</el-button>
        </div>
</el-dialog>
              
              
              <el-button
                size="mini"
                type="danger" icon="el-icon-delete" @click="removeUsers(scope.row)">删除</el-button>
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
import { createNamespacedHelpers } from "vuex";
const {
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} = createNamespacedHelpers("flatApp");
export default {
  name: "flat",
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        usersLoginName: "",
        usersWord: "",
        usersPhone: "",
        usersEmail: "",
        usersName: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    //获取数据
    ...mapState(["rows", "curPage", "eachPage", "maxPage", "total"])
  },
  //可以访问真实节点，ajax请求
  mounted() {
    this.usersListByPageAsync();
  },
  //当监听某一个属性发生变化被调用
  watch: {
    curPage() {
      this.usersListByPageAsync({
        // eachPage: this.eachPage,
        curPage: this.curPage
      }).then(res=>{
      });
    },
    eachPage() {
      this.usersListByPageAsync({
        eachPage: this.eachPage,
        curPage: this.curPage
      });
    }
  },
  methods: {
    ...mapActions([
      "usersListByPageAsync",
      "upDateUsersAsync",
      "removeUsersAsync"
    ]), //获取异步方法
    ...mapMutations(["setCurPage", "setEachPage"]), //获取同步方法

    //下拉列表
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    //输入框
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    //点击修改把数据渲染到页面上
    handclick(row) {
      window.storage = row._id;
      this.dialogFormVisible = true;
      this.form.usersLoginName = row.userAcount;
      this.form.usersWord = row.userPwd;
      this.form.usersPhone = row.userPhone;
      this.form.usersEmail = row.userMail;
      this.form.usersName = row.userName;
    },
    //修改
    sureClick() {
      let _id = window.storage;
      let msg = {
        _id,
        usersLoginName: this.form.usersLoginName,
        usersWord: this.form.usersWord,
        usersPhone: this.form.usersPhone,
        usersEmail: this.form.usersEmail,
        usersName: this.form.usersName
      };
      this.upDateUsersAsync(msg);
      this.usersListByPageAsync();
    },
    //删除
    removeUsers(row) {
      this.removeUsersAsync({ _id: row._id });
      this.usersListByPageAsync();
    }
  }
};
</script>