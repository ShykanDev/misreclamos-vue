<template>
  <div
    class="overflow-hidden m-4 mx-auto bg-white rounded-xl border border-b-4 border-l-4 border-rose-600 shadow-md transition-all duration-200 ease-out hover:border-rose-400 md:max-w-7xl">
    <div class="p-6 rounded-xl transition-shadow duration-200 ease-in-out bg-slate-50 hover:shadow-md">
      <!-- Category -->
      <div class="mb-3">
        <div class="inline-flex gap-1 items-center">
          <v-icon name="hi-tag" class="text-rose-600" scale="0.9" />
          <span class="inline-block px-2 py-1 text-xs font-medium text-rose-600 bg-rose-50 rounded">Categoría:
            {{ category }}
          </span>
        </div>
      </div>

      <div class="mb-4">
        <div class="inline-flex gap-2 items-center">
          <v-icon name="hi-office-building" class="text-gray-500" scale="0.9" />
          <span class="text-sm font-medium text-gray-500">Empresa/Servicio:</span>
          <span class="inline-block px-2 py-0.5 text-sm font-semibold rounded-full bg-slate-100 text-slate-600">
            {{ service }}
          </span>
        </div>
      </div>
      <!-- Header -->
      <div class="flex gap-2 items-center mb-3">
        <div class="flex gap-1 items-center">
          <v-icon name="hi-user" class="text-gray-800" scale="0.9" />
          <span translate="no" class="text-sm font-semibold text-gray-800">{{ userName }}</span>
        </div>
        <div class="flex gap-1 items-center">
          <v-icon name="hi-calendar" class="text-gray-400" scale="0.9" />
          <span :datetime="date.toDate().toISOString()" class="text-xs font-medium text-gray-400">
            {{ convertDate(date) }}
          </span>
        </div>
      </div>

      <!-- User Avatar & Title -->
      <div class="flex gap-3 items-center mb-4">
        <div class="flex gap-1 items-center">
          <v-icon name="hi-document-text" class="text-gray-800" scale="0.9" />
          <h2 class="px-2 py-1 text-lg font-semibold rounded-full bg-slate-100 text-slate-600">
            ❝{{ title }}❞
          </h2>
        </div>
      </div>

      <!-- Content -->
      <div class="mb-5 max-w-none text-gray-700 prose prose-sm">
        <p>{{ content }}</p>
      </div>

      <!-- Image (if exists) -->
      <div v-if="image" class="overflow-hidden mb-5 rounded-lg">
        <img @click="emmitShowImage(image)" :src="image" alt="Contenido visual relacionado"
          class="w-md h-auto object-cover transition-transform duration-200 hover:scale-[1.02] cursor-pointer" />
      </div>

      <!-- Answers -->
      <div v-if="answers.length > 0" class="flex overflow-y-scroll flex-col p-2 max-h-96 rounded-2xl bg-blue-50/50">

        <div v-for="answer in answers as IAnswer[]" :key="answer.uidTo"
          class="relative p-5 mb-4 bg-white rounded-md border-l-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
          :class="{
            'bg-blue-50/50 border-blue-200': answer.uidFrom == answer.uidTo,
            'bg-rose-50 border-slate-300': answer.uidFrom !== answer.uidTo && !answer.isCompany,
            'bg-green-50 border-green-200': answer.isCompany,
          }">
          <div class="flex gap-2 items-center mb-2">
            <p v-if="answer.uidFrom === answer.uidTo"
              class="flex absolute top-1 right-2 gap-1 items-center text-xs font-semibold text-blue-500">
              Autor <v-icon name="ri-shield-user-fill" scale="0.9" />
            </p>
            <span v-if="answer.uidFrom"
              class="flex justify-center items-center w-6 h-6 text-xs font-semibold text-white rounded-full" :class="{
                'bg-blue-900': answer.uidFrom == answer.uidTo,
                'bg-slate-400': answer.uidFrom !== answer.uidTo && !answer.isCompany,
                'bg-green-900 border-orange-400': answer.isCompany,
              }">{{ answer.answeringFromName.slice(0, 1) }}</span>
            <span class="text-sm font-medium">{{ answer.answeringFromName }}</span>
            <span v-if="answer.isCompany" class="absolute top-0 right-16 text-xs text-green-800 font-base">Representante
              de la empresa/servicio <v-icon name="la-user-tie-solid" scale="1.1" /></span>
            <span class="text-sm font-base text-slate-600">{{
              answer.date.toDate().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
              })
            }}</span>
          </div>
          <p class="leading-relaxed text-gray-800">{{ answer.answer }}</p>
          <div v-if="answer.image" @click="emmitShowImage(answer.image)" class="overflow-hidden relative mt-2 rounded-3xl shadow-sm select-none max-w-52 max-h-sm">
            <article
              class="flex absolute inset-0 flex-col justify-center items-center bg-black opacity-0 transition-all duration-300 cursor-pointer hover:opacity-60">
              <v-icon name="fa-eye" scale="1.5" class="text-white"/>
              <p class="text-sm text-white select-none">Ver imagen</p>
            </article>
            <img @click="emmitShowImage(answer.image)" :src="answer.image" alt="user image"
              class="object-cover w-full h-full transition-transform duration-300 cursor-pointer hover:scale-110" />
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="pt-4 border-t border-gray-100">
        <button @click="answerComment"
          class="flex gap-2 justify-center items-center px-4 py-2.5 w-full text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-rose-700 rounded-lg shadow-sm transition-colors hover:from-rose-700 hover:to-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
          Responder Comentario
        </button>
      </div>
    </div>
    <AnswerComment v-if="showReplyCard" @callReload="callParentReload" @callClose="toggleReplyCard" :from-name="userName" :doc-id="docId" :answering-to-name="userName"
      :answering-to-uid="userUid" />
  </div>
</template>

<script setup lang="ts">
import { Timestamp } from 'firebase/firestore'
import AnswerComment from './AllCategories/AnswerComment.vue'
import type { IAnswer } from '@/Interfaces/IComplaint'
import { ref } from 'vue'

//Convert date from props to legible date
const convertDate = (dateParam: Timestamp) => {
  return dateParam.toDate().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  })
}

//Props
const props = defineProps({
  date: {
    type: Object as () => Timestamp,
    default: () => { },
  },
  userName: {
    type: String,
    default: 'Monica',
  },
  title: {
    type: String,
    default: 'Mal servicio',
  },
  service: {
    type: String,
    default: '99 MINUTOS',
  },
  category: {
    type: String,
    default: 'Paquetería y Correos',
  },
  content: {
    type: String,
    default:
      'Solicitamos una entrega con esta paqueteria y pedimos recolección, cuando esta quedo programada de un día para el siguiente resulto que al final querían pasar después de una semana por el paquete...',
  },
  image: {
    type: String,
    default: 'https://images.pexels.com/photos/33984908/pexels-photo-33984908.jpeg',
  },
  docId: {
    type: String,
    default: '',
  },
  answers: {
    type: Array,
    default: () => [],
  },
  userUid: {
    type: String,
  },
})

//Toggle the view of the comment
const answerComment = () => {
  toggleReplyCard()
}

//emmits
const emmits = defineEmits(['reload', 'callReload', 'callViewer'])

//once a comment is sent this function will be called
const callParentReload = () => emmits('callReload')

//once user clicks  on an image this function set the values and show the image
const emmitShowImage = (image: string): void => emmits('callViewer', image)

//show reply comment card
const showReplyCard = ref(false);

const toggleReplyCard = () => showReplyCard.value = !showReplyCard.value;
</script>
