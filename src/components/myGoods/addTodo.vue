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
        <el-form-item label="分类" style="width:400px">
          <el-select v-model="form.goodsClassify" placeholder="请选择商品类型">
            <el-option label="食品" value="0"></el-option>
            <el-option label="玩具" value="1"></el-option>
            <el-option label="衣物" value="2"></el-option>
            <el-option label="宠物窝" value="3"></el-option>
            <el-option label="洗护" value="4"></el-option>
            <el-option label="药品" value="5"></el-option>
            <el-option label="户外" value="6"></el-option>
          </el-select>
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

    <el-form-item required label="商品图片">
      <el-upload
        action="imgs/addImg"
        list-type="picture-card"
        :show-file-list="true"
        :on-preview="handlePictureCardPreview"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :limit="2"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="form.shopLicenceImg" alt>
      </el-dialog>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(form)">新增</el-button>
      <el-button>取消</el-button>
    </el-form-item>
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
      dialogVisible: false,
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
        goodsPrice: "",
        goodsClassify: "",
        goodsImg: []
      }
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["getAddtodoAsync"]),

    beforeAvatarUpload(file) {
      //上传的图片的条件
      const isHeadJPG = file.type === "image/jpeg"; // 图片格式
      const isHeadLt2M = file.size / 1024 / 1024 < 2; // 图片大小
      if (!isHeadJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isHeadLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isHeadJPG && isHeadLt2M;
    },
    handlePictureCardPreview(file) {
      this.headDialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
      this.form.goodsImg.push({ bigImg: res.url });
      this.form.goodsImg.push({ smallImg: res.url });
    },
    submitForm(form) {
      console.log(form);
      this.getAddtodoAsync(form);
    }
  }
};
</script>

<style>
</style>