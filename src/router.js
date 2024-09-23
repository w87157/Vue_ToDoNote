import { createRouter, createWebHistory } from "vue-router";
import NoteGrid from "./components/NoteGrid.vue";
import AddNote from "./components/AddNote.vue";
import EditNote from "./components/EditNote.vue";

const routes = [
  { path: "/", component: NoteGrid, name: "grid" },
  { path: "/add", component: AddNote, name: "add" },
  { path: "/edit/:id", component: EditNote, name: "edit", props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
