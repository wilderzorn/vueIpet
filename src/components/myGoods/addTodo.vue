<template>
  <el-form ref="form" :model="form" status-icon label-width="100px">
    <el-form style="display:flex">
      <el-form-item style="margin-left:300px">
        <el-form-item label="商品名称" style="width:400px">
          <el-input type="text" v-model="form.goodsName"></el-input>
        </el-form-item>
        <el-form-item label="品类" style="width:400px">
          <el-input type="text" v-model="form.goodsType"></el-input>
        </el-form-item>
        <el-form-item label="材质" style="width:400px">
          <el-input type="text" v-model="form.goodsMaterial"></el-input>
        </el-form-item>
        <el-form-item label="适用规格" style="width:400px">
          <el-input type="text" v-model="form.goodsCanFor"></el-input>
        </el-form-item>
        <el-form-item label="专属规格" style="width:400px">
          <el-input type="text" v-model="form.goodsOnlyFor"></el-input>
        </el-form-item>
        <el-form-item label="包装规格" style="width:400px">
          <el-input type="text" v-model="form.goodsSize"></el-input>
        </el-form-item>
        <el-form-item label="口味" style="width:400px">
          <el-input type="text" v-model="form.goodsTaste"></el-input>
        </el-form-item>
      </el-form-item>

      <el-form-item style="margin-left:100px">
        <el-form-item label="特殊功用" style="width:400px">
          <el-input type="text" v-model="form.goodsSpecial"></el-input>
        </el-form-item>
        <el-form-item label="产地" style="width:400px">
          <el-input type="text" v-model="form.goodsRegion"></el-input>
        </el-form-item>
        <el-form-item label="出厂日期" style="width:400px">
          <el-input type="text" v-model="form.goodsDate"></el-input>
        </el-form-item>
        <el-form-item label="保质期" style="width:400px">
          <el-input type="text" v-model="form.goodsTime"></el-input>
        </el-form-item>
        <el-form-item label="供应商" style="width:400px">
          <el-input type="text" v-model="form.goodsSupplier"></el-input>
        </el-form-item>
        <el-form-item label="特色说明" style="width:400px">
          <el-input type="text" v-model="form.goodsIntro"></el-input>
        </el-form-item>
        <el-form-item label="价格" style="width:400px">
          <el-input type="text" v-model="form.goodsPrice"></el-input>
        </el-form-item>
      </el-form-item>
    </el-form>

    <el-form-item>
      <el-button type="primary" @click="submitForm(form)">新增</el-button>
      <el-button>取消</el-button>
    </el-form-item>

    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      list-type="picture"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </el-form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "myGoodsApp"
);
export default {
  name: "addTodo",
  data() {
    return {
      form: {
        goodsName: "",
        goodsType: "",
        goodsMaterial: "",
        goodsCanFor: "",
        goodsOnlyFor: "",
        goodsSize: "",
        goodsTaste: "",
        goodsSpecial: "",
        goodsRegion: "",
        goodsDate: "",
        goodsTime: "",
        goodsIntro: "",
        goodsPrice: ""
      },
     
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["getAddtodoAsync"]),
    submitForm(form) {
      // console.log(this.getAddtodoAsync(form));

      //   console.log(this.data.form);
      this.getAddtodoAsync(form);
    },
    //上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style>
</style>