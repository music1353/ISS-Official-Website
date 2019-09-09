<template>
<div>
  <header id="iss-protal-header">
    <div class="header-logo-wrapper">
      <img class="logo-img" src="/static/logo/iss-logo.jpg" alt="no">
      <div class="bottom-line"></div>
    </div>
    <el-menu class="header-menu" :default-active="$route.path" mode="horizontal" router>
      <el-menu-item index="/about-iss">關於我們</el-menu-item>
      <el-menu-item index="/faculty">系所成員</el-menu-item>
      <el-menu-item index="/phD">博士班</el-menu-item>
      <el-menu-item index="/course-modules">課程模組</el-menu-item>
      <el-menu-item index="/about">科管院</el-menu-item>
    </el-menu>

  </header>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  }
}
</script>