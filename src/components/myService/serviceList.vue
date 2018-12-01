<template>
  <div>
    <el-table :data="rows" style="width: 100%">
      <el-table-column prop="_id" label="编号" width="210"></el-table-column>
      <el-table-column prop="serviceName" label="服务名称" width="120"></el-table-column>
      <el-table-column prop="serviceType" label="服务类别" width="120"></el-table-column>
      <el-table-column prop="serviceSchedule" label="服务排期" width="150"></el-table-column>
      <el-table-column prop="serviceCanFor" label="适用规格" width="120"></el-table-column>
      <el-table-column prop="serviceDetial" label="服务规格" width="120"></el-table-column>
      <el-table-column prop="serviceTime" label="服务耗时" width="120"></el-table-column>
      <el-table-column prop="serviceLevel" label="服务员等级" width="120"></el-table-column>
      <el-table-column prop="servicePrice" label="价格(元)" width="120"></el-table-column>
      <el-table-column prop="serviceImg" label="服务图片" width="120">
        <template slot-scope="scope">
          <!-- <el-button type="text">
            <el-button size="mini">查看图片</el-button>
          </el-button>-->
          <el-button size="mini" @click="dialogVisible = true">查看图片</el-button>

          <el-dialog title="服务图片" :visible.sync="dialogVisible">
            <el-form :model="form">
              <el-form-item label="查看图片" :label-width="formLabelWidth">
                <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row),dialogFormVisible = true" size="mini">修改</el-button>

          <el-dialog title="修改服务" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="服务名称" style="width:400px">
                <el-input v-model="serviceInfo.serviceName"></el-input>
              </el-form-item>
              <el-form-item label="服务类别">
                <el-col></el-col>
                <el-col :span="1">
                  <el-select
                    v-model="serviceInfo.serviceType"
                    placeholder="请选择服务类别"
                    style="width:400px"
                  >
                    <el-option label="门店服务" value="门店服务"></el-option>
                    <el-option label="上门服务" value="上门服务"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
              <el-form-item label="服务排期">
                <el-col></el-col>
                <el-col :span="1">
                  <el-date-picker
                    v-model="serviceInfo.serviceSchedule"
                    type="datetime"
                    placeholder="选择日期"
                    value-format="yyyy-MM-dd-HH-mm"
                    style="width:400px"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="适用规格">
                <el-col></el-col>
                <el-col :span="1">
                  <el-select
                    v-model="serviceInfo.serviceCanFor"
                    placeholder="请选择适用规格"
                    style="width:400px"
                  >
                    <el-option label="2斤-10斤" value="2斤-10斤"></el-option>
                    <el-option label="11斤-20斤" value="11斤-20斤"></el-option>
                    <el-option label="21斤-30斤" value="21斤-30斤"></el-option>
                    <el-option label="31斤-40斤" value="31斤-40斤"></el-option>
                    <el-option label="41斤-50斤" value="41斤-50斤"></el-option>
                    <el-option label="50斤以上" value="50斤以上"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
              <el-form-item label="服务规格">
                <el-col></el-col>
                <el-col :span="1">
                  <el-select
                    v-model="serviceInfo.serviceDetial"
                    placeholder="请选择服务规格"
                    style="width:400px"
                  >
                    <el-option label="普修" value="普修"></el-option>
                    <el-option label="精修" value="精修"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
              <el-form-item label="服务耗时">
                <el-col></el-col>
                <el-col :span="1">
                  <el-select
                    v-model="serviceInfo.serviceTime"
                    placeholder="请选择服务耗时"
                    style="width:400px"
                  >
                    <el-option label="1小时-2小时" value="1小时-2小时"></el-option>
                    <el-option label="2小时-3小时" value="2小时-3小时"></el-option>
                    <el-option label="3小时-4小时" value="3小时-4小时"></el-option>
                    <el-option label="4小时-5小时" value="4小时-5小时"></el-option>
                    <el-option label="5小时以上" value="5小时以上"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
              <el-form-item label="服务员等级">
                <el-col></el-col>
                <el-col :span="1">
                  <el-select
                    v-model="serviceInfo.serviceLevel"
                    placeholder="请选择服务员等级"
                    style="width:400px"
                  >
                    <el-option label="普通" value="普通"></el-option>
                    <el-option label="高级" value="高级"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
              <el-form-item label="服务价格" style="width:400px">
                <el-input v-model="serviceInfo.servicePrice"></el-input>
              </el-form-item>
              <!-- <el-form-item label="服务图片" style="width:400px">
                <el-input v-model="serviceInfo.serviceImg"></el-input>
              </el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogFormVisible = false,handleOK()">确 定</el-button>
              <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
          </el-dialog>

          <el-button size="mini" @click="removeService(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block" style="margin-top:20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[6, 12, 16,20]"
        :page-size="eachPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
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
} = createNamespacedHelpers("myServiceApp");

export default {
  name: "serviceList",
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogVisible: false,
      dialogVisible: false,
      form: {
        _id: "",
        serviceName: "",
        serviceType: "",
        serviceSchedule: "",
        serviceCanFor: "",
        serviceDetial: "",
        serviceTime: "",
        serviceLevel: "",
        servicePrice: "",
        serviceImg: ""
      },
      formLabelWidth: "200px"
    };
  },
  mounted() {
    this.getAllServicesByPageAsync();
  },

  computed: {
    ...mapState([
      "rows",
      "curPage",
      "eachPage",
      "maxPage",
      "total",
      "serviceInfo"
    ])
  },

  watch: {
    curPage() {
      this.getAllServicesByPageAsync({
        eachPage: this.eachPage,
        curPage: this.curPage
      });
    },
    eachPage() {
      this.getAllServicesByPageAsync({
        eachPage: this.eachPage,
        curPage: this.curPage
      });
    }
  },

  methods: {
    ...mapActions([
      "getAllServicesByPageAsync",
      "upDateServicesByIdsAsync",
      "upDateServicesAsync",
      "removeServicesAsync"
    ]),
    ...mapMutations(["setCurPage", "setEachPage"]),

    //下拉列表
    handleSizeChange(val) {
      this.setEachPage(val);
    },

    //输入框
    handleCurrentChange(val) {
      this.setCurPage(val);
    },

    //修改页面显示
    handleClick(row) {
      this.upDateServicesByIdsAsync(row._id);
      //  window.localStorage._id = row._id;
    },

    //修改
    handleOK() {
      // let _id = window.localStorage._id;
      let msg = {
        _id: this.serviceInfo._id,
        serviceName: this.serviceInfo.serviceName,
        serviceType: this.serviceInfo.serviceType,
        serviceSchedule: this.serviceInfo.serviceSchedule,
        serviceCanFor: this.serviceInfo.serviceCanFor,
        serviceDetial: this.serviceInfo.serviceDetial,
        serviceTime: this.serviceInfo.serviceTime,
        serviceLevel: this.serviceInfo.serviceLevel,
        servicePrice: this.serviceInfo.servicePrice,
        serviceImg: this.serviceInfo.serviceImg
      };
      this.upDateServicesAsync(msg);
      this.getAllServicesByPageAsync();
    },

    //删除
    removeService(row) {
      this.removeServicesAsync({ _id: row._id });
      this.getAllServicesByPageAsync();
    }
  }
};
</script>

<style>
div {
  text-align: center;
}
</style>