<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <div v-for="(item, index) in todoListRender" :key="index" style="color: whitesmoke; width: 100%; margin: 20px;">
    <h1>{{ item.title }}</h1>
    <p>{{ item.description }}</p>
    <p>{{ item.status.createOn }}</p>
    <p>{{ item.status.modifyBy }}</p>
    <input v-model="title" />
    <button>Store Data</button>
    <button style="margin-left: 10px;" @click="updateToDoList(title, index)">update Data</button>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from '@/stores/counter'
import { computed, ref } from 'vue';

const counter = useCounterStore()

const title = ref('');
const updateToDoList = (title: any, index: any) => {
  const modifyBy = new Date;
  counter.updateList(title, index, modifyBy);
}
const toDoList = [
  {
    Id: 0,
    title: "Work1",
    description: "washing dishes is a hard work",
    status: {
      createOn: new Date,
      modifyBy: new Date
    },
  },
  {
    Id: 1,
    title: "Work2",
    description: "washing dishes is a hard work",
    status: {
      createOn: new Date,
      modifyBy: new Date
    },
  },
  {
    Id: 2,
    title: "Work3",
    description: "washing dishes is a hard work",
    status: {
      createOn: new Date,
      modifyBy: new Date
    },
  },
  {
    Id: 3,
    title: "Work4",
    description: "washing dishes is a hard work",
    status: {
      createOn: new Date,
      modifyBy: new Date
    },
  },
  {
    Id: 4,
    title: "Work5",
    description: "washing dishes is a hard work",
    status: {
      createOn: new Date,
      modifyBy: new Date
    },
  },
]
counter.storeToDoList(toDoList);
const todoListRender = computed(() => counter.getToDoList) ;
console.log('todoList arr', counter.todoList[0]);
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
