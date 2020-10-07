<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-table :data="rightslist" height="600" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="level">
            <template slot-scope="scope">
                <el-tag type="success" v-if="scope.row.level === '0'">权限等级一级</el-tag>
                <el-tag type="warning" v-else-if="scope.row.level === '1'">权限等级二级</el-tag>
                <el-tag type="danger" v-else>权限等级三级</el-tag>
            </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        rightslist: []
    }
  },
  created() {
    //   获取权限列表；
    this.getRightsList()
  },
  methods: {
    //   获取权限列表；
    async getRightsList(){
        const { data: res } = await this.$http.get('rights/list')
        console.log(res)
        if(res.meta.status !== 200){
            return this.$message('获取权限失败！')
        }
        this.rightslist = res.data
    }
  },
}
</script>

<style lang="less" scoped>
</style>