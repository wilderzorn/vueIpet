<template>
  <div>
    <el-table :data="rows" stripe style="width: 100%;">
      <el-table-column width="210" align="center" prop="_id" label="宠物ID"></el-table-column>
      <el-table-column align="center" prop="petsName" label="宠物名称"></el-table-column>
      <el-table-column align="center" prop="petsSpecies" label="种类"></el-table-column>
      <el-table-column align="center" prop="petsType" label="宠物品种"></el-table-column>
      <el-table-column  align="center" prop="petsGender" label="宠物性别"></el-table-column>
      <el-table-column  align="center" prop="petsPrice" label="宠物价格"></el-table-column>
      <el-table-column  align="center" prop="petsColor" label="颜色"></el-table-column>
      <el-table-column  align="center" prop="petsBirthday" label="出生年月"></el-table-column>
      <el-table-column width="200" align="center" prop="petsCharacter" label="性格"></el-table-column>
      <el-table-column  align="center" prop="petsImg" label="图片">
        <template slot-scope="scope">
          <el-button type="text">
            <el-button size="mini">查看图片</el-button>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column  width="210" align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text">
            <el-button size="mini" @click="handleUpdate(scope.row),dialogFormVisible=true">修改</el-button>
            <el-dialog
              title="修改信息"
              width="75%"
              :visible.sync="dialogFormVisible"
              :before-close="handleClose">
              <div>
                  <el-form :model="form" label-width="80px">
                      <div style="display:flex;width:1050px;margin:auto">
                          <div  style="width:450px;margin-right:50px">
                              <el-form-item label="宠物名称">
                                  <el-input v-model="petInfo.petsName"></el-input>
                              </el-form-item>    
                              <el-form-item  label="宠物种类">
                                  <el-input v-model="petInfo.petsSpecies"></el-input>
                              </el-form-item>           
                              <el-form-item  label="宠物颜色">
                                  <el-input v-model="petInfo.petsColor"></el-input>
                              </el-form-item>                                                
                              <el-form-item label="出生日期">
                                  <el-col>
                                      <el-date-picker v-model="petInfo.petsBirthday" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                                  </el-col>
                              </el-form-item>
                              <el-form-item  label="宠物图片">
                                  <el-col :span="1">
                                  <el-upload
                                      class="upload-demo"
                                      action="https://jsonplaceholder.typicode.com/posts/"
                                      v-model="petInfo.petsImgs"
                                      list-type="picture">
                                      <el-button size="small" type="primary">点击上传</el-button>
                                  </el-upload>
                                  </el-col>
                              </el-form-item>
                          </div>
                          <div  style="width:450px;">
                              <el-form-item  label="宠物价格">
                                  <el-input v-model="petInfo.petsPrice"></el-input>
                              </el-form-item>               
                              <el-form-item  label="宠物品种">
                                  <el-input v-model="petInfo.petsType"></el-input>
                              </el-form-item>
                              <el-form-item label="宠物性别">
                                  <el-radio-group v-model="petInfo.petsGender">
                                      <el-radio label="公"></el-radio>
                                      <el-radio label="母"></el-radio>
                                  </el-radio-group>
                              </el-form-item>
                              <el-form-item  label="宠物性格">
                                  <el-input v-model="petInfo.petsCharacter"></el-input>
                              </el-form-item>
                          </div>
                      </div>
                      <div>
                          <el-form-item>
                              <el-button @click="hello" type="primary">立即修改</el-button>
                              <el-button>重置</el-button>
                          </el-form-item>
                      </div>
                  </el-form>
              </div>
            </el-dialog>
          </el-button>
          <el-button type="text">
            <el-button @click="removePet(scope.row)" size="mini">删除</el-button>
          </el-button>
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
const {
  mapMutations,
  mapActions,
  mapState,
  mapGetters
} = createNamespacedHelpers("myPetApp");

export default {
  name: "petsList",
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogVisible: false,
      form: {
        _id: "",
        petsName: "",
        petsSpecies: "",
        petsGender: "",
        petsBirthday: "",
        petsType: "",
        petsColor: "",
        petsPrice: "",
        petsCharacter: "",
        petsImgs: ""
      }
    };
  },
  mounted() {
    this.getAllPetsAsync();
  },
  computed: {
    ...mapState(["curPage", "eachPage", "total", "maxPage", "rows", "petInfo"])
  },
  methods: {
    ...mapActions([
      "getAllPetsAsync",
      "updatePetByIdAsync",
      "updatePetAsync",
      "removePetAsync"
    ]),
    ...mapMutations(["setCurPage", "setEachPage"]),
    handleCurrentChange(val) {
      this.setCurPage(val);
    },
    handleSizeChange(val) {
      this.setEachPage(val);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    hello() {
      alert(666);
      let msg = {
        _id: this.petInfo._id,
        petsName: this.petInfo.petsName,
        petsSpecies: this.petInfo.petsSpecies,
        petsGender: this.petInfo.petsGender,
        petsBirthday: this.petInfo.petsBirthday,
        petsType: this.petInfo.petsType,
        petsColor: this.petInfo.petsColor,
        petsPrice: this.petInfo.petsPrice,
        petsCharacter: this.petInfo.petsCharacter,
        petsImgs: this.petInfo.petsImgs
      };
      this.updatePetAsync(msg);
      this.getAllPetsAsync();
    },
    //修改页面显示
    handleUpdate(row) {
      this.updatePetByIdAsync(row._id);
    },

    //确认修改
    // handleOk() {
    //   // let msg = {
    //   //   _id: this.petInfo._id,
    //   //   petsName: this.petInfo.petsName,
    //   //   petsSpecies: this.petInfo.petsSpecies,
    //   //   petsGender: this.petInfo.petsGender,
    //   //   petsBirthday: this.petInfo.petsBirthday,
    //   //   petsType: this.petInfo.petsType,
    //   //   petsColor: this.petInfo.petsColor,
    //   //   petsPrice: this.petInfo.petsPrice,
    //   //   petsCharacter: this.petInfo.petsCharacter,
    //   //   petsImgs: this.petInfo.petsImgs
    //   // };
    //   // this.updatePetAsync(msg);
    //   // this.getAllPetsAsync();
    //   alert(123);
    // },
    removePet(row) {
      alert("删除成功");
      this.removePetAsync({ _id: row._id });
      this.getAllPetsAsync();
    }
  },
  watch: {
    curPage() {
      this.getAllPetsAsync({
        curPage: this.curPage,
        eachPage: this.eachPage
      });
    },
    eachPage() {
      this.getAllPetsAsync({ eachPage: this.eachPage });
    }
  }
};
</script>
<style>
</style>

