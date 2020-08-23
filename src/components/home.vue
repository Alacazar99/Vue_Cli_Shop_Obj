<template>
  <div class="home">
    home组件
    <el-button type="info" @click="logout" plain>退出</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push("/login")
    },
  },
};
</script>

<style scoped>
</style>
