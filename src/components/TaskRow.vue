<template>
  <div class="flex items-center justify-between bg-white rounded shadow-sm px-4 py-3">
    <div class="flex items-center gap-4">
      <div :class="`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`">
        <i :class="`fa-solid ${icon} text-gray-700`"></i>
      </div>
      <div>
        <p class="font-medium text-gray-800">{{ title }}</p>
        <span :class="`text-xs ${statusColor}`">{{ status }}</span>
      </div>
    </div>
    <div class="flex items-center gap-4 text-sm text-gray-600">
      <span>{{ time }}</span>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  status: String,
  time: String,
  statusColor: String,
  iconBg: String
})
</script>
