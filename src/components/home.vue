<template>
  <div class="home">
    <el-container class="home-container">
        <!-- 头部 -->
      <el-header >
          <div class="title">
              <img class="logo" src="../assets/logo.png" alt="">
              <span class="name">电商后台管理系统</span>
          </div>
          <el-button type='info' @click="logout" plain>退出</el-button>
      </el-header>
      <!-- 页面主体区域 -->
      <el-container>
          <!-- 侧边栏 -->
        <el-aside width='200px'>  
            <el-col :span="12">
                <el-menu  background-color="#545c64"  text-color="#fff">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                    </template>
                    <el-submenu index="1-4">
                   <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                    </template>
                    </el-submenu>
                </el-submenu>
                </el-menu>
            </el-col>
        </el-aside>
        <!-- 内容主体 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.home{
    height: 100%;
}
.home-container{
    height: 100%;
}
.el-header{
    background-color: #bbbbbb;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
}
.title{
    display: flex;
    align-items: center;
}
.name{
    margin-left: 20px;
}
.logo{
    height: 40px;
}
.el-aside{
    background-color: #454545;
}
.el-main{
    background-color: #eeeeee;
}
</style>
