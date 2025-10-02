<template>
  <!-- Answer Comment section -->
  <div v-if="showAnswerComment" class="p-6 mt-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-100 shadow-sm">
  <h3 class="mb-4 text-xl font-bold text-rose-700">Responder Comentario</h3>
  <form @submit.prevent>
    <div class="mb-5">
      <label for="answer" class="block mb-2 text-sm font-medium text-rose-800">Tu respuesta</label>
      <textarea
        id="answer"
        v-model="answer"
        rows="4"
        class="px-5 py-3 w-full placeholder-rose-400 bg-white rounded-lg border-2 border-rose-200 shadow-sm transition-all outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
        placeholder="Escribe aquí tu respuesta..."
      ></textarea>
    </div>
    <button
      @click="answerComment"
      type="submit"
      class="px-6 py-3 w-full font-bold text-white bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg shadow-lg transition-all transform hover:shadow-xl hover:-translate-y-0.5 focus:ring-4 focus:ring-rose-200"
    >
      Enviar respuesta a {{ props.fromName.split(' ').slice(0, 1).join('') }}
    </button>
  </form>
</div>

</template>

<script lang="ts" setup>
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getFirestore, Timestamp, doc, setDoc, arrayUnion, getDoc, updateDoc } from 'firebase/firestore';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'// For React, Vue and Svelte
import { ref } from 'vue';
const emit = defineEmits(['callReload']);
const notyf = new Notyf({
  position: {
    x: 'center',
    y: 'top'
  },
  duration: 5000,
  dismissible: true,
})
const showAnswerComment = ref(true);
const answer = ref('');

const props = defineProps({
  fromName: {
    type: String,
    default: "Usuario"
  },
  docId: {
    type: String,
    default: ""
  }
})

const auth = getAuth();
const db = getFirestore()


const answerComment = async () => {
  try {
    const docRef = doc(db, `complaints/${props.docId}`);
    await updateDoc(docRef, {
      answers: arrayUnion({
        userNameTo: props.fromName,
        answer: answer.value,
        date: Timestamp.now(),
        userNameFrom: auth.currentUser?.displayName,
      }),
    });

    console.log('Respuesta enviada correctamente');
    notyf.success(`Respuesta enviada correctamente a ${props.fromName.split(' ')[0]}`);
   // showAnswerComment.value = false;
    answer.value = ''; // limpiar el input
    emit('callReload');
  } catch (error) {
    console.error('Error al enviar la respuesta', error);
    notyf.error(`Error al enviar la respuesta: ${error.message}`);
  }
};

</script>

<style scoped>

</style>
