<template>
  <!-- Main navbar container -->
  <header class="fixed top-0 left-0 right-0 h-20 flex flex-row justify-between items-center px-20 bg-[rgba(15,19,29,0.5)] backdrop-blur-[5px] z-50">
    
    <!-- Logo section -->
    <div class="flex items-center h-20">
      <img src="/images/logo.png" alt="Logo" class="w-48 h-16 object-cover object-center">
    </div>

    <!-- Navigation section -->
    <nav class="flex items-center gap-7 h-20">
      
      <!-- Dynamic Navigation Items -->
      <div 
        v-for="item in navigationItems" 
        :key="item.id"
        class="relative"
        @mouseenter="openDropdown(item.id)" 
        @mouseleave="closeDropdown(item.id)"
      >
        <!-- Navigation Item -->
        <div 
          class="flex flex-row items-center gap-1.5 h-6 cursor-pointer"
          @click="toggleDropdown(item.id)"
        >
          <span class="font-['Poppins'] font-normal text-base leading-6 text-[#FDFDFD] hover:text-[#FFBE38] transition-colors">
            {{ item.name }}
          </span>
          <div v-if="item.submenu" class="w-3.5 h-5 relative">
            <Icon 
              name="heroicons:chevron-down" 
              class="w-3.5 h-5 text-[#FDFDFD] transition-transform duration-200"
              :class="{ 'rotate-180': openDropdowns.includes(item.id) }"
            />                                                                                        
          </div>
        </div>

        <!-- Dropdown Submenu -->
        <div 
          v-if="item.submenu && openDropdowns.includes(item.id)"
          class="absolute top-full left-0 mt-2 w-48 bg-[rgba(15,19,29,0.95)] backdrop-blur-[10px] border border-[#2A2D3A] rounded-lg shadow-lg z-50"
        >
          <div class="py-2">
            <div 
              v-for="subItem in item.submenu" 
              :key="subItem.id"
              class="px-4 py-2 hover:bg-[#2A2D3A] transition-colors cursor-pointer"
              @click="handleSubmenuClick(subItem)"
            >
              <span class="font-['Poppins'] font-normal text-sm leading-5 text-[#FDFDFD] hover:text-[#FFBE38] transition-colors">
                {{ subItem.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Actions section -->
    <div class="flex items-center gap-5 h-20">
      
      <!-- Search Icon -->
      <div class="flex items-center justify-center w-10 h-10 cursor-pointer hover:bg-[#2A2D3A] rounded-lg transition-colors">
        <Icon name="heroicons:magnifying-glass" class="w-5 h-5 text-[#FDFDFD]" />
      </div>
      

      <!-- Sign Up button -->
      <button class="flex flex-row justify-center items-center px-9 py-2 gap-2.5 w-[134px] h-10 bg-[#FFBE38] shadow-[0.5px_1px_2px_rgba(0,0,0,0.25)] rounded-xl">
        <span class="font-['Poppins'] font-semibold text-base leading-6 text-[#1C1C1E]">Sign Up</span>
      </button>

      <!-- Sign In button -->
      <button class="flex flex-row justify-center items-center px-[34px] py-2 gap-2.5 w-[123px] h-10 bg-[#FDFDFD] shadow-[0.5px_1px_2px_rgba(0,0,0,0.25)] rounded-xl">
        <span class="font-['Poppins'] font-semibold text-base leading-6 text-[#1C1C1E]">Sign In</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
// Navigation data
const navigationItems = ref([
  {
    id: 'buy-crypto',
    name: 'Buy Crypto',
    submenu: null
  },
  {
    id: 'markets',
    name: 'Markets',
    submenu: null
  },
  {
    id: 'trade',
    name: 'Trade',
    submenu: [
      { id: 'tread-1', name: 'Tread 1' },
    ]
  },
  {
    id: 'futures',
    name: 'Futures',
    submenu: null
  },
  {
    id: 'earn',
    name: 'Earn',
    submenu: [
      { id: 'earn-1', name: 'Earn one' },
    ]
  },
  {
    id: 'more',
    name: 'More',
    submenu: [
      { id: 'more-1', name: 'More one' },

    ]
  }
])

// Reactive state for open dropdowns
const openDropdowns = ref<string[]>([])

// Methods
const toggleDropdown = (id: string) => {
  const index = openDropdowns.value.indexOf(id)
  if (index > -1) {
    openDropdowns.value.splice(index, 1)
  } else {
    openDropdowns.value.push(id)
  }
}

const openDropdown = (id: string) => {
  if (!openDropdowns.value.includes(id)) {
    openDropdowns.value.push(id)
  }
}

const closeDropdown = (id: string) => {
  const index = openDropdowns.value.indexOf(id)
  if (index > -1) {
    openDropdowns.value.splice(index, 1)
  }
}

const handleSubmenuClick = (subItem: any) => {
  console.log('Clicked submenu item:', subItem.name)
  // Here you can add navigation logic
  // For example: navigateTo(`/${subItem.id}`)
  
  // Close all dropdowns after selection
  openDropdowns.value = []
}

// Close dropdowns when clicking outside
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (!target.closest('nav')) {
      openDropdowns.value = []
    }
  })
})
</script>

<style scoped>
/* Add Poppins font if not already loaded */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
</style>
  