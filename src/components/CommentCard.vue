<template>
  <div class="overflow-hidden m-4 mx-auto max-w-md bg-white rounded-xl border-b-4 border-l-4 border-rose-800 shadow-md md:max-w-2xl">
    <div class="p-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-sm font-medium text-gray-500">{{ convertDate(date) }}</span>
        <span class="text-sm font-semibold text-gray-700">{{ userName }}</span>
      </div>

      <!-- Date and Service -->
      <div class="flex gap-2 items-center mb-2">
        <h3 class="px-2.5 py-1 text-xl font-medium text-slate-500">Empresa/Servicio: <span class="px-2 py-1 font-semibold text-rose-500 bg-rose-50 rounded-full">{{ service }}</span></h3>

      </div>

      <!-- Icono and Subtitle -->
      <div class="flex gap-3 items-center mb-4">
        <div class="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full">
          <span class="font-medium text-gray-500">{{ iniciales }}</span>
        </div>
        <span class="text-lg font-semibold text-slate-500">{{ title }}</span>
      </div>

      <!-- Category -->
      <div class="mb-3">
        <span class="text-sm font-medium text-gray-600">{{ category }}</span>
      </div>

      <!-- Content -->
      <div class="mb-4">
        <p class="text-gray-700">{{ content }}</p>
      </div>

      <!-- Image -->
      <div v-if="image" class="mb-4">
        <img @click="show" :src="image" alt="" class="w-full h-auto rounded-lg"/>
            </div>
      <!-- Button -->
      <div class="flex justify-between items-center pt-4 border-t border-gray-100">
        <button
          @click="$emit('ver-comentario')"
          class="px-4 py-2 text-sm font-medium text-white bg-rose-900 rounded-lg transition-colors cursor-pointer hover:bg-rose-700 active:bg-rose-800"
        >
          Visualizar Comentario
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timestamp } from 'firebase/firestore';
import { api as viewerApi } from 'v-viewer'
import { ref } from 'vue';


const convertDate = (dateParam:Timestamp) => {
  return dateParam.toDate().toLocaleDateString('es-ES',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
}
const props = defineProps({
  date: {
    type: Object as () => Timestamp,
    default: ()=>{}
  },
userName: {
    type: String,
    default: "Monica"
  },
  title: {
    type: String,
    default: "Mal servicio"
  },
  service: {
    type: String,
    default: "99 MINUTOS"
  },
  category: {
    type: String,
    default: "Paquetería y Correos"
  },
  content: {
    type: String,
    default: "Solicitamos una entrega con esta paqueteria y pedimos recolección, cuando esta quedo programada de un día para el siguiente resulto que al final querían pasar después de una semana por el paquete..."
  },
  image:{
    type: String,
    default: "https://images.pexels.com/photos/33984908/pexels-photo-33984908.jpeg"
  }
});


const images = ref([
      props.image
  ])
const show = () => {
    viewerApi({
     images: images.value
    })
  }
const iniciales = props.userName.slice(0, 2);
</script>
