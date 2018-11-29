<template>
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
          <el-button size="mini">修改</el-button>
        </el-button>
        <el-button type="text">
          <el-button size="mini">删除</el-button>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapActions, mapState } = createNamespacedHelpers(
  "myPetApp"
);

export default {
  name: "petsList",
  mounted() {
    this.getAllPetsAsync();
  },
  computed: {
    ...mapState(["curPage", "eachPage", "total", "maxPage", "rows"])
  },
  methods: {
    ...mapActions(["getAllPetsAsync"])
  }
};
</script>
<style>
</style>

