<script setup>
import { useNoteStore } from "../stores/NoteStore"; // 從 Pinia 的 NoteStore 中引入狀態管理
import { storeToRefs } from "pinia"; // 使用 storeToRefs 來綁定狀態
import { ref } from "vue";

// 從 NoteStore 中取得釘選筆記和釘選方法
const noteStore = useNoteStore();
const { pinnedNotes } = storeToRefs(noteStore);

// 切換筆記的釘選狀態
const togglePinned = (noteId) => {
  noteStore.markedPin(noteId); // 呼叫釘選或取消釘選方法
};
</script>

<template>
  <div class="container">
    <!-- 導航到新增筆記頁面 -->
    <router-link :to="{ name: 'add' }" class="d-flex justify-content-around">
      <button class="mt-3 btn btn-warning w-100">新增筆記</button>
    </router-link>

    <!-- 重要（釘選）筆記部分 -->
    <div class="important">
      <h3 class="my-3"><i class="fa-solid fa-star"></i> 重要</h3>
      <ul class="list-group">
        <li v-for="pinned in pinnedNotes" :key="pinned.id" class="list-group-item d-flex justify-content-between">
          {{ pinned.title }}
          <div class="icon-group d-flex justify-content-between">
            <!-- 點擊垃圾桶來取消釘選 -->
            <i class="fa-solid fa-trash-can pointer" @click="togglePinned(pinned.id)"></i>
          </div>
        </li>
      </ul>
    </div>

    <!-- 全部筆記部分 -->
    <div class="all">
      <h3 class="my-4"><i class="fa-solid fa-book"></i> 全部</h3>
      <ul class="list-group">
        <li v-for="note in noteStore.notes" :key="note.id" class="list-group-item d-flex justify-content-between">
          {{ note.title }}
          <div class="icon-group d-flex justify-content-between">
            <!-- 點擊星形圖標來釘選 -->
            <i class="fa-solid fa-star pointer" @click="togglePinned(note.id)"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- Scoped 樣式 -->
<style scoped>
.important h3 i.fa-star {
  color: rgb(225, 206, 87);
  /* 釘選星星的顏色 */
}

.all h3 i.fa-book {
  color: brown;
  /* 書本圖標的顏色 */
}

.fa-star:hover {
  color: rgb(225, 206, 87);
  /* 滑鼠懸停星形圖標時變黃 */
  transition: color 0.3s ease;
  /* 添加平滑過渡效果 */
}

.fa-trash-can:hover {
  color: red;
  /* 滑鼠懸停垃圾桶圖標時變紅 */
  transition: color 0.3s ease;
  /* 添加平滑過渡效果 */
}

.pointer {
  cursor: pointer;
  /* 手形游標，提示可以點擊 */
}
</style>
