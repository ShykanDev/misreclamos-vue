<template>
 <header class="sticky top-0 z-50 w-full shadow-sm backdrop-blur-md bg-white/80">
  <section class="flex justify-between items-center px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <!-- Logo -->
    <div class="flex items-center space-x-2">
      <AnimatedLogo />
    </div>

    <!-- Navigation (hidden in mobile)-->
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

    <!-- Search and buttons (hidden in mobile) -->
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
      v-if="!useLogginStore().getIsUserLoggedIn"
        to="/register"
        class="px-4 py-2 text-sm font-medium text-rose-900 rounded-lg border border-rose-600 transition-colors hover:bg-rose-50"
      >
        Registrarse
      </RouterLink>
      <RouterLink
      v-if="!useLogginStore().getIsUserLoggedIn"
        to="/login"
        class="px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-lg transition-colors hover:bg-rose-700"
      >
        Iniciar Sesión
      </RouterLink>
    </div>
    <button v-if="useLogginStore().getIsUserLoggedIn" @click="signOut()" class="px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-lg transition-colors hover:bg-rose-700">Cerrar Sesión</button>

    <!-- Mobile Menu Button  (visible only in mobile)-->
    <button
      type="button"
      class="p-2 text-gray-600 rounded-md transition-colors md:hidden hover:text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
      @click="toggleMobileMenu"
    >
    <v-icon v-if="!mobileMenu" name='hi-menu' class="animate__animated animate__rubberBand animate-duration-[.4s]" />
    <v-icon v-else name='io-close' class="animate__animated animate__rotateIn animate-duration-[.4s]"/>
    </button>

  </section>
</header>


  <main>
       <!-- Mobile Menu (hidden in large screens) -->
       <article class="fixed inset-0 z-40 bg-white transition-transform duration-300 ease-out md:hidden min-h-dvh"
       :class="{'translate-x-full': !mobileMenu}"
       >
       <nav v-if="mobileMenu" class="flex flex-col mt-[1rem] min-h-dvh  justify-evenly items-center">
      <RouterLink
      v-for="(e,index) in links"
      :key="index"
        :to="e.to "
        class="relative px-3 py-2 text-gray-600 transition-colors hover:text-rose-900 group animate-fade-left"
     :style="`animation-delay: ${index * 90}ms`"
        active-class="font-medium text-rose-900"
      >
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full">{{ e.label }}</span>
      </RouterLink>

    </nav>
      </article>
    <slot name="main"></slot>
  </main>

  <footer class="py-12 text-rose-900 bg-white border-t-4 border-rose-600">
  <div class="container px-4 mx-auto">
    <!-- Logo y descripción principal -->
    <div class="flex flex-col items-center mb-12 text-center">
      <AnimatedLogo />
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
import AnimatedLogo from '@/components/Header/AnimatedLogo.vue';
import { nextTick, onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { getAuth } from 'firebase/auth';
import { useLogginStore } from '@/stores/loggin';

const router = useRouter();
const auth = getAuth();
const toggleDomain = ref(false);
const getRandomNumber = () => {
  setInterval(() => {
    toggleDomain.value = !toggleDomain.value;
  }, 5000);
}
onMounted(() => {
  getRandomNumber();
})

const mobileMenu = ref(false);
const toggleMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;
}

const signOut = async() => {
  try {
    await auth.signOut();
    await nextTick();
    router.push('/login');
    useLogginStore().setUserLoggedIn(false);
  } catch (error) {
    console.log(error);
  }
}
const links = [
  {
    to: "/",
    label: "Inicio"
  },
  {
    to: "/register",
    label: "Registrarse"
  },
  {
    to: "/us",
    label: "Nosotros"
  },
  {
    to: "/comentarios",
    label: "Comentarios"
  },
  {
    to: "/ayuda",
    label: "Ayuda"
  },
  {
    to:"/contacto",
    label:"Contacto"
  }
];


</script>

<style scoped></style>
