<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");

const usernameError = ref(true);
const usernameClick = ref(false);
const passwordError = ref(true);
const passwordClick = ref(false);

//Username Clicked
function usernameClickedFunction() {
  usernameClick.value = true;
}

//Username requirements
function usernameRequirments() {
  if (username.value.length > 5) {
    usernameError.value = false;
  } else {
    usernameError.value = true;
  }
}

//Password Clicked
function passwordClickedFunction() {
  passwordClick.value = true;
}

//Password requirements
function passwordRequirments() {
  if (password.value.length > 5) {
    passwordError.value = false;
  } else {
    passwordError.value = true;
  }
}
</script>

<template>
  <div class="container">
    <div
      class="text-2xl text-center text-white font-bold border-8 border-white rounded-2xl hover:text-black hover:bg-blue-100 hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)] h-64 w-44 mx-auto mt-24"
    >
      Welcome

      <form action="Titles">
        <!-- User inputs Username -->
        <input
          v-model="username"
          @keyup="usernameRequirments"
          @click="usernameClickedFunction"
          class="bg-white text-base text-black border-2 border-black rounded-lg mt-8 w-28"
          placeholder="Username"
        />

        <!-- If Username is clicked -->
        <div v-if="usernameClick">
          <!-- If usernameError is True -->
          <div
            v-if="usernameError"
            class="flow-root text-red-700 text-xs w-28 ml-6"
          >
            <p class="float-left ml-1">*</p>
            <p class="float-right">Min 6 characters</p>
          </div>
        </div>

        <!-- User inputs Password -->
        <input
          v-model="password"
          @keyup="passwordRequirments"
          @click="passwordClickedFunction"
          class="bg-white text-base text-black border-2 border-black rounded-lg mt-2 w-28"
          type="password"
          placeholder="Password"
        />

        <!-- If Password is clicked -->
        <div v-if="passwordClick">
          <!-- If passwordError is True -->
          <div
            v-if="passwordError"
            class="flow-root text-red-700 text-xs w-28 ml-6"
          >
            <p class="float-left ml-1">*</p>
            <p class="float-right">Min 6 characters</p>
          </div>
        </div>

        <!-- If usernameError and passwordError are both false -->
        <div v-if="!usernameError && !passwordError">
          <button
            class="bg-white text-base text-black border-2 border-black rounded-lg mt-8 w-28"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    <!-- Create Account Link -->
    <div class="grid grid-cols-1 text-white text-center mt-4">
      <div>
        <div class="text-sm">Don't have an account?</div>
        <nav>
          <RouterLink
            to="/CreateAccount"
            class="underline underline-offset-4 text-white text-sm"
          >
            Create One
          </RouterLink>
        </nav>
        <RouterView />
      </div>
    </div>
  </div>
</template>
