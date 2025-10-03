<template>
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
  <div v-else>
    <viewer :images="images">
    </viewer>
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





  </div>
</template>

<script lang="ts" setup>
import 'animate.css'
import CommentCard from '@/components/CommentCard.vue'
import { collection, getDocs, query, orderBy, limit, DocumentSnapshot } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import type { IComplaint } from '@/Interfaces/IComplaint'

import 'notyf/notyf.min.css'
import { Notyf } from 'notyf'
import { api as viewerApi } from 'v-viewer'

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
const showImageViewer = (imgSrcParam:string):void => {
  try {
    imageSrc.value = imgSrcParam;
    images.value = [imageSrc.value]
    show();
  } catch (error) {
    const e = error as Error;
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

//Last visible document
const lastVisibleDoc = ref<DocumentSnapshot | null>(null)

//Get comments
const getComments = () => {
  const qGetComplaints = query(complaintsCollection, orderBy('createdAt', 'desc'), limit(10))
  getDocs(qGetComplaints)
    .then((querySnapshot) => {
      loading.value = true
      querySnapshot.forEach((doc) => {
        const complaint = doc.data() as IComplaint
        complaints.value.push({
          ...complaint,
          id: doc.id,
        })
      })
      lastVisibleDoc.value = querySnapshot.docs[querySnapshot.docs.length - 1]
      loading.value = false
    })
    .catch((error) => {
      console.log(error)
      notyf.error('Error al cargar los comentarios')
      loading.value = false
    })
}

//Answer sent event handler when a new answer is sent (emmit from CommentCard)
const answerSent = () => {
  complaints.value = []
  getComments()
}

//On mounted get comments
onMounted(() => {
  getComments()
})
</script>

<style scoped></style>
