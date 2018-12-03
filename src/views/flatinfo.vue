<template>
<div>
 <el-menu router class="el-menu-demo" mode="horizontal" >
  <el-container style="height:100px;background: #eee;" >
  <el-header class="box">平台登陆管理系统</el-header>
   </el-container >
            <el-menu-item index="/flatinfo/flat" >门店管理员</el-menu-item>
            <el-menu-item index="/flatinfo/authorizer">门店授权</el-menu-item>
      </el-menu>  
      <div class="line"></div>
        <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "flatinfo"
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.box {
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  color: #fff;
}
</style>
