<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <div style="display:flex;width:1050px;margin:50px auto">
                <div  style="width:500px;margin-right:50px">
                    <el-form-item required label="宠物名称">
                        <el-input v-model="form.petsName"></el-input>
                    </el-form-item>               
                    <el-form-item required  label="宠物品种">
                        <el-input v-model="form.petsType"></el-input>
                    </el-form-item>               
                    <el-form-item required  label="宠物颜色">
                        <el-input v-model="form.petsColor"></el-input>
                    </el-form-item>                                                
                    <el-form-item required label="出生日期">
                        <el-col>
                            <el-date-picker v-model="form.petsBirthday" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item required  label="宠物图片">
                        <el-col :span="1">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            v-model="form.petsImgs"
                            list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                        </el-col>
                    </el-form-item>
                </div>
                <div  style="width:500px;">
                    <el-form-item required  label="宠物价格">
                        <el-input v-model="form.petsPrice"></el-input>
                    </el-form-item>
                    <el-form-item required  label="宠物种类">
                        <el-input v-model="form.petsSpecies"></el-input>
                    </el-form-item>
                    <el-form-item required label="宠物性别">
                        <el-radio-group v-model="form.petsGender">
                            <el-radio label="公"></el-radio>
                            <el-radio label="母"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item required  label="宠物性格">
                        <el-input v-model="form.petsCharacter"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">立即创建</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>
<script>
export default {
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
        petsImgs: ""
      }
    };
  },
  methods: {
    submitForm() {
      alert(123);
    },
    resetForm() {
      alert(456);
    }
  }
};
</script>
<style>
</style>

