<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
onMounted(() => {
  if (!sessionStorage.getItem('saircode_loaded')) {
    sessionStorage.setItem('saircode_loaded', 'true')
    window.location.reload()
  }
})
</script>
