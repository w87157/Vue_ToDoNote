<script setup>
import TopBar from "./components/TopBar.vue";
import NoteList from "./components/NoteList.vue";
</script>

<template>
  <TopBar />
  <div class="container my-4">
    <div class="row">
      <!-- 左側筆記列表 -->
      <div class="col-12 col-md-3">
        <NoteList />
      </div>
      <!-- 右側路由內容 -->
      <div class="col-12 col-md-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 可以在這裡添加自定義樣式來美化頁面 */
</style>
