<template>
 <div class="flex w-full">
        <router-link
  to="/"
  class="inline-flex items-center"
>
<v-icon name="gi-megaphone"  class="text-rose-600 animate__animated animate__zoomInLeft" scale="2"/>
  <span class="text-xl font-bold text-rose-500 animate__animated animate__zoomInLeft">mis</span>
  <span
    v-if="toggleDomain"
    class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-900 animate-delay-[50ms] animate__animated animate__zoomInLeft"
  >
    reclamos
  </span>
  <span
    v-else
    class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-900 animate-delay-[50ms] animate__animated animate__zoomInLeft"
  >
    denuncias
  </span>
  <span
    :key="toggleDomain"
    class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 animate-delay-[500ms] animate__animated animate__zoomInRight"
  >
    .com
  </span>
</router-link>

      </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { ref } from 'vue';

const toggleDomain = ref(false);
const getRandomNumber = () => {
  setInterval(() => {
    toggleDomain.value = !toggleDomain.value;
  }, 5000);
}
onMounted(() => {
  getRandomNumber();
})
</script>

<style scoped>

</style>
