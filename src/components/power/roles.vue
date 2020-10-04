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
        <el-button type="primary" @click="addDialogVisible = true"
          >添加角色</el-button
        >
      </el-row>
      <!-- 卡片视图区域 -->
      <el-table :data="roleslist" border stripe>
        <!-- 拓展列 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              :class="['bdbuttom', i1 === 0 ? 'bdtop' : '', 'vcenter']"
              v-for="(item1, i1) in scope.row.children"
              :key="item1.id"
            >
              <!-- 渲染一級 -->
              <el-col :span="4">
                <el-tag
                  closable
                  @close="removeRightById(scope.row, item1.id)"
                  >{{ item1.authName }}</el-tag
                >
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
                      >{{ item2.authName }}</el-tag
                    >
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      type="warning"
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      closable
                      @close="removeRightById(scope.row, item3.id)"
                      >{{ item3.authName }}</el-tag
                    >
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!-- 索引列 -->
        <el-table-column type="index"></el-table-column>
        <el-table-column
          label="角色名称"
          prop="roleName"
          :span="2"
        ></el-table-column>
        <el-table-column label="职级描述" prop="roleDesc"></el-table-column>

        <el-table-column label="相关操作" width="300px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="editDialog(scope.row.id)"
              >编辑</el-button
            >
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete" size="mini" @click='removeRolesById(scope.row.id)'
              >删除</el-button
            >
            <!-- 分配权限 -->
            <el-button
              @click="showSetRightDialog(scope.row)"
              type="warning"
              icon="el-icon-setting"
              size="mini"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 分配权限的对话框 -->
    <el-dialog
      class="setRight"
      @close="setRightDialogClosed"
      title="分配权限对话框"
      :visible.sync="setRightDialogVisible"
      width="50%"
    >
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

    <!-- 添加角色的对话框 -->
    <el-dialog
      title="添加角色"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form :model="addForm" ref="addFormRef" label-width="70px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="addForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRoles">确 定</el-button>
      </span>
    </el-dialog>

    
    <!-- 修改角色的对话框 -->
    <el-dialog title="修改角色" :visible.sync="editDialogVisible"  width="50%" @close="editDialogClosed">
      <el-form :model="editForm"  ref="editFormRef" label-width="70px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editForm.roleName" ></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="editForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editRolseInfo">确 定</el-button>
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
      // 添加角色；
      addDialogVisible: false,
      addForm: {
        roleName: "",
        roleDesc: "",
      },
      editDialogVisible: false,
      //  当前修改的角色的表单
      editForm: {},
      // 默认选中的节点Id值数组
      defKeys: [],
      // 当前即将分配权限的角色id
      roleId: "",
    }
  },
  created() {
    this.getRolesList()
  },
  methods: {
    // 获取角色列表
    async getRolesList() {
      const { data: res } = await this.$http.get("roles")
      // console.log(res)
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
        ...this.$refs.treeRef.getHalfCheckedKeys(),
      ]

      const idStr = keys.join(",")

      const { data: res } = await this.$http.post(
        `roles/${this.roleId}/rights`,
        { rids: idStr }
      )

      if (res.meta.status !== 200) {
        return this.$message.error("分配权限失败！")
      }

      this.$message.success("分配权限成功！")
      this.getRolesList()
      this.setRightDialogVisible = false
    },
    // 添加角色
    async addRoles() {
      const { data: res } = await this.$http.post("roles", this.addForm)
      if (res.meta.status !== 201) {
        this.$message.error("添加角色失败！")
      }

      this.$message.success("添加角色成功！")
      // 隐藏添加角色的对话框
      this.addDialogVisible = false
      // 重新获取角色列表数据
      this.getRolesList()
    },
    addDialogClosed() {
      this.addForm = {}
    },
    // 根据 ID 查询角色数据
    async editDialog(id){
      const { data: res } = await this.$http.get('roles/'+id)
      if(res.meta.status !== 200){
        this.$message.error('查询角色信息失败！')
      }
      this.editForm = res.data
      // 显示修改角色对话框
      this.editDialogVisible = true
      // 把当前id负值给editForm
      this.editForm.id = id
      // console.log(this.editForm)
    },
    // 编辑提交角色数据
    async editRolseInfo(){
      const { data:res } = await this.$http.put('roles/' + this.editForm.id,{
        roleName: this.editForm.roleName,
        roleDesc: this.editForm.roleDesc
      })
      if(res.meta.status !== 200){
        this.$message.error('修改角色数据失败！')
      }
      //this.$message.success('修改角色权限成功！')
      // 隐藏修改角色对话框
      this.editDialogVisible = false
      // 重新获取角色列表数据
      this.getRolesList()
    },
    editDialogClosed(){
      this.$refs.editFormRef.resetFields()
    },
    // 删除对应的角色；
    async removeRolesById(id){
       // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        "此操作将永久删除该用户, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err)

      // 如果用户确认删除，则返回值为字符串 confirm
      // 如果用户取消了删除，则返回值为字符串 cancel
      // console.log(confirmResult)
      if (confirmResult !== "confirm") {
        return this.$message.info("已取消删除")
      }
      const {data:res} = await this.$http.delete('roles/'+id)
      console.log(res)
      if(res.meta.status !== 200){
        this.$message.error('删除失败！')
      }else{
        this.$message.success(res.meta.msg)
      }
      // 刷新角色列表
      this.getRolesList()
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