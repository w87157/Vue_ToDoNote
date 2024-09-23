<script setup>
import { ref } from "vue";
import { useNoteStore } from "../stores/NoteStore"; // 引入筆記的 Pinia store

const noteStore = useNoteStore(); // 使用 store
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-for="note in noteStore.notes" :key="note.id" class="col-3 mb-3">
        <router-link :to="{ name: 'edit', params: { id: note.id } }">
          <div class="card">
            <div class="card-body">
              <!-- 釘選的筆記顯示星形圖標 -->
              <i v-show="note.isPinned" class="fa-solid fa-star"></i>
              <h5 class="card-title">{{ note.title }}</h5>
              <p class="card-text">{{ note.content }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0.8rem;
  transition: all 0.3s ease;
  /* 平滑過渡效果 */
}

.card:hover {
  background-color: blanchedalmond;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.fa-star {
  transform: scale(2) rotate(45deg);
  /* 星星放大並旋轉 */
  color: rgb(225, 206, 87);
  /* 黃金色 */
  position: absolute;
  right: 0;
  top: 0;
}
</style>
