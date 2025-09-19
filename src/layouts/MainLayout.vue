<template>
 <header class="sticky top-0 z-50 w-full shadow-sm backdrop-blur-md bg-white/80">
  <section class="flex justify-between items-center px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <!-- Logo -->
    <div class="flex items-center space-x-2">
      <svg class="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
        misreclamos
      </span>
    </div>

    <!-- Navegación principal (oculta en móvil) -->
    <nav class="hidden space-x-8 md:flex">
      <RouterLink
        to="/"
        class="relative px-3 py-2 text-gray-600 transition-colors hover:text-rose-600 group"
        active-class="font-medium text-rose-600"
      >
        Nosotros
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
      </RouterLink>
      <RouterLink
        to="/comentarios"
        class="relative px-3 py-2 text-gray-600 transition-colors hover:text-rose-600 group"
        active-class="font-medium text-rose-600"
      >
        Comentarios
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
      </RouterLink>
      <RouterLink
        to="/ayuda"
        class="relative px-3 py-2 text-gray-600 transition-colors hover:text-rose-600 group"
        active-class="font-medium text-rose-600"
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
        to="/registro"
        class="px-4 py-2 text-sm font-medium text-rose-600 rounded-lg border border-rose-600 transition-colors hover:bg-rose-50"
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
      class="p-2 text-gray-600 rounded-md transition-colors md:hidden hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
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

  <footer>

  </footer>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';


const domainNames = {

}
</script>

<style scoped></style>
