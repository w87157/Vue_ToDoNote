<script setup>
// 此處可以引入其他組件或功能
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- 標誌和路由連結 -->
      <router-link :to="{ name: 'grid' }" class="navbar-brand">
        <img class="logo" src="/logo.png" alt="Quick Note Logo" />&nbsp;Quick Note
      </router-link>

      <!-- 響應式按鈕 -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 導航內容 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex ms-auto">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  width: 100px;
  /* 設定標誌寬度 */
}
</style>
