<template>
  <MainLayout>
    <template #main>
      <section class="px-4 py-1.5 bg-gradient-to-b from-white to-blue-50 border-b-[1px] border-blue-100 border-dashed sm:px-6 lg:px-8">
        <div class="mx-auto">
          <div class="px-4 py-3 mx-auto sm:px-2 lg:px-3">
            <div class="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
              <!-- Contenido textual (izquierda en PC) -->
              <div class="text-center lg:text-left">
                <div
                  class="inline-flex justify-center items-center px-3 py-1 mb-4 text-sm font-medium text-rose-600 bg-rose-50 rounded-full">
                  <v-icon name="fa-balance-scale" class="mr-1.5" scale="1.5" />
                  Plataforma de reclamos transparente
                </div>
                <h1 class="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  <span class="block animate-fade-left">Reclame con sus experiencias,</span>
                  <span
                    class="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 animate__animated animate__jackInTheBox animate-delay-500">
                    descubra con las de otros
                  </span>
                </h1>
                <p class="mb-8 max-w-prose text-lg text-gray-600">
                  ¿Tiene un reclamo? Compartea sus experiencias y hagamos visible lo que necesita cambiar en servicios,
                  empresas, productos y más.
                </p>

                <!-- Categorías con animación -->
                <div class="flex flex-wrap gap-2 justify-center mb-10 lg:justify-start">
                  <button v-for="(service, index) in categories" :key="index"
                    class="inline-flex items-center px-4 py-2 text-lg font-medium text-white bg-rose-600 rounded-lg transition-all hover:bg-rose-700 hover:shadow-lg hover:transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                    <v-icon :name="service.icon" class="mr-2" />
                    {{ service.name }}
                  </button>
                </div>

                <!-- Botón con efecto 3D -->
                <div class="flex justify-center lg:justify-start">
                  <a href="#"
                    class="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg transition-all transform hover:from-rose-700 hover:to-red-900 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                    ¡Registro Gratis!
                    <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Imagen (derecha en PC) -->
              <div class="relative">
                <div class="overflow-hidden relative rounded-2xl">
                  <div class="absolute inset-0 z-10"></div>
                  <img src="../assets/img/grito.png" alt="Personas expresando sus reclamos"
                    class="object-cover relative z-20 w-full rounded-2xl filter drop-shadow-xl">

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      <!--Start of the comments UI-->
      <section class="grid grid-cols-1 w-full bg-gradient-to-b from-blue-50 to-gray-100 md:grid-cols-3">

        <!--Categories-->
        <article class="overflow-y-scroll h-dvh">
          <CategoriesComponent />
        </article>

        <!--Comments-->
        <article class="overflow-y-scroll h-dvh">
          <div v-if="loading" class="flex flex-col justify-center items-center">
            <v-icon name="ri-loader-5-fill" class="mx-auto text-rose-600" animation="spin" scale="7.5" speed="fast"/>
            <p class="text-center text-slate-800">Cargando comentarios...</p>
          </div>
          <div v-else>
            <CommentCard  v-for="complaint in complaints" :key="complaint.id" :category="complaint.category" :content="complaint.description" :image="complaint.image" :title="complaint.title" :userName="complaint.userName" :date="complaint.createdAt" :service="complaint.service" />

