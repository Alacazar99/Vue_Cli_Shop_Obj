<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 表单 -->
      <el-form :model="loginForm" :rules="rules" ref="form" class="login_form" >
        <el-form-item  prop='username'>
          <el-input  v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item  prop='password'>
          <el-input  v-model="loginForm.password" prefix-icon="el-icon-view" type="password"></el-input>
        </el-form-item>
        <!-- 按鈕 -->
        <el-form-item class='btns'>
          <el-button type="primary" plain @click="login">登录</el-button>
          <el-button type="info" plain @click="resetFrom">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录表单的数据对象；
      loginForm: {
        username: 'Alacazar',
        password: '123'
      },
      rules: {
        //   验证用户名
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        //   验证密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetFrom () {
      // 重置表单；
      this.$refs.form.resetFields()
    },
    login () {
      this.$refs.form.validate(async valid => {
        if (!valid) {
          return null
        }
        this.$router.push('/home')
        // 向服务器提交用户登录数据，验证；***
        const { data: res } = await this.$http.post('login', this.form)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        window.sessionStorage.setItem('Token', res.data.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 320px;
  background-color: #eeeeee;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: #eee;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #cccccc;
  }
}

.btns{
    display: flex;
    float: right;
}

.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
}
</style>
