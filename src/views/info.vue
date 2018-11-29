<template>
  <div>
    <div class="line"></div>
    <h1 style="backgroundColor:#EBEEF5;margin:0;padding:15px 0;">门店管理</h1>
    <el-menu
      router
      mode="horizontal"
      background-color="#909399"
      text-color="#fff"
      active-text-color="#000000"
    >
      <el-submenu index="1">
        <template slot="title">我的门店</template>
        <el-menu-item index="/info/myShop">门店列表</el-menu-item>
        <el-menu-item index="/info/addShop">增加门店</el-menu-item>
      </el-submenu>
      <el-menu-item index="/info/myGoods">我的商品</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的宠物</template>
        <el-menu-item index="/info/myPet">宠物列表</el-menu-item>
        <el-menu-item index="/info/addPet">增加宠物</el-menu-item>
      </el-submenu>
      <el-menu-item index="/info/myService">我的服务</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "info"
};
</script>