<!-- directive -->
<div class="images" v-viewer>
      <img v-for="src in images" :key="src" :src="src">
    </div>
    <!-- component -->
    <viewer :images="images">
      <img v-for="src in images" :key="src" :src="src">
    </viewer>

          </div>
        </article>

        <!--Ads-->
        <article class="overflow-y-scroll p-6 bg-gray-100 rounded-sm h-dvh">
          <div class="p-4 mx-auto space-y-4 w-full border border-gray-400 bg-slate-200 rounded-4xl">
            <!-- Título -->
            <h2 class="mb-6 text-2xl font-bold text-gray-500">
              Publicidad
            </h2>

            <!-- Tarjetas de enlaces -->
            <div class="flex flex-col gap-4 w-full">
              <!-- OficioMaestro -->
              <a href="https://oficiomaestro.com/index.php" target="_blank" rel="noopener noreferrer" class="block p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent
                       bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')]
                       bg-cover bg-center">
                <div class="p-4 w-full rounded-lg bg-black/60">
                  <p class="text-3xl font-semibold text-white">oficiomaestro.com</p>
                  <p class="text-2xl text-white/90">
                    Sitio para indagar o reportar a profesionistas y maestros de cualquier área
                  </p>
                </div>
              </a>

              <!-- MiEmpleador -->
              <a href="https://miempleador.com/" target="_blank" rel="noopener noreferrer" class="block p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent
                       bg-[url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')]
                       bg-cover bg-center">
                <div class="p-4 w-full rounded-lg bg-black/60">
                  <p class="text-3xl font-semibold text-white">miempleador.com</p>
                  <p class="text-2xl text-white/90">
                    Sitio para indagar a empleados y empleadores conociendo las experiencias de anteriores trabajadores
                    o jefes
                  </p>
                </div>
              </a>

              <!-- MiArrendatario -->
              <a href="https://miarrendador.com/index.php" target="_blank" rel="noopener noreferrer" class="block p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent
                       bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')]
                       bg-cover bg-center">
                <div class="p-4 rounded-lg bg-black/60">
                  <p class="text-3xl font-semibold text-white">miarrendatario.com</p>
                  <p class="text-2xl text-white/90">
                    Sitio para descubrir a arrendatarios y arrendadores conociendo las experiencias de anteriores
                    inquilinos o dueños
                  </p>
                </div>
              </a>
            </div>

            <!-- Publicidad -->
            <div class="p-4 mt-6 bg-gray-50 rounded-xl border border-gray-200">
              <fieldset class="space-y-2">
                <legend class="px-2 text-sm font-medium text-gray-500">Publicidad</legend>
                <a href="https://miexpareja.net/" target="_blank" rel="noopener noreferrer" class="block">
                  <img src="../assets/img/anuncio-1.png" alt="Publicidad" class="w-full h-auto rounded-lg">
                </a>
              </fieldset>
            </div>
          </div>
        </article>


      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import 'animate.css';
import CommentCard from '@/components/CommentCard.vue';
import CategoriesComponent from '@/components/MainCategories/CategoriesComponent.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { collection, getDocs, query, where, orderBy, limit, startAfter, DocumentSnapshot } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import type { IComplaint } from '@/Interfaces/IComplaint';


import 'notyf/notyf.min.css';
import { Notyf } from 'notyf';
const  notyf = new Notyf({
  duration: 5000,
  position: {
    x: 'right',
    y: 'top'
  },
  dismissible: true,
});

  const db = getFirestore();
const complaintsCollection = collection(db, 'complaints');
const categories = [
  {
    name: 'Bancos',
    icon: 'bi-bank2'
  },
  {
    name: 'Gobierno',
    icon: 'ri-government-line'
  },
  {
    name: 'Redes Sociales',
    icon: 'io-chatbubbles'
  },
  {
    name: 'Paquetería y Correos',
    icon: 'bi-mailbox2'
  },
  {
    name: 'Salud',
    icon: 'md-healthandsafety'
  },
  {
    name: 'Transportes',
    icon: 'fa-bus-alt'
  },
  {
    name: 'Streaming',
    icon: 'md-livetv-twotone'
  },
  {
    name: 'Hospedaje',
    icon: 'ri-hotel-line'
  },
  {
    name: 'Comida y Restaurantes',
    icon: 'io-restaurant'
  }
];



const complaints = ref<IComplaint[]>([]);
const loading = ref(true);

const lastVisibleDoc = ref<DocumentSnapshot | null>(null);

const getComments = () => {
  const qGetComplaints = query(complaintsCollection, orderBy('createdAt', 'desc'), limit(10));
  getDocs(qGetComplaints).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      complaints.value.push({
        ...doc.data() as IComplaint
      });
    });
    lastVisibleDoc.value = querySnapshot.docs[querySnapshot.docs.length - 1];
    loading.value = false;
  }).catch((error) => {
    console.log(error);
    notyf.error('Error al cargar los comentarios');
    loading.value = false;
  })
}
onMounted(() => {
  getComments();
})
</script>

<style scoped></style>
