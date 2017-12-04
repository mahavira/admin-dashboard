<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        :default-active="$route.path"
        :router="true"
        background-color="#2e3641"
        text-color="#fff">
        <el-menu-item v-for="route in menu" :key="route.path" :index="route.path" >
          <i class="el-icon-menu"></i>
          <span slot="title">{{route.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container id="container">
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
const menu = [
  {
    path: '/dashboard',
    name: '打包管理'
  }, {
    path: '/login',
    name: '打包管理'
  }, {
    path: '/dashboard2',
    name: '打包管理'
  }
]

export default {
  name: 'dashboard',
  data () {
    return {
      menu
    }
  },
  created () {
  }
}
</script>

<style>
.el-container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #fafafa;
  color: #333;
  border: #eee solid 0px;
}
.el-header{
  border-bottom-width: 1px
}
.el-footer{
  border-top-width: 1px
}
.el-aside {
  background-color: #2e3641;
  color: #FFF;
}

.el-main {
  background-color: #fff;
  color: #333;

}
</style>
