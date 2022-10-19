<script setup lang="ts">
import { ref } from "vue";

const usernameText = ref("");
const usernameError = ref(true);
const passwordText = ref("");
const passwordError = ref(true);
const password2Text = ref("");
const password2Error = ref(true);

//Username requirements
function usernameTest() {
  if (usernameText.value.length > 5) {
    usernameError.value = false;
  } else {
    usernameError.value = true;
  }
}

//Password1 requirements
function passwordTest() {
  if (passwordText.value.length > 5) {
    passwordError.value = false;
  } else {
    passwordError.value = true;
  }
}

//Password2 requirements
function password2Test() {
  if (password2Text.value === passwordText.value) {
    password2Error.value = false;
  } else {
    password2Error.value = true;
  }
}
</script>

<template>
  <div class="border-2 border-black rounded-lg ml-80 mr-96 mt-4 mb-8 h-52">
    <form action="/">
      <!-- User inputs Username -->
      <div class="grid grid-cols-2 mb-4 mt-4">
        <input
          v-model="usernameText"
          class="border-2 border-black w-72 ml-24"
          @keyup="usernameTest"
          placeholder="Username"
        />

        <div v-if="usernameError">
          <div class="text-red-700 -ml-4 justify-left">
            *Must be more than 5 characters
          </div>
        </div>
      </div>

      <!-- User inputs Password1 -->
      <div class="grid grid-cols-2 mb-2">
        <input
          v-model="passwordText"
          class="border-2 border-black w-72 ml-24"
          @keyup="passwordTest"
          placeholder="Password"
          type="password"
        />

        <div v-if="passwordError">
          <div class="text-red-700 -ml-4 justify-left">
            *Must be more than 5 characters
          </div>
        </div>
      </div>

      <!-- User inputs Password2 -->
      <div class="grid grid-cols-2">
        <input
          v-model="password2Text"
          class="border-2 border-black w-72 ml-24"
          @keyup="password2Test"
          placeholder="Password Again"
          type="password"
        />

        <div v-if="password2Error">
          <div class="text-red-700 -ml-4 justify-left">
            *Must match your above password
          </div>
        </div>
      </div>

      <!-- Check if all requirements passed -->
      <div v-if="!password2Error && !passwordError && !usernameError">
        <button
          type="submit"
          class="border-2 border-black rounded-lg mt-8 mb-24 ml-80 pl-2 pr-2"
          onclick="alert('Saved User!')"
        >
          Create Account
        </button>
      </div>
      <div v-else>
        <button
          type="button"
          class="border-2 border-black rounded-lg mt-8 mb-24 ml-80 pl-2 pr-2"
          onclick="alert('User Not Saved, Please Finish Creating Account')"
        >
          Create Account
        </button>
      </div>
    </form>
  </div>

  <!-- Back To Login Screen Button -->
  <div class="ml-64">
    <div class="ml-96">
      <RouterLink
        to="/"
        class="border-2 border-black rounded-lg pl-2 pr-2 pb-1 ml-2"
        >Back To Login</RouterLink
      >
    </div>
  </div>
</template>
