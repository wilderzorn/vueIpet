<template>
  <div>
    <el-form ref="form" label-width="80px">
      <div style="display:flex;width:1050px;margin:50px auto">
        <div style="width:500px;margin-right:50px">
          <el-form-item required label="宠物名称">
            <el-input v-model="form.petsName"></el-input>
          </el-form-item>
          <el-form-item required label="宠物种类">
            <el-input v-model="form.petsSpecies"></el-input>
          </el-form-item>
          <el-form-item required label="宠物颜色">
            <el-input v-model="form.petsColor"></el-input>
          </el-form-item>
          <el-form-item required label="出生日期">
            <el-col>
              <el-date-picker
                v-model="form.petsBirthday"
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item required label="宠物图片">
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
        </div>
        <div style="width:500px;">
          <el-form-item required label="宠物价格">
            <el-input v-model="form.petsPrice"></el-input>
          </el-form-item>
          <el-form-item required label="宠物品种">
            <el-input v-model="form.petsType"></el-input>
          </el-form-item>
          <el-form-item required label="宠物性别">
            <el-radio-group v-model="form.petsGender">
              <el-radio label="公"></el-radio>
              <el-radio label="母"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item required label="宠物性格">
            <el-input v-model="form.petsCharacter"></el-input>
          </el-form-item>
        </div>
      </div>
      <div>
        <el-form-item>
          <el-button type="primary" @click="submitForm">立即创建</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions, mapState } = createNamespacedHelpers(
  "myPetApp"
);
export default {
  name: "addPet",
  data() {
    return {
      form: {
        petsName: "",
        petsSpecies: "",
        petsGender: "",
        petsBirthday: "",
        petsType: "",
        petsColor: "",
        petsPrice: "",
        petsCharacter: "",
        petsImg: ""
      },
      dialogVisible: false
    };
  },
  methods: {
    ...mapActions(["addPetAsync"]),
    submitForm() {
      this.addPetAsync(this.form);
      console.log(this.form);
      this.$message("宠物新增成功");
      this.$router.push({ name: "myPet" });
    },
    //上传图片
    handlePictureCardPreview(file) {
      this.form.petsImg = file.url;
      this.dialogVisible = true;
    },

    handleAvatarSuccess(res, file) {
      // console.log(res);
      // console.log(file);
      // this.form.serviceImg = file.response.url;
      this.form.petsImg = file.response.url;
    },

    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
    }
  }
};
</script>
<style>
</style>

