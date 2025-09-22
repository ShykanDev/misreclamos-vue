<template>
 <header class="sticky top-0 z-50 w-full shadow-sm backdrop-blur-md bg-white/80">
  <section class="flex justify-between items-center px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <!-- Logo -->
    <div class="flex items-center space-x-2">
      <svg class="w-8 h-8 text-rose-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>

      <div class="flex w-full">
        <router-link
  to="/"
  class="inline-flex items-center"
>
  <span class="text-xl font-bold text-rose-500 animate__animated animate__zoomInLeft">mis</span>
  <span
    v-if="toggleDomain"
    class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 animate-delay-[50ms] animate__animated animate__zoomInLeft"
  >
    reclamos
  </span>
  <span
    v-else
    class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 animate-delay-[50ms] animate__animated animate__zoomInLeft"
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
    </div>

    <!-- Navegación principal (oculta en móvil)-->
    <nav class="hidden space-x-8 md:flex">
      <RouterLink
        to="/"
        class="relative px-3 py-2 text-gray-600 transition-colors hover:text-rose-900 group"
        active-class="font-medium text-rose-900"
      >
        Nosotros
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
      </RouterLink>
      <RouterLink
        to="/comentarios"
        class="relative px-3 py-2 text-gray-600 transition-colors hover:text-rose-900 group"
        active-class="font-medium text-rose-900"
      >
        Comentarios
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
      </RouterLink>
      <RouterLink
        to="/ayuda"
        class="relative px-3 py-2 text-gray-600 transition-colors hover:text-rose-900 group"
        active-class="font-medium text-rose-900"
      >
        Ayuda
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
      </RouterLink>
    </nav>

    <!-- Formulario de búsqueda y botones (ocultos en móvil) -->
    <div class="hidden md:flex md:items-center md:space-x-4">
      <div class="relative">
        <input
          type="search"
          name="busqueda"
          placeholder="Buscar..."
          class="px-4 py-2 w-44 text-sm rounded-lg border border-gray-200 transition-all focus:w-64 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
        >
        <button type="submit" class="flex absolute inset-y-0 right-0 items-center pr-3 text-gray-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <RouterLink
        to="/register"
        class="px-4 py-2 text-sm font-medium text-rose-900 rounded-lg border border-rose-600 transition-colors hover:bg-rose-50"
      >
        Registrarse
      </RouterLink>
      <RouterLink
        to="/login"
        class="px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-lg transition-colors hover:bg-rose-700"
      >
        Iniciar Sesión
      </RouterLink>
    </div>

    <!-- Botón de menú móvil (visible solo en móvil) -->
    <button
      type="button"
      class="p-2 text-gray-600 rounded-md transition-colors md:hidden hover:text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
      @click="toggleMobileMenu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </section>
</header>


  <main>
    <slot name="main"></slot>
  </main>

  <footer class="py-12 text-rose-900 bg-white border-t-4 border-rose-600">
  <div class="container px-4 mx-auto">
    <!-- Logo y descripción principal -->
    <div class="flex flex-col items-center mb-12 text-center">
      <a href="" class="mb-4">
        <img src="./img/logo.gif" alt="Logo" class="w-auto h-12">
      </a>
      <p class="mx-auto max-w-2xl text-rose-900">
        Sitio gratuito y de uso exclusivo para revisar y compartir experiencias
      </p>
    </div>

    <!-- Descripción y enlaces -->
    <div class="grid grid-cols-1 gap-8 mb-12 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Descripción (oculta en móviles, visible en desktop) -->
      <div class="hidden lg:col-span-2 lg:block">
        <p class="text-rose-900 !text-lg">
          Reclame con sus experiencias, descubra con las de otros. ¿Tiene algún reclamo? Comente aquí sus experiencias y hagamos saber nuestras inconformidades sobre servicios, empresas, productos, personas y más.
        </p>
      </div>

      <!-- Enlaces principales -->
      <div>
        <h3 class="mb-4 text-xl font-bold text-rose-900">Principales</h3>
        <ul class="space-y-2">
          <li><a href="" class="transition-colors hover:text-rose-900">Nosotros</a></li>
          <li><a href="" class="transition-colors hover:text-rose-900">Ayuda</a></li>
          <li><a href="" class="transition-colors hover:text-rose-900">Comentarios</a></li>
          <li><a href="" class="transition-colors hover:text-rose-900">Contacto</a></li>
        </ul>
      </div>

      <!-- Acciones -->
      <div>
        <h3 class="mb-4 text-xl font-bold text-rose-900">Acciones</h3>
        <ul class="space-y-2">
          <li><a href="" class="transition-colors hover:text-rose-900">Categorías</a></li>
          <li><a href="" class="transition-colors hover:text-rose-900">Perfil</a></li>
          <li><a href="" class="transition-colors hover:text-rose-900">Crear comentarios</a></li>
          <li><a href="" class="transition-colors hover:text-rose-900">Crear Registro</a></li>
          <li><a href="" class="transition-colors hover:text-rose-900">Iniciar Sesión</a></li>
        </ul>
      </div>

      <!-- Seguridad -->
      <div>
        <h3 class="mb-4 text-xl font-bold text-rose-900">Seguridad</h3>
        <ul class="space-y-2">
          <li><a href="" class="transition-colors hover:text-rose-900">Aviso de Privacidad</a></li>
          <li><a href="" class="transition-colors hover:text-rose-900">Términos y Condiciones</a></li>
          <li><img src="" alt="SSL Certificado" class="mt-2 w-auto h-8"></li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="pt-6 text-center text-rose-900 border-t border-rose-800">
      <p>misreclamos.com <span id="year"></span> &copy; Todos los derechos reservados. Este sitio fue diseñado por JAAC <span>Actualizado por: <span>PACA</span></span></p>
    </div>
  </div>
</footer>



</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';


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

<style scoped></style>
