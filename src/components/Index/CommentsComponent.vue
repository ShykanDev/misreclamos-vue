<template>
  <section class="bg-">
  <div v-if="loading" class="flex flex-col justify-center items-center">
    <v-icon
      name="ri-loader-5-fill"
      class="mx-auto text-rose-600"
      animation="spin"
      scale="7.5"
      speed="fast"
    />
    <p class="text-center text-slate-800">Cargando comentarios...</p>
  </div>
  <div ref="containerComments" class="">
    <viewer :images="images"> </viewer>
    <CommentCard
      v-for="complaint in complaints"
      :key="complaint.id"
      @callReload="answerSent"
      @callViewer="showImageViewer"
      :category="complaint.category"
      :content="complaint.content"
      :image="complaint.image"
      :title="complaint.title"
      :userName="complaint.userName"
      :date="complaint.createdAt"
      :service="complaint.service"
      :answers="complaint.answers"
      :docId="complaint.id"
    />
    <div v-if="loading" class="flex flex-col justify-center items-center">
    <v-icon
      name="ri-loader-5-fill"
      class="mx-auto text-rose-600"
      animation="spin"
      scale="7.5"
      speed="fast"
    />
    <p class="text-center text-slate-800">Cargando comentarios...</p>
  </div>
    <button @click="getComments" class="flex justify-center items-center px-4 py-2.5 mb-32 w-full text-sm font-medium text-white bg-rose-600 rounded-lg shadow-sm transition-all duration-700 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-rose-500">Cargar más</button>
  </div>
</section>
</template>

<script lang="ts" setup>
import 'animate.css'
import CommentCard from '@/components/CommentCard.vue'
import { collection, getDocs, query, orderBy, limit, DocumentSnapshot, startAfter } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { nextTick, onMounted, ref, watch } from 'vue'
import type { IComplaint } from '@/Interfaces/IComplaint'

import 'notyf/notyf.min.css'
import { Notyf } from 'notyf'
import { api as viewerApi } from 'v-viewer'
import AnswerComment from '../AllCategories/AnswerComment.vue'

const notyf = new Notyf({
  duration: 5000,
  position: {
    x: 'right',
    y: 'top',
  },
  dismissible: true,
})

const imageSrc = ref('')

//Image viewer values
const images = ref([imageSrc.value])
const show = () => {
  viewerApi({
    images: images.value,
  })
}

//Update the imageSrc value based on emmit from CommentCard
const showImageViewer = (imgSrcParam: string): void => {
  try {
    imageSrc.value = imgSrcParam
    images.value = [imageSrc.value]
    show()
  } catch (error) {
    const e = error as Error
    notyf.error(e)
  }
}

//Firestore Database
const db = getFirestore()
const complaintsCollection = collection(db, 'complaints')

//Complaints
const complaints = ref<IComplaint[]>([])

//Loading state
const loading = ref(true)

const lastVisibleDoc = ref<DocumentSnapshot | null>(null);
const complaintsLimit = ref(20);

const scrollDown = async() => {
  if(containerComments.value){
        await nextTick();
        containerComments.value.scrollTop = containerComments.value.scrollHeight
      }
}

const getComments = () => {
  loading.value = true

  let q
  if (lastVisibleDoc.value) {
    // si ya hay un último documento, paginamos
    q = query(
      complaintsCollection,
      orderBy('createdAt', 'desc'),
      startAfter(lastVisibleDoc.value),
      limit(complaintsLimit.value)
    )
  } else {
    // primer carga
    q = query(
      complaintsCollection,
      orderBy('createdAt', 'desc'),
      limit(complaintsLimit.value)
    )
  }

  getDocs(q)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const complaint = doc.data() as IComplaint
        complaints.value.push({
          ...complaint,
          id: doc.id,
          answers:
            complaint.answers?.map((answer) => ({
              ...answer,
              id: answer.id,
            })) || [],
        })
      })

      // actualizar el último documento visible
      lastVisibleDoc.value =
        querySnapshot.docs[querySnapshot.docs.length - 1] || lastVisibleDoc.value
      console.log(`Container height: ${containerComments.value?.getBoundingClientRect().height}`)
      console.log(`Container scroll height: ${containerComments.value?.scrollHeight}`)
      scrollDown()
    })
    .catch((error) => {
      console.error(error)
      notyf.error('Error al cargar los comentarios')
    })
    .finally(() => {
      loading.value = false
    })
}


//Answer sent event handler when a new answer is sent (emmit from CommentCard)
const answerSent = () => {
  complaints.value = []
  getComments()
}

//Set last comment date
const setLastComment = (date: string) => complaints.value.sort((a, b) => b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime())[0].createdAt.toDate().toLocaleDateString('es-ES', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
})

const containerComments = ref<HTMLElement>()

watch(complaints, async () => {
  await nextTick();
  if (containerComments.value) {
    containerComments.value.scrollTop = containerComments.value.scrollHeight;
  }
});


//On mounted get comments
onMounted(() => {

  getComments()


})
</script>

<style scoped></style>
