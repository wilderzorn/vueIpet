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
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="ensure(scope.row),dialogFormVisible = true" size="mini">修改</el-button>
          <el-dialog title="修改服务" :visible.sync="dialogFormVisible">
            <el-form :model="form" v-model="form">
              <el-form-item label="门店名称" style="width:400px">
                <el-input v-model="form.shopName"></el-input>
              </el-form-item>
              <el-form-item label="营业执照号码" style="width:400px">
                <el-input v-model="form.shopLicenceNum"></el-input>
              </el-form-item>
              <el-form-item label="营业地址" style="width:400px">
                <el-input v-model="form.shopAdd"></el-input>
              </el-form-item>
              <el-form-item label="定位" style="width:400px">
                <el-input v-model="form.shopLocation"></el-input>
              </el-form-item>
              <el-form-item label="法人" style="width:400px">
                <el-input v-model="form.shopCorporate"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" style="width:400px">
                <el-input v-model="form.shopTel"></el-input>
              </el-form-item>
              <el-form-item label="特色" style="width:400px">
                <el-input v-model="form.shopFeature"></el-input>
              </el-form-item>
              <el-form-item label="佣金比例">
                <el-col></el-col>
                <el-col :span="1">
                  <el-select
                    v-model="form.shopCommission"
                    placeholder="请选择佣金比例"
                    style="width:400px"
                  >
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                    <el-option label="5" value="5"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
              <!-- <el-form-item label="服务图片" style="width:400px">
<el-input v-model="form.serviceImg"></el-input>
              </el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogFormVisible = false,handleOK()">确定</el-button>
              <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
          </el-dialog>
          <el-button size="mini" @click="removeService(scope.row)">删除</el-button>
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
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        _id: "",
        shopName: "",
        shopLicenceNum: "",
        shopAdd: "",
        shopLocation: "",
        shopCorporate: "",
        shopTel: "",
        shopFeature: "",
        shopCommission: ""
      }
    };
  },
  // 加载完成阶段
  mounted() {
    this.getAllShopAsync();
  },
  computed: {
    ...mapState(["curPage", "eachPage", "total", "maxPage", "rows"])
  },
  methods: {
    ...mapActions(["getAllShopAsync", "updataShopByIdAsync"]),
    ...mapMutations(["setCurPage", "setEachPage"]),
    handleClick(shop) {
      this.$router.push({ name: "_employee", params: { shopId: shop._id } });
    },
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    ensure(row) {
      this.form._id = row._id;
      this.form.shopName = row.shopName;
      this.form.shopLicenceNum = row.shopLicenceNum;
      this.form.shopAdd = row.shopAdd;
      this.form.shopLocation = row.shopLocation;
      this.form.shopCorporate = row.shopCorporate;
      this.form.shopTel = row.shopTel;
      this.form.shopFeature = row.shopFeature;
      this.form.shopCommission = row.shopCommission;
    },
    // 修改门店
    async handleOK() {
      let data = await this.updataShopByIdAsync(this.form);
      if (data.status === 200) {
        this.getAllShopAsync();
      }
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
