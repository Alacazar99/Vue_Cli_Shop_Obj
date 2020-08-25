<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!-- 添加按钮区域 -->
      <el-row>
        <el-button type="primary" @click="addDialogVisible = true">添加角色</el-button>
      </el-row>
      <!-- 卡片视图区域 -->
      <el-table :data="roleslist" border stripe>
        <!-- t拓展列 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              :class="['bdbuttom', i1 === 0 ? 'bdtop' : '', 'vcenter' ]"
              v-for="(item1,i1) in scope.row.children"
              :key="item1.id"
            >
              <!-- 渲染一級 -->
              <el-col :span="4">
                <el-tag closable @close="removeRightById(scope.row, item1.id)">{{ item1.authName }}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 渲染二级和三级权限 -->
              <el-col :span="19">
                <!-- 通过 for 循环 嵌套渲染二级权限 -->
                <el-row
                  :class="[i2 === 0 ? '' : 'bdtop', 'vcenter']"
                  v-for="(item2, i2) in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="6">
                    <el-tag
                      type="success"
                      closable
                      @close="removeRightById(scope.row, item2.id)"
                    >{{item2.authName}}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      type="warning"
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      closable
                      @close="removeRightById(scope.row, item3.id)"
                    >{{item3.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!-- 索引列 -->
        <el-table-column type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName" :span="2"></el-table-column>
        <el-table-column label="职级描述" prop="roleDesc"></el-table-column>
        <el-table-column label="相关操作" width="300px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            <!-- 分配权限 -->
            <el-button
              @click="showSetRightDialog(scope.row)"
              type="warning"
              icon="el-icon-setting"
              size="mini"
            >分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 分配权限的对话框 -->
    <el-dialog class="setRight" @close='setRightDialogClosed' title="分配权限对话框" :visible.sync="setRightDialogVisible" width="50%">
      <!-- 树形控件 -->
      <el-tree
        default-expand-all
        :data="rightslist"
        show-checkbox
        node-key="id"
        :default-checked-keys="defKeys"
        :props="treeProps"
        ref="treeRef"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="allotRights">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 所有角色列表数据
      roleslist: [],
      // 控制分配权限对话框的显示与隐藏
      setRightDialogVisible: false,
      rightslist: [],
      treeProps: {
        children: "children",
        label: "authName",
      },
      // 默认选中的节点Id值数组
      defKeys: [],
      // 当前即将分配权限的角色id
      roleId: ''
    }
  },
  created() {
    this.getRolesList()
  },
  methods: {
    // 获取角色列表
    async getRolesList() {
      const { data: res } = await this.$http.get("roles")
      console.log(res)
      if (res.meta.status !== 200) {
        return this.$message("获取角色列表失败！")
      }
      this.roleslist = res.data
    },
    // 根据id删除相应权限；
    async removeRightById(role, rightId) {
      const confirmResult = await this.$confirm(
        "此操作将删除对应权限，是否继续操作？",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err)

      if (confirmResult !== "confirm") {
        return this.$message.info("您已取消删除！")
      }
      const { data: res } = await this.$http.delete(
        `roles/${role.id}/rights/${rightId}`
      )
      if (res.meta.status !== 200) {
        return this.$message("删除权限失败！")
      }
      //   this.getRolesList()
      role.children = res.data
      return this.$message.warning("您已成功删除！")
    },
    // 展示分配权限对话框
    async showSetRightDialog(role) {
        this.roleId = role.id
      // 获取所有权限数据
      const { data: res } = await this.$http.get("rights/tree")

      if (res.meta.status !== 200) {
        return this.$message.error("获取权限失败！")
      }
      this.rightslist = res.data
      console.log(this.rightslist)
      //   调用
      this.getKeys(role, this.defKeys)
      this.setRightDialogVisible = true
    },
    // 递归获取三级节点ID
    getKeys(node, arr) {
      if (!node.children) {
        return arr.push(node.id)
      }
      node.children.forEach((item) => {
        this.getKeys(item, arr)
      })
    },
    // 监听分配权限的数组重新赋值
    setRightDialogClosed() {
        this.defKeys = []
    },
    // 点击为角色分配权限
    async allotRights() {
      const keys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys()
      ]

      const idStr = keys.join(',')

      const { data: res } = await this.$http.post(
        `roles/${this.roleId}/rights`,
        { rids: idStr }
      )
    //   console.log(res)

      if (res.meta.status !== 200) {
        return this.$message.error('分配权限失败！')
      }

      this.$message.success('分配权限成功！')
      this.getRolesList()
      this.setRightDialogVisible = false
    }
  },
}
</script>

<style lang="less" scoped>
.el-tag {
  margin: 8px;
}
.bdtop {
  border-top: 1px solid #dddddd;
}
.bdbuttom {
  border-bottom: 1px solid #dddddd;
}
.vcenter {
  display: flex;
  align-items: center;
}

</style>