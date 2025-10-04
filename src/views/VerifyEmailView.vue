<template>
  <MainLayout>
    <template #main>
      <AnimationLoader
        v-if="isLoading"
        class="flex fixed inset-0 z-40 justify-center items-center bg-black/50"
      />
      <div
        v-else
        class="flex flex-col justify-center items-center p-6 mx-auto space-y-6 min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50"
      >
        <!-- Card principal -->
        <div
          class="p-8 space-y-6 w-full max-w-md bg-white rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl"
        >
          <!-- Título con estilo moderno -->
          <h1
            class="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
          >
            Verificar {{ mode === 'verifyEmail' ? 'correo' : 'contraseña' }}
          </h1>

          <!-- Mensaje de éxito (con animación) -->
          <div
            v-if="isSuccessEmail"
            class="p-4 text-center text-green-700 bg-green-50 rounded-xl animate-fade-down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto mb-2 w-8 h-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p class="font-medium">
              ¡{{ mode === 'verifyEmail' ? 'Correo' : 'Contraseña' }} verificado con éxito!
            </p>
            <p class="mt-2 text-sm">Ahora puede iniciar sesión con su correo y contraseña.</p>
            <p>¡Bienvenido a misreclamos.com!</p>
            <RouterLink
              :to="{ name: 'login' }"
              class="inline-flex items-center px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg transition-colors duration-200 hover:bg-indigo-700"
            >
              Iniciar sesión</RouterLink
            >
          </div>

          <!-- Mensaje de error (con animación) -->
          <div
            v-if="isError || !isValidCode"
            class="p-4 text-center text-red-700 bg-red-50 rounded-xl animate-fade-up"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto mb-2 w-8 h-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p class="font-medium">
              Error al verificar el {{ mode === 'verifyEmail' ? 'correo' : 'contraseña' }}, código
              de error: {{ errorMessage }}
            </p>
            <p class="mt-2 text-sm">
              Por favor, verifique que los parámetros del enlace sean correctos.
            </p>
          </div>

          <section
            v-if="mode === 'resetPassword' && !isPasswordVerified"
            class="flex fixed inset-0 justify-center items-center px-4 bg-gradient-to-br from-rose-100 via-pink-50 to-white"
          >
            <div class="w-full max-w-md">
              <div class="p-8 bg-white rounded-2xl shadow-xl">
                <h2 class="mb-2 text-2xl font-bold text-center text-rose-600">
                  Actualizar contraseña
                </h2>
                <p class="mb-6 text-center text-gray-500">Por favor ingrese su nueva contraseña</p>

                <form class="space-y-4">
                  <div>
                    <label for="password" class="block mb-1 text-sm font-medium text-gray-700">
                      Nueva contraseña
                    </label>
                    <input
                      v-model="newPassword"
                      type="password"
                      id="password"
                      class="px-4 py-2 w-full rounded-xl border border-gray-300 transition focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="confirmPassword"
                      class="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Confirmar contraseña
                    </label>
                    <input
                      v-model="confirmNewPassword"
                      type="password"
                      id="confirmPassword"
                      class="px-4 py-2 w-full rounded-xl border border-gray-300 transition focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    @click.prevent="resetPassword"
                    class="py-2.5 w-full font-semibold text-white bg-rose-500 rounded-xl shadow-md transition transform hover:bg-rose-600 hover:-translate-y-0.5"
                  >
                    Guardar nueva contraseña
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  applyActionCode,
  confirmPasswordReset,
  getAuth,
  updatePassword,
  validatePassword,
  verifyPasswordResetCode,
} from 'firebase/auth'
import AnimationLoader from '@/animations/Loaders/LoaderA.vue'
import LoaderA from '@/animations/Loaders/LoaderA.vue'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
const notyf = new Notyf({
  position: {
    x: 'center',
    y: 'top',
  },
  duration: 5000,
  dismissible: true,
})
const isLoading = ref(false)
const route = useRoute()

const mode = route.query.mode
const oobCode = route.query.oobCode

const auth = getAuth()

const isSuccessEmail = ref(false)
const isSuccessPassword = ref(false)
const isPasswordVerified = ref(false)
const isError = ref(false)
const errorMessage = ref('')

const router = useRouter()
const validateEmail = async () => {
  if (mode !== 'verifyEmail') {
    isError.value = true
    errorMessage.value =
      'Invalid URL "Mode" parameter is not a valid value, does the URL have a valid "Mode" parameter?'
    throw new Error('URL has not a valid "Mode" parameter')
  }
  if (!oobCode) {
    isError.value = true
    errorMessage.value =
      'Invalid URL "OOB" parameter is not a valid value, does the URL have a valid "OOB" parameter?'
    throw new Error('URL has not a valid "OOB" parameter')
  }
  try {
    isLoading.value = true
    await applyActionCode(auth, oobCode as string)
    if (mode === 'verifyEmail') {
      isSuccessEmail.value = true
    }
    isLoading.value = false
  } catch (error) {
    const e = error as Error
    console.log(e)
    isError.value = true
    isLoading.value = false
    errorMessage.value = e.code
  }
}

const passswordRequirements = reactive({
  length: false,
  uppercase: false,
})
const newPassword = ref()
const confirmNewPassword = ref()
const isValidCode = ref(false)
const confirmPassword = async () => {
  try {
    const email = await verifyPasswordResetCode(auth, oobCode as string)
    isValidCode.value = true
    return true
  } catch (error) {
    const e = error as Error
    notyf.error(`El código de verificación no es válido: ${e.message}`)
    console.log(e)
    isError.value = true
    isLoading.value = false
    errorMessage.value = e.message
    isValidCode.value = false
    return false
  }
}
const resetPassword = async () => {
  if (!newPassword.value) {
    notyf.error('Por favor ingrese su nueva contraseña')
    return
  }
  if (newPassword.value.length < 8) {
    notyf.error('La contraseña debe tener al menos 8 caracteres')
    return
  }
  if (!/[A-Z]/.test(newPassword.value)) {
    notyf.error('La contraseña debe tener al menos una letra mayúscula')
    return
  }
  if (newPassword.value !== confirmNewPassword.value) {
    notyf.error('Las contraseñas no coinciden')
    return
  }
  if (!isValidCode.value) {
    notyf.error('El código de verificación no es válido')
    return
  }
  try {
    isLoading.value = true
    await confirmPasswordReset(auth, oobCode as string, newPassword.value)
    isSuccessPassword.value = true
    isPasswordVerified.value = true
    newPassword.value = ''
    confirmNewPassword.value = ''
    notyf.success('Contraseña actualizada correctamente, redirigiendo a iniciar sesión...')
    router.push('/login')
    isLoading.value = false
  } catch (error) {
    const e = error as Error
    notyf.error(`Error al actualizar la contraseña: ${e.message}`)
    console.log(e)
    isError.value = true
    isLoading.value = false
    isValidCode.value = false
    isPasswordVerified.value = false
    errorMessage.value = e.message
  }
}

onMounted(() => {
  if (!mode || !oobCode) {
    notyf.error('URL has not a valid "Mode" or "OOB" parameter')
    isError.value = true
    isLoading.value = false
    errorMessage.value = 'URL has not a valid "Mode" or "OOB" parameter'
    return
  }
  if (mode === 'verifyEmail') {
    validateEmail()
  } else if (mode === 'resetPassword') {
    confirmPassword()
  }
})
</script>

<style scoped></style>
