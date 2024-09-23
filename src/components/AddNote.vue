<script setup>
import { ref } from "vue";
import { useNoteStore } from "../stores/NoteStore";
import { storeToRefs } from "pinia";

const newNote = ref({
  title: "",
  content: "",
});

const noteStore = useNoteStore();
const { addNote } = noteStore;

// 新增筆記方法
const handleAddNote = () => {
  if (newNote.value.title && newNote.value.content) {
    // 添加筆記到 store
    addNote(newNote.value.title, newNote.value.content);

    // 重置表單
    newNote.value.title = "";
    newNote.value.content = "";
  } else {
    alert("請填寫標題和內容！");
  }
};
</script>

<template>
  <div class="container">
    <main>
      <form @submit.prevent="handleAddNote">
        <div class="mb-3">
          <label for="titleInput" class="form-label">標題：</label>
          <input type="text" v-model="newNote.title" class="form-control" id="titleInput" placeholder="請輸入標題..." />
        </div>
        <div class="mb-3">
          <label for="contentInput" class="form-label">內容：</label>
          <textarea v-model="newNote.content" class="form-control" id="contentInput" rows="10"
            placeholder="請輸入內容..."></textarea>
        </div>
        <button type="button" class="btn btn-outline-success" @click="handleAddNote">
          新增 <i class="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </main>
  </div>
</template>

<style scoped>
form {
  position: relative;
}

.btn-outline-success {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
