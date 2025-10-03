<template>
  <!-- Answer Comment section -->
  <div
    v-if="showAnswerComment"
    class="p-6 mt-6 rounded-xl border border-rose-100 shadow-sm"
    :class="{ 'bg-blue-50': isCompany, 'bg-rose-50': !isCompany }"
  >
    <h3 class="mb-4 text-xl font-bold text-rose-700">Responder Comentario</h3>
    <form @submit.prevent>
      <div class="mb-5">
        <label for="answer" class="block mb-2 text-sm font-medium text-rose-800"
          >Respondiendo a {{ props.answeringToName }} <span v-if="isCompany" class="animate-fade-right">en representacion de la empresa/servicio </span></label
        >
        <textarea
          id="answer"
          v-model="answer"
          rows="4"
          class="px-5 py-3 w-full placeholder-rose-400 bg-white rounded-lg border-2 border-rose-200 shadow-sm transition-all outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
          placeholder="Escriba aquí su respuesta..."
        ></textarea>
        <div>
          <p class="text-sm font-medium text-rose-800">¿Es usted la empresa que responde?</p>
          <small v-show="!isCompany">Marque la casilla si es una respuesta oficial</small>
          <div class="flex gap-2 items-center cursor-pointer select-none" @click="setIsCompany(!isCompany)">
            <CheckboxComponent @callSetIsCompany="setIsCompany" @click="setIsCompany(!isCompany)" :checked="isCompany" />
            <p v-if="isCompany" class="text-xs text-blue-800 animate-fade-right">Su comentario será marcado en representación de la empresa</p>
          </div>
        </div>
      </div>
      <button
        @click="answerComment"
        type="submit"
        class="px-6 py-3 w-full font-bold text-white bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg shadow-lg transition-all transform hover:shadow-xl hover:-translate-y-0.5 focus:ring-4 focus:ring-rose-200"
      >
        Enviar respuesta a {{ props.answeringToName }}
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { IAnswer } from '@/Interfaces/IComplaint'
import { getAuth } from 'firebase/auth'
import {
  getFirestore,
  Timestamp,
  doc,
  arrayUnion,
  updateDoc,
} from 'firebase/firestore'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css' // For React, Vue and Svelte
import { ref } from 'vue'
import Checkbox from './CheckboxComponent.vue'
import CheckboxComponent from './CheckboxComponent.vue'
const emit = defineEmits(['callReload'])
const notyf = new Notyf({
  position: {
    x: 'center',
    y: 'top',
  },
  duration: 5000,
  dismissible: true,
})
const showAnswerComment = ref(true)
const answer = ref('')

const isCompany = ref(false)

const setIsCompany = (value: boolean) => {
  isCompany.value = value
}
const props = defineProps({
  answeringToName: {
    type: String,
    default: 'Usuario',
  },
  answeringToUid: {
    type: String,
    default: 'Usuario',
  },
  docId: {
    type: String,
    default: '',
  },
})

const auth = getAuth()
const db = getFirestore()


const getAnswerData = ():IAnswer =>({
        uidTo: props.answeringToUid,
        answer: answer.value,
        date: Timestamp.now(),
        uidFrom: auth.currentUser?.uid ||'Not given',
        answeringToName: props.answeringToName,
        answeringFromName: auth.currentUser?.displayName || 'Not given',
        isCompany: isCompany.value,
      })
const answerComment = async () => {
  if (!auth.currentUser) {
    notyf.error('Debe iniciar sesión para responder')
    return
  }
    const docRef = doc(db, `complaints/${props.docId}`)
    updateDoc(docRef, { answers: arrayUnion(getAnswerData()) })
    .then((ok) => {
      notyf.success('Se ha enviado su respuesta')
      answer.value = '' // limpiar el input
      emit('callReload')
    }).catch((error) => {
      console.error('Error al enviar la respuesta', error)
      notyf.error(`Error al enviar la respuesta: ${error.message}`)
    })
}
</script>

<style scoped></style>
