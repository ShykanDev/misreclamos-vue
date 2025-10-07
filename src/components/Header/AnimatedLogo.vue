<template>
  <div class="flex w-full">
    <router-link to="/" class="inline-flex items-center">
      <div class="relative group w-fit">
  <img src="@/assets/ssl-v2.webp" alt="Logo" class="mr-3 w-9 cursor-pointer">

  <article
    class="absolute left-0 top-11 p-2 rounded-3xl border-2 border-green-200 opacity-0 transition-all duration-300 translate-y-0 pointer-events-none bg-slate-50/90 min-w-xs -z-20 group-hover:opacity-100 group-hover:translate-y-2 group-hover:z-0 group-hover:pointer-events-auto">
    <p class="text-xs font-bold text-slate-500">
      Este sitio utiliza conexión segura SSL y cumple con estándares avanzados de seguridad digital para proteger
      su información. Los datos personales se almacenan de manera cifrada y bajo estrictas medidas de resguardo.
    </p>
  </article>
</div>

      <v-icon name="gi-megaphone" class="text-rose-600 animate__animated animate__zoomInLeft" scale="2" />
      <span class="text-xl font-bold text-rose-500 animate__animated animate__zoomInLeft">mis</span>
      <span v-if="toggleDomain"
        class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-900 animate-delay-[50ms] animate__animated animate__zoomInLeft">
        reclamos
      </span>
      <span v-else
        class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-900 animate-delay-[50ms] animate__animated animate__zoomInLeft">
        denuncias
      </span>
      <span :key="toggleDomain"
        class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 animate-delay-[500ms] animate__animated animate__zoomInRight">
        .com
      </span>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'

const toggleDomain = ref(false)
const getRandomNumber = () => {
  setInterval(() => {
    toggleDomain.value = !toggleDomain.value
  }, 5000)
}
onMounted(() => {
  getRandomNumber()
})
</script>

<style scoped></style>
