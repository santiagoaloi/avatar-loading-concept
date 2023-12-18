<template>
  <VAppBar class="px-5" color="appbar-background" height="80" title="Application Boilerplate">
    <VAvatar class="rounded-lg">
      <VProgressCircular v-if="isLoading" color="grey-lighten-4" indeterminate />
      <VImg v-else :src="user?.avatar" cover> </VImg>
    </VAvatar>
  </VAppBar>
</template>

<script setup>
const appStore = useAppStore()
const { user, isLoading } = toRefs(appStore)

onMounted(() => {
  appStore.getUser()
})
</script>
