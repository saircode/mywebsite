<script setup lang="ts">
const categories = ['Todos', 'Web Apps', 'Mobile', 'Dashboards', 'Corporativo']
const activeCategory = ref('Todos')

const projects = [
  {
    id: 1,
    title: 'TraderSync',
    description: 'Dashboard de trading con análisis de datos en tiempo real, métricas de rendimiento y visualizaciones avanzadas.',
    image: '/images/projects/tradersync.png',
    category: 'Dashboards',
    technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    featured: true
  },
  {
    id: 2,
    title: 'La Ribera - Plataforma Educativa',
    description: 'Plataforma educativa completa con gestión de cursos, eventos y sistema administrativo integrado.',
    image: '/images/projects/la-ribera.png',
    category: 'Web Apps',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    featured: true
  },
  {
    id: 3,
    title: 'Petfolio',
    description: 'Aplicación móvil para el seguimiento de vacunas, citas veterinarias y agenda de mascotas.',
    image: '/images/projects/petfolio.png',
    category: 'Mobile',
    technologies: ['Vue.js', 'Capacitor', 'Firebase'],
    featured: true
  },
  {
    id: 4,
    title: 'Odontograma Digital',
    description: 'Sistema de gestión odontológica con odontograma interactivo y registro de historial clínico.',
    image: '/images/projects/odontograma.png',
    category: 'Web Apps',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    featured: false
  },
  {
    id: 5,
    title: 'Sistema POS',
    description: 'Punto de venta con gestión de inventario, ventas, clientes y reportes en tiempo real.',
    image: '/images/projects/pos.png',
    category: 'Web Apps',
    technologies: ['Vue.js', 'PHP', 'MySQL'],
    featured: false
  },
  {
    id: 6,
    title: 'Megatic',
    description: 'Sitio web corporativo para empresa de infraestructura TIC con diseño profesional y responsive.',
    image: '/images/projects/megatic.png',
    category: 'Corporativo',
    technologies: ['WordPress', 'PHP', 'MySQL'],
    featured: false
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Todos') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <div class="py-20">
    <!-- Header -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div class="text-center">
        <h1 class="section-title mb-4">Portafolio</h1>
        <p class="section-subtitle max-w-2xl mx-auto">
          Una selección de proyectos en los que he trabajado, desde dashboards complejos hasta aplicaciones móviles.
        </p>
      </div>
    </section>

    <!-- Filter -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
            activeCategory === category
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300"
        >
          <!-- Image -->
          <div class="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div v-if="project.featured" class="absolute top-3 left-3">
              <span class="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                Destacado
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                {{ project.category }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="text-gray-500 dark:text-gray-400">No hay proyectos en esta categoría.</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div class="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-800 dark:to-primary-900 rounded-2xl p-8 md:p-12 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          ¿Te gustaría ver más detalles?
        </h2>
        <p class="text-primary-100 mb-6 max-w-xl mx-auto">
          Contáctame para discutir sobre estos proyectos o cómo puedo ayudarte con el tuyo.
        </p>
        <NuxtLink to="/contacto" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-colors">
          Contactar
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
