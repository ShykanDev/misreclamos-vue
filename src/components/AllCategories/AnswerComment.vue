<template>
  <!-- Answer Comment section -->
  <div
    v-if="showAnswerComment"
    class="p-6 mt-6 rounded-xl border shadow-sm border-slate-100 text-slate-500"
    :class="{ 'bg-blue-50': isCompany, 'bg-slate-50': !isCompany }"
  >
    <h3 class="flex gap-2 items-center mb-4 text-xl font-bold">
      <v-icon name="bi-reply-all-fill" scale="1.2" />Responder Comentario
    </h3>
    <form @submit.prevent>
      <div class="mb-5">
        <label for="answer" class="block mb-2 text-sm font-medium"
          >Respondiendo a {{ props.answeringToName }}
          <span v-if="isCompany" class="animate-fade-right"
            >en representacion de la empresa/servicio
          </span></label
        >

        <textarea
          id="answer"
          v-model="answer"
          rows="4"
          class="px-5 py-3 w-full bg-white rounded-lg border-2 shadow-sm transition-all outline-none placeholder-slate-800 border-slate-200 focus:ring-2 focus:ring-slate-300 focus:border-slate-300"
          placeholder="Escriba aquí su respuesta..."
        ></textarea>
        <label
        v-show="!imageSelected"
          class="inline-flex gap-2 items-center px-3 py-2 my-2 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
        >
          <svg
            aria-hidden="true"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
          >
            <path
              stroke-width="2"
              stroke="#ffffff"
              d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="#ffffff"
              d="M17 15V18M17 21V18M17 18H14M17 18H20"
            ></path>
          </svg>
          Agregar imagen
          <input type="file" class="hidden" accept="image/*" @change="handleFileInputChange" />
        </label>
        <img
          v-if="imageSelected"
          :src="imageSelected"
          :key="imageSelected"
          class="rounded-3xl border-2 border-dashed animate-bounce animate-once w-xs border-slate-500"
          alt="Imagen seleccionada"
        />
        <div>
          <button
            v-if="imageSelected"
            @click="removeImage"
            type="button"
            class="px-4 py-2 mt-2 text-sm font-medium text-white bg-rose-600 rounded-lg transition-colors cursor-pointer w-sm hover:bg-rose-700"
          >
            Quitar imagen
          </button>
        </div>
        <div>
          <p class="text-sm font-medium">¿Es usted la empresa que responde?</p>
          <div
            class="flex gap-2 items-center mt-2.5 cursor-pointer select-none"
            @click="setIsCompany(!isCompany)"
          >
            <CheckboxComponent
              @callSetIsCompany="setIsCompany"
              @click="setIsCompany(!isCompany)"
              :checked="isCompany"
            />
            <small v-show="!isCompany"
              >Marque la casilla si es usted la empresa/servicio que responde</small
            >
            <p v-if="isCompany" class="text-xs text-blue-800 animate-fade-right">
              Su comentario será marcado en representación de la empresa
            </p>
          </div>
        </div>
      </div>
      <small class="mt-9 text-xs text-slate-400"
        >ⓘ Los comentarios publicados son responsabilidad exclusiva de quien los emite. Nos
        reservamos el derecho de moderar, eliminar o reportar aquellos que infrinjan nuestras
        políticas o leyes aplicables.</small
      >
      <div class="flex justify-center">
        <DotLottieVue
          v-if="showLottie"
          style="height: 100px; width: 100px"
          autoplay
          src="https://lottie.host/75d6cb4b-837d-4961-8023-98bd5af4c24e/hysY57apaT.lottie"
        />
        <DotLottieVue
          v-if="showLottieError && !showLottie"
          style="height: 100px; width: 100px"
          autoplay
          loop
          src="https://lottie.host/89bd3582-e658-4f35-b821-103912eec036/hKwlxD5lVu.lottie"
        />
      </div>
      <button
        v-if="!showLottie"
        :disabled="isLoading"
        :class="{
          'bg-rose-600': isLoading,
          'bg-gradient-to-r to-cyan-600': !isLoading,
        }"
        @click="answerComment"
        type="submit"
        class="px-6 py-3 mt-5 w-full font-bold text-white bg-gradient-to-r to-cyan-600 rounded-lg shadow-lg transition-all transform from-slate-500 hover:shadow-xl hover:-translate-y-0.5 focus:ring-4 focus:ring-slate-200"
      >
        Enviar respuesta a {{ props.answeringToName }}
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { IAnswer } from '@/Interfaces/IComplaint'
import { getAuth } from 'firebase/auth'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { getFirestore, Timestamp, doc, arrayUnion, updateDoc } from 'firebase/firestore'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css' // For React, Vue and Svelte
import { ref } from 'vue'
import Checkbox from './CheckboxComponent.vue'
import imageCompression from 'browser-image-compression'
import CheckboxComponent from './CheckboxComponent.vue'

