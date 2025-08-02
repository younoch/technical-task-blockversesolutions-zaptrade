<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <!-- Most Trending Tokens Section -->
    <div class="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
      <div class="w-full max-w-2xl flex flex-col gap-3 sm:gap-4 lg:gap-5">
        <h2 class="w-full font-poppins font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl leading-tight text-[#FFBE38]">
          Most Trending Tokens
        </h2>
        <p class="w-full font-poppins font-normal text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg leading-relaxed text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </p>
      </div>
      <div class="flex flex-col justify-end">
        <button class="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-[rgba(180,180,180,0.1)] border border-[#B4B4B4] shadow-lg rounded-xl flex items-center justify-center sm:justify-end gap-2 hover:bg-[rgba(180,180,180,0.2)] transition-colors">
          <span class="font-poppins font-semibold text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-[#B4B4B4]">Market Overview</span>
          <Icon name="heroicons:arrow-long-right" class="w-3 h-3 md:w-4 md:h-4 text-[#B4B4B4]" />
        </button>
      </div>
    </div>

      <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

      <!-- Hot Derivatives Section -->
      <div class="w-full mx-auto bg-[#1E2329] shadow-lg rounded-lg p-4 sm:p-6">
        <!-- Section Header -->
        <div class="flex flex-col justify-center items-start gap-2 mb-4 sm:mb-6">
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <h3 class="font-poppins font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-lg leading-tight text-[#FDFDFD]">
              Hot Derivatives
            </h3>
            <h3 class="font-poppins font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg leading-tight text-gray-600">
              Hot Coins
            </h3>
          </div>
          <div class="w-32 h-0 border border-[#FFBE38]"></div>
        </div>
  
  
        <!-- Table Headers -->
        <div class="grid grid-cols-5 gap-2 sm:gap-4 mb-3 sm:mb-4 opacity-60 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
          <div class="flex items-center">
            <span class="font-poppins font-normal text-[#E0E0E0]">Trading Pairs</span>
          </div>
          <div class="flex items-center justify-end">
            <span class="font-poppins font-normal text-[#E0E0E0]">Last Traded Price</span>
          </div>
          <div class="flex items-center justify-end">
            <span class="font-poppins font-normal text-[#E0E0E0]">24H Change</span>
          </div>
          <div class="flex items-center justify-center">
            <span class="font-poppins font-normal text-[#E0E0E0]">Charts</span>
          </div>
          <div class="flex items-center justify-center">
            <span class="font-poppins font-normal text-[#E0E0E0]">Trade</span>
          </div>
        </div>
  
        <!-- Trading Rows -->
        <div v-for="(item, index) in hotDerivatives" :key="item.id" 
             :class="`grid grid-cols-5 gap-2 sm:gap-4 items-center py-2 sm:py-3 px-2 sm:px-4 rounded-lg ${index === 0 ? 'bg-gradient-to-r from-[rgba(205,232,254,0.05)] to-[rgba(205,232,254,0)] shadow-[inset_0px_0px_2.2px_rgba(205,232,254,0.25)]' : ''}`">
          <div class="flex items-center gap-1 sm:gap-2">
            <img :src="item.icon" :alt="item.symbol" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span class="font-poppins font-medium text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-[#FDFDFD]">{{ item.symbol }}</span>
          </div>
          <div class="flex justify-end">
            <span class="font-poppins font-medium text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-white">{{ item.price }}</span>
          </div>
          <div class="flex justify-end">
            <span :class="`font-poppins font-normal text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm ${item.changeType === 'positive' ? 'text-[#3CCF91]' : 'text-[#FF4D4F]'}`">{{ item.change }}</span>
          </div>
          <div class="flex justify-center">
            <img :src="item.changeType === 'positive' ? '/svgs/graph.svg' : '/svgs/graph-negative.svg'" 
                 :alt="item.changeType === 'positive' ? 'Positive Chart' : 'Negative Chart'" 
                 class="w-6 h-3 sm:w-8 sm:h-4 md:w-12 md:h-5" />
          </div>
          <div class="flex justify-center">
            <button :class="`px-2 sm:px-3 py-1 rounded text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-poppins ${index === 0 ? 'bg-[#FFBE38] text-[#1C1C1E] font-medium' : 'bg-[rgba(247,166,0,0.1)] border border-[#FFBE38] text-[#FFBE38] font-normal'}`">
              Trade
            </button>
          </div>
        </div>
      </div>
      <div>
        <!-- Top Gainers Section -->
        <div class="w-full mx-auto bg-[#1E2329] shadow-lg rounded-lg p-4 sm:p-6">
          <!-- Section Header -->
          <div class="flex flex-col justify-center items-start gap-2 mb-4 sm:mb-6">
            <h3 class="font-poppins font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-lg leading-tight text-[#FDFDFD]">
              Top Gainers
            </h3>
          </div>
    
          <!-- Trading Rows for Top Gainers -->
          <div v-for="item in topGainers" :key="item.id" 
               class="grid grid-cols-4 gap-2 sm:gap-4 items-center py-2 sm:py-3 px-2 sm:px-4 rounded-lg">
            <div class="flex items-center gap-1 sm:gap-2">
              <img :src="item.icon" :alt="item.symbol" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span class="font-poppins font-medium text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-[#FDFDFD]">{{ item.symbol }}</span>
            </div>
            <div class="flex justify-end">
              <span class="font-poppins font-medium text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-white">{{ item.price }}</span>
            </div>
            <div class="flex justify-end">
              <span :class="`font-poppins font-normal text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm ${item.changeType === 'positive' ? 'text-[#3CCF91]' : 'text-[#FF4D4F]'}`">{{ item.change }}</span>
            </div>
            <div class="flex justify-center">
              <img :src="item.changeType === 'positive' ? '/svgs/graph.svg' : '/svgs/graph-negative.svg'" 
                   :alt="item.changeType === 'positive' ? 'Positive Chart' : 'Negative Chart'" 
                   class="w-6 h-3 sm:w-8 sm:h-4 md:w-12 md:h-5" />
            </div>
          </div>
    
          <!-- New Listings Section -->
          <div class="flex flex-col justify-center items-start gap-2 mb-4 sm:mb-6 mt-6 sm:mt-8">
            <h3 class="font-poppins font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-lg leading-tight text-[#FDFDFD]">
              New Listings
            </h3>
          </div>
    
          <!-- New Listings Rows -->
          <div v-for="item in newListings" :key="item.id" 
               class="grid grid-cols-4 gap-2 sm:gap-4 items-center py-2 sm:py-3 px-2 sm:px-4 rounded-lg">
            <div class="flex items-center gap-1 sm:gap-2">
              <img :src="item.icon" :alt="item.symbol" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span class="font-poppins font-medium text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-[#FDFDFD]">{{ item.symbol }}</span>
            </div>
            <div class="flex justify-end">
              <span class="font-poppins font-medium text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-white">{{ item.price }}</span>
            </div>
            <div class="flex justify-end">
              <span :class="`font-poppins font-normal text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm ${item.changeType === 'positive' ? 'text-[#3CCF91]' : 'text-[#FF4D4F]'}`">{{ item.change }}</span>
            </div>
            <div class="flex justify-center">
              <img :src="item.changeType === 'positive' ? '/svgs/graph.svg' : '/svgs/graph-negative.svg'" 
                   :alt="item.changeType === 'positive' ? 'Positive Chart' : 'Negative Chart'" 
                   class="w-6 h-3 sm:w-8 sm:h-4 md:w-12 md:h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const hotDerivatives = reactive([
  {
    id: 1,
    symbol: 'BTCUSDT',
    price: '103,800.1',
    change: '+0.32%',
    changeType: 'positive',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 2,
    symbol: 'ETHUSDT',
    price: '2,483',
    change: '-0.32%',
    changeType: 'negative',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 3,
    symbol: 'USDTUSDT',
    price: '151.07',
    change: '-0.32%',
    changeType: 'negative',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 4,
    symbol: 'BUSDUSDT',
    price: '0.5544',
    change: '-0.32%',
    changeType: 'negative',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 5,
    symbol: 'XRPUSDT',
    price: '2.12435',
    change: '-0.32%',
    changeType: 'negative',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 6,
    symbol: 'SHIBUSDT',
    price: '0.011296',
    change: '+0.32%',
    changeType: 'positive',
    icon: '/images/bitcoin-(btc).png'
  }
])

