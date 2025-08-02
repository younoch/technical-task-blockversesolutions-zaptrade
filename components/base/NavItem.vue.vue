<template>
  <div :class="['flex items-center gap-1.5 h-6', customClass]">
    <span class="text-[#FDFDFD] font-normal text-sm leading-6">{{ label }}</span>
    <svg
      v-if="hasDropdown"
      class="w-[14px] h-[20px]"
      fill="none"
      viewBox="0 0 10 5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L5 4L9 1" stroke="#FDFDFD" stroke-width="1.65" />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  hasDropdown?: boolean
  class?: string
}>()

const customClass = props.class ?? ''
</script>
