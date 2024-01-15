import { ref, computed } from 'vue'
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { todoList: [] as any }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    storeToDoList(listInput: any) {
      this.todoList = listInput;
    },
    updateList(listInput: any, index: number, modifyBy: any) {
      this.todoList[index].title = listInput;
      this.todoList[index].status.modifyBy = modifyBy;
    },
  },
  getters: {
    getToDoList: (state) => state.todoList,
  }
})