// Top Gainers data
const topGainers = reactive([
  {
    id: 1,
    symbol: 'BTCUSDT',
    price: '103,800.1',
    change: '-0.32%',
    changeType: 'negative',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 2,
    symbol: 'ETHUSDT',
    price: '103,800.1',
    change: '-0.32%',
    changeType: 'negative',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 3,
    symbol: 'BTCUSDT',
    price: '103,800.1',
    change: '+0.32%',
    changeType: 'positive',
    icon: '/images/bitcoin-(btc).png'
  }
])

// New Listings data
const newListings = reactive([
  {
    id: 1,
    symbol: 'LTCUSDT',
    price: '103,800.1',
    change: '+0.32%',
    changeType: 'positive',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 2,
    symbol: 'BTCUSDT',
    price: '103,800.1',
    change: '+0.32%',
    changeType: 'positive',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 3,
    symbol: 'BTCUSDT',
    price: '103,800.1',
    change: '+0.32%',
    changeType: 'positive',
    icon: '/images/bitcoin-(btc).png'
  },
  {
    id: 4,
    symbol: 'BTCUSDT',
    price: '103,800.1',
    change: '+0.32%',
    changeType: 'positive',
    icon: '/images/bitcoin-(btc).png'
  }
])
</script>

<style scoped>
/* Custom styles if needed */
</style>