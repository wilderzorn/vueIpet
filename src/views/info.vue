<template>
  <div>
    <div class="line"></div>
    <div v-bind:style="{ backgroundColor: color1}">
      <h2>爱宠帮门店管理</h2>
      <h3>ipet Management</h3>
    </div>
    <div style="display: flex;justify-content: space-between;height:100%;">
      <div>
        <el-color-picker @click="changeColor" v-model="color1" show-alpha></el-color-picker>
        <el-menu
          router
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">我的门店</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/info/myShop">门店列表</el-menu-item>
              <el-menu-item index="/info/addShop">增加门店</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span slot="title">我的商品</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/info/myGoods">商品列表</el-menu-item>
              <el-menu-item index="/info/addTodo">增加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-bell"></i>
              <span slot="title">我的宠物</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/info/myPet">宠物列表</el-menu-item>
              <el-menu-item index="/info/addPet">增加宠物</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-service"></i>
              <span slot="title">我的服务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/info/myService">我的服务</el-menu-item>
              <el-menu-item index="/info/addService">新增服务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <router-view class="ipet"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      isCollapse: true,
      color1: "rgba(19, 206, 102, 0.8)"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeColor() {
      console.log(color1);
    }
  }
};
</script>
<style>
.ipet {
  flex: 1;
  background-color: "color1";
}
</style>



