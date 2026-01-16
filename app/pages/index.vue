<script setup lang="ts">
const technologies = [
  { name: 'Vue.js', icon: '💚' },
  { name: 'Nuxt', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Laravel', icon: '🔴' },
  { name: 'AWS', icon: '☁️' },
  { name: 'GCP', icon: '🌐' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'TypeScript', icon: '💙' },
]

const stats = [
  { number: '6+', label: 'Años de experiencia' },
  { number: '20+', label: 'Proyectos completados' },
  { number: '3', label: 'Países trabajados' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-primary-950"></div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40 dark:opacity-20"></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hola, soy <span class="text-primary-600 dark:text-primary-400">Sair Sánchez</span>
            </h1>

            <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-medium">
              Desarrollador Web
            </p>

            <p class="text-lg text-gray-500 dark:text-gray-500 max-w-xl mb-8">
              +6 años transformando ideas en soluciones digitales escalables.
              Especializado en Vue.js, Python, Laravel y arquitecturas cloud.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10">
              <NuxtLink to="/portafolio" class="btn-primary">
                Ver Portafolio
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/contacto" class="btn-secondary">
                Contactar
              </NuxtLink>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
                <div class="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">{{ stat.number }}</div>
                <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-500">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Profile Image -->
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative">
              <div class="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/img/brand/20250830_092534.jpg"
                  alt="Sair Sánchez - Desarrollador Web"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Decorative ring -->
              <div class="absolute inset-0 rounded-full border-2 border-primary-400/30 dark:border-primary-500/30 scale-110"></div>
            </div>
          </div>
        </div>

        <!-- Technologies -->
        <div class="mt-16 flex flex-wrap items-center justify-center gap-4">
          <span
            v-for="tech in technologies"
            :key="tech.name"
            class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
          >
            <span>{{ tech.icon }}</span>
            {{ tech.name }}
          </span>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Brief About Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-title mb-6">
              Construyendo el futuro digital
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Soy un desarrollador apasionado por crear soluciones tecnológicas que impactan positivamente en los negocios.
              He trabajado con equipos remotos en Canadá, Colombia y otros países, desarrollando aplicaciones web
              para sectores como fintech, salud, educación e inmobiliario.
            </p>
            <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Mi enfoque está en escribir código limpio, escalable y mantenible, siempre pensando en la experiencia del usuario final.
            </p>
            <NuxtLink to="/cv" class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline">
              Ver mi experiencia completa
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div class="text-3xl mb-3">🎯</div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Vue.js, Nuxt, TypeScript, Tailwind CSS</p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div class="text-3xl mb-3">⚙️</div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Python, PHP, Laravel, Node.js</p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div class="text-3xl mb-3">☁️</div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Cloud</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">AWS, GCP, Docker, CI/CD</p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div class="text-3xl mb-3">🗄️</div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Bases de datos</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">MySQL, PostgreSQL, SQL Server</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary-600 dark:bg-primary-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Tienes un proyecto en mente?
        </h2>
        <p class="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
          Estoy disponible para proyectos freelance, colaboraciones y oportunidades de trabajo remoto.
        </p>
        <NuxtLink to="/contacto" class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-colors">
          Hablemos
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
