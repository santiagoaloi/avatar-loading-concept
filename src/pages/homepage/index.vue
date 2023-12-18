<template>
  <VContainer>
    <VAlert color="indigo"> User loading: {{ isLoading }} </VAlert>
  </VContainer>
</template>

<script setup>
const appStore = useAppStore()
const { isLoading } = toRefs(appStore)
</script>
