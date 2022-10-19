<script setup lang="ts">
import { ref, reactive, watch } from "vue";

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

let data: Data[] = [];
const todoId = ref(1);
const state = reactive({ data });

//Get Data
async function fetchData() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );

  const objData = await res.json();

  let dataEntry: Data = {
    userId: objData["userId"],
    id: objData["id"],
    title: objData["title"],
    completed: objData["completed"],
  };

  state.data.push(dataEntry);
}

fetchData();

watch(todoId, fetchData);
</script>

<template>
  <!-- If data is empty -->
  <p v-if="!state">Loading...</p>

  <!-- If we have the data -->
  <div v-else class="pb-8">
    <div class="border-2 border-lightblue rounded-lg bg-cyan-200">
      <div
        class="text-center underline text-2xl font-serif font-bold col-span-4 pt-4 pb-4 mb-8"
      >
        Titles
      </div>

      <!-- Get next data point -->
      <div class="ml-96">
        <div class="ml-80">
          <button
            class="border-2 border-black rounded-lg w-36 hover:bg-white -ml-2 mb-4"
            @click="todoId++"
          >
            Get Title {{ todoId + 1 }}
          </button>
        </div>
      </div>

      <!-- List id, title, and completed data points -->
      <div class="grid grid-cols-3 gap-2">
        <div
          class="text-center bg-red-500 rounded-lg p-4"
          v-for="item in state.data"
          :key="item.valueOf.toString"
        >
          <div class="">
            {{ item.id }}. {{ item.title }} : {{ item.completed }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Back To Login Screen Button -->
  <div class="ml-96">
    <div class="ml-80">
      <RouterLink
        to="/"
        class="border-2 border-black rounded-lg pl-2 pr-2 pb-1 ml-2"
        >Back To Login</RouterLink
      >
    </div>
  </div>
</template>
