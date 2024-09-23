import { defineStore } from "pinia";

export const useNoteStore = defineStore("notes", {
  state: () => ({
    notes: [
      {
        id: 1,
        title: "完成練習",
        content: "練習Vue.js",
        isPinned: false,
      },
      {
        id: 2,
        title: "整理房間",
        content: "整理書桌與櫃子",
        isPinned: false,
      },
      {
        id: 3,
        title: "洗碗",
        content: "還要拖地",
        isPinned: true,
      },
      {
        id: 4,
        title: "運動",
        content: "上籃1000次",
        isPinned: true,
      },
    ],
    selectedNoteId: -1,
  }),
  getters: {
    // 需要被讀取的資料函式
    pinnedNotes(state) {
      return state.notes.filter((note) => note.isPinned);
    },
  },
  actions: {
    // 變更資料狀態的函式區
    markedPin(id) {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes[index].isPinned = !this.notes[index].isPinned;
      }
    },
    addNote(title, content) {
      if (title.length === 0) return;
      this.notes.push({
        id: Math.floor(Math.random() * 100000),
        title: title,
        content: content,
        isPinned: false,
      });
    },
    editNote(id, title, content) {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes[index].title = title;
        this.notes[index].content = content;
      }
    },
    selectNote(id) {
      this.selectedNoteId = id;
    }
  },
});
