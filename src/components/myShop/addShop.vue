<template>
  <el-form :model="form" status-icon label-width="120px" style="width:500px;margin: auto;">
    <el-form-item required label="门店名称">
      <el-input v-model="form.shopName"></el-input>
    </el-form-item>
    <el-form-item required label="营业执照号码">
      <el-input v-model="form.shopLicenceNum"></el-input>
    </el-form-item>
    <el-form-item required label="营业执照图片">
      <el-upload
        action="imgs/addImg"
        list-type="picture-card"
        :show-file-list="true"
        :on-preview="handlePictureCardPreview"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :limit="1"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="form.shopLicenceImg" alt>
      </el-dialog>
    </el-form-item>
    <el-form-item required label="营业地址">
      <el-input v-model="form.shopAdd"></el-input>
    </el-form-item>
    <el-form-item required label="定位">
      <el-input v-model="form.shopLocation"></el-input>
    </el-form-item>
    <el-form-item required label="法人">
      <el-input v-model="form.shopCorporate"></el-input>
    </el-form-item>
    <el-form-item required label="联系电话">
      <el-input v-model="form.shopTel"></el-input>
    </el-form-item>
    <el-form-item required label="头图">
      <el-upload
        action="imgs/addImg"
        list-type="picture-card"
        :show-file-list="true"
        :on-preview="headPictureCardPreview"
        :on-success="headAvatarSuccess"
        :before-upload="headEeforeAvatarUpload"
        :limit="1"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="headDialogVisible">
        <img width="100%" :src="form.shopImg" alt>
      </el-dialog>
    </el-form-item>
    <el-form-item required label="特色">
      <el-input v-model="form.shopFeature"></el-input>
    </el-form-item>
    <el-form-item required label="佣金比例">
      <el-input v-model="form.shopCommission" :rules="[{
         type: 'number'
      }]"></el-input>
    </el-form-item>
    <el-form-item label="操作">
      <el-button type="primary" @click="addShop(form)">提交</el-button>
      <el-button type="warning" @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions, mapState } = createNamespacedHelpers(
  "myShopApp"
);
export default {
  name: "addShop",
  data() {
    return {
      dialogVisible: false,
      headDialogVisible: false,
      form: {
        shopName: "",
        shopLicenceNum: "",
        shopLicenceImg: "",
        shopAdd: "",
        shopLocation: "",
        shopCorporate: "",
        shopTel: "",
        shopImg: "",
        shopFeature: "",
        shopCommission: ""
      }
    };
  },
  methods: {
    ...mapActions(["addShopAsync"]),
    addShop(form) {
      if (form.shopLicenceImg === "") {
        this.$message.error("请上传营业执照图片");
      } else if (form.shopImg === "") {
        this.$message.error("请上传门店图片");
      } else {
        this.addShopAsync(form);
        this.$message("门店增加成功");
        this.$router.push({ name: "myShop" });
      }
    },
    cancel() {},
    handlePictureCardPreview(file) {
      this.form.shopLicenceImg = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
      this.form.shopLicenceImg = file.response.url;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg"; // 图片格式
      const isLt2M = file.size / 1024 / 1024 < 10; // 图片大小
      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 10MB!");
      }
      return isJPG && isLt2M;
    },
    headEeforeAvatarUpload(file) {
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
    headPictureCardPreview(file) {
      this.form.shopImg = file.url;
      this.headDialogVisible = true;
    },
    headAvatarSuccess(res, file) {
      console.log(res);
      console.log(file);
      this.form.shopImg = res.url;
    }
  }
};
</script>