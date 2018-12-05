<template>
  <div class="addCenter">
    <el-form ref="form" :model="form" label-width="90px" style="margin-top:10px">
      <el-form-item label="服务名称" style="width:450px">
        <el-input v-model="form.serviceName"></el-input>
      </el-form-item>
      <el-form-item label="服务类别">
        <el-col :span="1">
          <el-select v-model="form.serviceType" placeholder="请选择服务类别" style="width:360px">
            <el-option label="门店服务" value="门店服务"></el-option>
            <el-option label="上门服务" value="上门服务"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="服务排期">
        <el-col :span="1">
          <el-date-picker
            v-model="form.serviceSchedule"
            value-format="yyyy-MM-DD HH:MM:SS"
            type="datetime"
            placeholder="选择日期时间"
            style="width:360px"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="适用规格">
        <el-col :span="1">
          <el-select v-model="form.serviceCanFor" placeholder="请选择适用规格" style="width:360px">
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
        <el-col :span="1">
          <el-select v-model="form.serviceDetial" placeholder="请选择服务规格" style="width:360px">
            <el-option label="普修" value="普修"></el-option>
            <el-option label="精修" value="精修"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="服务耗时">
        <el-col :span="1">
          <el-select v-model="form.serviceTime" placeholder="请选择服务耗时" style="width:360px">
            <el-option label="1小时-2小时" value="1小时-2小时"></el-option>
            <el-option label="2小时-3小时" value="2小时-3小时"></el-option>
            <el-option label="3小时-4小时" value="3小时-4小时"></el-option>
            <el-option label="4小时-5小时" value="4小时-5小时"></el-option>
            <el-option label="5小时以上" value="5小时以上"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="服务员等级">
        <el-col :span="1">
          <el-select v-model="form.serviceLevel" placeholder="请选择服务员等级" style="width:360px">
            <el-option label="普通" value="普通"></el-option>
            <el-option label="高级" value="高级"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="服务价格" style="width:450px">
        <el-input v-model="form.servicePrice"></el-input>
      </el-form-item>
      <el-form-item label="服务图片">
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
          <img width="100%" :src="form.petsImg" alt>
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
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
  name: "addService",
  data() {
    return {
      form: {
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
      dialogVisible: false
    };
  },
  methods: {
    ...mapActions(["addServicesAsync", "picUpLoadAsync"]),
    //上传图片
    handlePictureCardPreview(file) {
      this.form.serviceImg = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
      this.form.serviceImg = file.response.url;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png"; // 图片格式
      const isLt2M = file.size / 1024 / 1024 < 10; // 图片大小
      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG或PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 10MB!");
      }
      return isJPG && isLt2M;
    },
    //新增
    onSubmit() {
      let msg = {
        serviceName: this.form.serviceName,
        serviceType: this.form.serviceType,
        serviceSchedule: this.form.serviceSchedule,
        serviceCanFor: this.form.serviceCanFor,
        serviceDetial: this.form.serviceDetial,
        serviceTime: this.form.serviceTime,
        serviceLevel: this.form.serviceLevel,
        servicePrice: this.form.servicePrice,
        serviceImg: this.form.serviceImg
      };
      this.addServicesAsync(msg);
      this.$router.push({ path: "/info/myService" });
    },

    //取消
    cancel() {
      this.$router.push({ path: "/info/myService" });
    },

    // //上传图片
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
      // console.log(file.url);
      // console.log(file.response.id);
      // window.localStorage.url = file.url;
      // window.localStorage._id = file.response.id;
    }
    // pic() {
    //   let url = window.localStorage.url;
    //   let _id = window.localStorage._id;
    //   console.log(url);
    //   console.log(_id);
    //   this.picUpLoadAsync({ _id, url });
    // }
  }
};
</script>

<style>
.addCenter {
  display: flex;
  justify-content: center;
}
</style>