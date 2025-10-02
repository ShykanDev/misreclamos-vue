<template>
  <div class="overflow-hidden m-4 mx-auto bg-white rounded-xl border-b-4 border-l-4 border-rose-800 shadow-md md:max-w-7xl">
    <div class="p-6 bg-white rounded-xl shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-md">
  <!-- Header -->
  <div class="flex justify-between items-center mb-3">
    <div class="flex gap-1 items-center">
      <v-icon name="hi-calendar" class="text-gray-400" scale="0.9" />
      <time :datetime="date.toDate().toISOString()" class="text-xs font-medium text-gray-400">
        {{ convertDate(date) }}
      </time>
    </div>
    <div class="flex gap-1 items-center">
      <v-icon name="hi-user" class="text-gray-800" scale="0.9" />
      <span class="text-sm font-semibold text-gray-800">{{ userName }}</span>
    </div>
  </div>

  <!-- Service Tag -->
  <div class="mb-4">
    <div class="inline-flex gap-2 items-center">
      <v-icon name="hi-office-building" class="text-gray-500" scale="0.9" />
      <span class="text-sm font-medium text-gray-500">Empresa/Servicio:</span>
      <span class="inline-block px-3 py-1 text-sm font-semibold text-rose-600 bg-rose-50 rounded-full">
        {{ service }}
      </span>
    </div>
  </div>

  <!-- User Avatar & Title -->
  <div class="flex gap-3 items-center mb-4">
    <div class="flex flex-shrink-0 justify-center items-center w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full">
      <span class="font-medium text-gray-600">{{ iniciales }}</span>
    </div>
    <div class="flex gap-1 items-center">
      <v-icon name="hi-document-text" class="text-gray-800" scale="0.9" />
      <h2 class="text-lg font-bold text-rose-600">{{ title }}</h2>
    </div>
  </div>

  <!-- Category -->
  <div class="mb-3">
    <div class="inline-flex gap-1 items-center">
      <v-icon name="hi-tag" class="text-rose-600" scale="0.9" />
      <span class="inline-block px-2 py-1 text-xs font-medium text-rose-600 bg-rose-50 rounded">Categoría:
        {{ category }}
      </span>
    </div>
  </div>

  <!-- Content -->
  <div class="mb-5 max-w-none text-gray-700 prose prose-sm">
    <p>{{ content }}</p>
  </div>

  <!-- Image (if exists) -->
  <div v-if="image" class="overflow-hidden mb-5 rounded-lg">
    <img
      @click="show"
      :src="image"
      alt="Contenido visual relacionado"
      class="w-md h-auto object-cover transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
    />
  </div>

<!-- Answers -->
<div v-if="answers.length > 0" class="overflow-y-scroll p-1 mt-6 h-96 rounded-2xl bg-rose-50/50">
  <h3 class="mb-4 text-xl font-bold text-rose-700">{{ answers.length }} respuestas</h3>
  <div
    v-for="answer in answers as IAnswer[]"
    :key="answer.userNameTo"
    class="p-4 mb-5 bg-rose-50 rounded-xl border-l-4 border-rose-400 shadow-sm transition-shadow duration-200 hover:shadow-md"
  >
    <div class="flex gap-2 items-center mb-2">
      <v-icon name="hi-user" class="text-rose-600" scale="1" />
      <span class="text-sm font-medium text-rose-800">{{ answer.userNameFrom }}</span>
      <span class="text-sm font-base text-slate-600">{{answer.date.toDate().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }) }}</span>
    </div>
    <p class="leading-relaxed text-gray-800">{{ answer.answer }}</p>
  </div>
</div>


  <!-- Action Button -->
  <div class="hidden pt-4 border-t border-gray-100">
    <button
      @click="answerComment"
      class="flex gap-2 justify-center items-center px-4 py-2.5 w-full text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-rose-700 rounded-lg shadow-sm transition-colors hover:from-rose-700 hover:to-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
    >

      Responder Comentario
    </button>
  </div>
</div>
  <AnswerComment @callReload="callParentReload" :from-name="userName" :doc-id="docId"/>
  </div>
</template>

<script setup lang="ts">
import { Timestamp } from 'firebase/firestore';
import { api as viewerApi } from 'v-viewer'
import { ref, watch } from 'vue';
import AnswerComment from './AllCategories/AnswerComment.vue';
import type { IAnswer } from '@/Interfaces/IComplaint';


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
  },
  docId:{
    type: String,
    default: ""
  },
  answers:{
    type: Array,
    default: () => []
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
const iniciales = props.userName.slice(0, 1);


const answerComment = () => {
  alert('Function still under development, not available yet');
}


const emmits = defineEmits(['reload', 'callReload']);
const callParentReload = () => {
  emmits('callReload');
  emmits('callReload');
}

</script>