//emmits
const emit = defineEmits(['callReload'])

//ui notifications
const notyf = new Notyf({
  position: {
    x: 'center',
    y: 'top',
  },
  duration: 5000,
  dismissible: true,
})

//images values
const imageSelected = ref()
const imgFileInput = ref<HTMLInputElement | null>(null)
const imageFileValue = ref()
const handleFileInputChange = (e: Event) => { //handle image selection
  if (e.target) {
    console.log(e.target.files[0])
    imageSelected.value = URL.createObjectURL(e.target.files[0])
    imageFileValue.value = e.target.files[0]
  }
}
const removeImage = () => { //remove image selection
  imageSelected.value = ''
}
function toBase64(file: File) { //convert file to base64
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
const compressedImageBase64 = ref()

const compressImage = async () => { //compress image and convert to base64
  if (!imageFileValue.value) {
    notyf.error('No se seleccionó una imagen')
    return false
  }

  const imageFile = imageFileValue.value
  console.log('originalFile instanceof Blob', imageFile instanceof Blob) // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`)

  const options = {
    maxSizeMB: 0.9,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }

  isLoading.value = true
  try {
    const compressedFile = await imageCompression(imageFile, options)
    console.log('compressedFile instanceof Blob', compressedFile instanceof Blob)
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`)
    compressedImageBase64.value = await toBase64(compressedFile)
    console.log('compressedImageBase64', compressedImageBase64.value)
    return true
  } catch (error: any) {
    console.log(error.message)
    return false
  } finally {
    isLoading.value = false

  }
}

//answers values
const showAnswerComment = ref(true)
const answer = ref('')

//Value that indicates if the answer is from a company based on checkbox click to set the answer as company
const isCompany = ref(false)

//function to set isCompany value
const setIsCompany = (value: boolean) => isCompany.value = value;

//props
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

//firebase
const auth = getAuth()
const db = getFirestore()

//function to get answer data from props and answer value
// 🔹 Devuelve la data del comentario
const getAnswerData = (imageBase64 = ''): IAnswer => ({
  uidTo: props.answeringToUid,
  answer: answer.value,
  date: Timestamp.now(),
  uidFrom: auth.currentUser?.uid || 'Not given',
  answeringToName: props.answeringToName,
  answeringFromName: auth.currentUser?.displayName || 'Not given',
  isCompany: isCompany.value,
  image: imageBase64, // ✅ Se asigna base64 si existe
})


//loading states
const isLoading = ref(false)
const showLottie = ref(false)
const showLottieError = ref(false)

//function to answer comment and include image if selected
const answerComment = async () => {
  if (!auth.currentUser) {
    notyf.error('Debe iniciar sesión para responder')
    return
  }

  if (!answer.value) {
    notyf.error('Debe escribir una respuesta')
    return
  }

  isLoading.value = true
  if (imageSelected.value) {
    const compressedImage = await compressImage()
    if (!compressedImage) {
      notyf.error('Error al comprimir la imagen')
      return
    }
    getAnswerData(compressedImageBase64.value).image = compressedImageBase64.value;
  }
  const docRef = doc(db, `complaints/${props.docId}`)
  updateDoc(docRef, { answers: arrayUnion(getAnswerData(compressedImageBase64.value)) })
    .then(() => {
      showLottie.value = true
      notyf.success('Se ha enviado su respuesta')
      answer.value = '' // limpiar el input
      isLoading.value = false
      setTimeout(() => {
        emit('callReload')
      }, 2300)
    })
    .catch((error) => {
      console.error('Error al enviar la respuesta', error)
      notyf.error(`Error al enviar la respuesta: ${error.message}`)
      showLottieError.value = true
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<style scoped>
/* From Uiverse.io by SpatexDEV */
.custom-file-upload {
  border: none;
  display: flex;
  padding: 0.75rem 1.5rem;
  background-color: #b3b4b6;
  color: #ffffff;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  user-select: none;
  gap: 0.75rem;
  box-shadow:
    0 4px 6px -1px #488aec31,
    0 2px 4px -1px #488aec17;
  transition: all 0.6s ease;
}

.custom-file-upload:hover {
  box-shadow:
    0 10px 15px -3px #488aec4f,
    0 4px 6px -2px #488aec17;
}

.custom-file-upload:focus,
.custom-file-upload:active {
  opacity: 0.85;
  box-shadow: none;
}

.custom-file-upload svg {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
