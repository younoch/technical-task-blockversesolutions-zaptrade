<template>
  <!-- Main navbar container -->
  <header class="fixed top-0 left-0 right-0 h-16 sm:h-20 flex flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 bg-[rgba(15,19,29,0.5)] backdrop-blur-[5px] z-50">
    
    <!-- Logo section -->
    <div class="flex items-center h-16 sm:h-20">
      <img src="/images/logo.png" alt="Logo" class="w-32 sm:w-40 md:w-48 h-12 sm:h-14 md:h-16 object-cover object-center">
    </div>

    <!-- Mobile Menu Button -->
    <div class="flex items-center sm:hidden">
      <button 
        @click="toggleMobileMenu"
        class="flex items-center justify-center w-10 h-10 cursor-pointer hover:bg-[#2A2D3A] rounded-lg transition-colors"
      >
        <Icon 
          :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
          class="w-6 h-6 text-[#FDFDFD]" 
        />
      </button>
    </div>

    <!-- Desktop Navigation section -->
    <nav class="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-7 h-16 sm:h-20">
      
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
          <span class="font-['Poppins'] font-normal text-sm md:text-base leading-6 text-[#FDFDFD] hover:text-[#FFBE38] transition-colors">
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
          class="absolute top-full left-0 mt-2 w-40 md:w-48 bg-[rgba(15,19,29,0.95)] backdrop-blur-[10px] border border-[#2A2D3A] rounded-lg shadow-lg z-50"
        >
          <div class="py-2">
            <div 
              v-for="subItem in item.submenu" 
              :key="subItem.id"
              class="px-3 md:px-4 py-2 hover:bg-[#2A2D3A] transition-colors cursor-pointer"
              @click="handleSubmenuClick(subItem)"
            >
              <span class="font-['Poppins'] font-normal text-xs md:text-sm leading-5 text-[#FDFDFD] hover:text-[#FFBE38] transition-colors">
                {{ subItem.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Desktop Actions section -->
    <div class="hidden sm:flex items-center gap-3 md:gap-4 lg:gap-5 h-16 sm:h-20">
      
      <!-- Search Icon -->
      <div class="flex items-center justify-center w-8 md:w-10 h-8 md:h-10 cursor-pointer hover:bg-[#2A2D3A] rounded-lg transition-colors">
        <Icon name="heroicons:magnifying-glass" class="w-4 md:w-5 h-4 md:h-5 text-[#FDFDFD]" />
      </div>
      

      <!-- Sign Up button -->
      <button class="flex flex-row justify-center items-center px-4 md:px-6 lg:px-9 py-2 gap-2 md:gap-2.5 w-20 md:w-28 lg:w-[134px] h-8 md:h-10 bg-[#FFBE38] shadow-[0.5px_1px_2px_rgba(0,0,0,0.25)] rounded-xl">
        <span class="font-['Poppins'] font-semibold text-xs md:text-sm lg:text-base leading-6 text-[#1C1C1E]">Sign Up</span>
      </button>

      <!-- Sign In button -->
      <button class="flex flex-row justify-center items-center px-3 md:px-6 lg:px-[34px] py-2 gap-2 md:gap-2.5 w-18 md:w-24 lg:w-[123px] h-8 md:h-10 bg-[#FDFDFD] shadow-[0.5px_1px_2px_rgba(0,0,0,0.25)] rounded-xl">
        <span class="font-['Poppins'] font-semibold text-xs md:text-sm lg:text-base leading-6 text-[#1C1C1E]">Sign In</span>
      </button>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <div 
    v-if="isMobileMenuOpen" 
    class="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
    @click="closeMobileMenu"
  ></div>

  <!-- Mobile Menu -->
  <div 
    v-if="isMobileMenuOpen"
    class="fixed top-16 left-0 right-0 bg-[rgba(15,19,29,0.95)] backdrop-blur-[10px] border-b border-[#2A2D3A] z-50 sm:hidden"
  >
    <div class="px-4 flex flex-col justify-between pb-2 h-[calc(100vh-4rem)]">
      <!-- Mobile Navigation -->
      <nav class="flex flex-col gap-2 sm:gap-4">
        <div 
          v-for="item in navigationItems" 
          :key="item.id"
          class="relative"
        >
          <!-- Mobile Navigation Item -->
          <div 
            class="flex flex-row items-center justify-between py-2 cursor-pointer"
            @click="toggleMobileDropdown(item.id)"
          >
            <span class="font-['Poppins'] font-normal text-base leading-6 text-[#FDFDFD]">
              {{ item.name }}
            </span>
            <div v-if="item.submenu" class="w-5 h-5 relative">
              <Icon 
                name="heroicons:chevron-down" 
                class="w-5 h-5 text-[#FDFDFD] transition-transform duration-200"
                :class="{ 'rotate-180': openMobileDropdowns.includes(item.id) }"
              />
            </div>
          </div>

          <!-- Mobile Dropdown Submenu -->
          <div 
            v-if="item.submenu && openMobileDropdowns.includes(item.id)"
            class="pl-6 py-3"
          >
            <div 
              v-for="subItem in item.submenu" 
              :key="subItem.id"
              class="py-3 px-6 hover:bg-[#2A2D3A] rounded-lg transition-colors cursor-pointer"
              @click="handleMobileSubmenuClick(subItem)"
            >
              <span class="font-['Poppins'] font-normal text-sm leading-5 text-[#FDFDFD] hover:text-[#FFBE38] transition-colors">
                {{ subItem.name }}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <!-- Mobile Actions -->
      <div class="flex flex-col">
        <!-- Search -->
        <div class="flex items-center gap-3 py-1 cursor-pointer hover:bg-[#2A2D3A] rounded-lg transition-colors px-3">
          <Icon name="heroicons:magnifying-glass" class="w-5 h-5 text-[#FDFDFD]" />
          <span class="font-['Poppins'] font-normal text-base leading-6 text-[#FDFDFD]">Search</span>
        </div>

        <!-- Auth Buttons Container -->
        <div class="flex gap-3 mt-4">
          <!-- Sign Up button -->
          <button class="flex-1 flex flex-row justify-center items-center py-2 px-4 bg-[#FFBE38] shadow-[0.5px_1px_2px_rgba(0,0,0,0.25)] rounded-xl">
            <span class="font-['Poppins'] font-semibold text-sm leading-6 text-[#1C1C1E]">Sign Up</span>
          </button>

          <!-- Sign In button -->
          <button class="flex-1 flex flex-row justify-center items-center py-2 px-4 bg-[#FDFDFD] shadow-[0.5px_1px_2px_rgba(0,0,0,0.25)] rounded-xl">
            <span class="font-['Poppins'] font-semibold text-sm leading-6 text-[#1C1C1E]">Sign In</span>
          </button>
        </div>
      </div>
    </div>
  </div>
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
const openMobileDropdowns = ref<string[]>([])
const isMobileMenuOpen = ref(false)

// Methods
const toggleDropdown = (id: string) => {
  const index = openDropdowns.value.indexOf(id)
  if (index > -1) {
    openDropdowns.value.splice(index, 1)
  } else {
    openDropdowns.value.push(id)
  }
}

const toggleMobileDropdown = (id: string) => {
  const index = openMobileDropdowns.value.indexOf(id)
  if (index > -1) {
    openMobileDropdowns.value.splice(index, 1)
  } else {
    openMobileDropdowns.value.push(id)
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  openMobileDropdowns.value = []
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

const handleMobileSubmenuClick = (subItem: any) => {
  console.log('Clicked mobile submenu item:', subItem.name)
  // Here you can add navigation logic
  // For example: navigateTo(`/${subItem.id}`)
  
  // Close mobile menu and dropdowns after selection
  isMobileMenuOpen.value = false
  openMobileDropdowns.value = []
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
  