<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { useNoteStore } from "../stores/NoteStore";
import { useRoute, useRouter } from "vue-router";

const noteStore = useNoteStore();
const route = useRoute();
const router = useRouter();

const newNote = ref({
  title: "",
  content: "",
});

// 取得選擇筆記ID
const currentNote = computed(() => {
  return noteStore.notes.find(note => note.id === parseInt(route.params.id));
});

// 讀取對應ID的資料
onMounted(() => {
  if (currentNote.value) {
    newNote.value.title = currentNote.value.title;
    newNote.value.content = currentNote.value.content;
  }
});

// 儲存當前筆記的變化
watch(currentNote, (note) => {
  if (note) {
    newNote.value.title = note.title;
    newNote.value.content = note.content;
  }
});

// 表單提交處理
const updateNote = () => {
  if (currentNote.value) {
    noteStore.editNote(currentNote.value.id, newNote.value.title, newNote.value.content);
    router.push('/'); // 編輯後重定向到主頁
  }
};
</script>

<template>
  <div class="container">
    <main>
      <form @submit.prevent="updateNote">
        <div class="mb-3">
          <label for="titleInput" class="form-label">標題：</label>
          <input type="text" v-model="newNote.title" class="form-control" id="titleInput" placeholder="請輸入標題..." />
        </div>
        <div class="mb-3">
          <label for="contentInput" class="form-label">內容：</label>
          <textarea v-model="newNote.content" class="form-control" id="contentInput" rows="10"
            placeholder="請輸入內容..."></textarea>
        </div>
        <button class="btn btn-outline-success">
          儲存 <i class="fa-solid fa-floppy-disk"></i>
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
