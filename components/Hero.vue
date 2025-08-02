<template>
  <section class="relative w-full min-h-screen overflow-hidden flex flex-col justify-center">
    <!-- Background Video with Overlay -->
    <div class="absolute inset-0 w-full h-full">
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="w-full h-full object-cover"
      >
        <source src="/video/b-herosections v1.mp4" type="video/mp4">
      </video>
      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#181A20] opacity-25"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(15,19,29,0.3)]"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-20 lg:pt-24">
      <div class="flex flex-col lg:flex-row items-start justify-between w-full">
        
        <!-- Left Side Content -->
        <div class="flex-1 max-w-2xl lg:mr-16">
          <!-- Main Heading -->
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#FFBE38] leading-tight mb-4 sm:mb-6 lg:mb-8 font-['Poppins']">
            Build Wealth with Crypto
          </h1>
          
          <!-- Subtitle -->
          <p class="text-sm sm:text-base lg:text-lg text-[#E0E0E0] leading-relaxed mb-12 sm:mb-16 lg:mb-20 font-['Poppins'] max-w-xl lg:max-w-2xl">
            Join the growing community on Zaptrade — the trusted destination for effortless crypto investing and trading.
          </p>
          
          <!-- Email Input and Google Sign Up Section -->
          <div class="flex flex-col md:flex-row items-center gap-4 max-w-lg xl:max-w-2xl">
            <!-- Email Input with Button Inside -->
            <div class="flex-1 relative w-full">
              <div class="relative">
                <input 
                  type="email" 
                  placeholder="Email/Phone number"
                  class="w-full h-12 md:h-14 pl-4 md:pl-6 pr-24 md:pr-28 py-3 md:py-4 bg-[#1E2329] border border-[#4A4A4A] rounded-lg text-[#E0E0E0] placeholder-[rgba(224,224,224,0.4)] font-['Poppins'] text-sm focus:outline-none focus:border-[#FFBE38] transition-colors shadow-inner"
                />
                <button class="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 md:h-10 px-3 md:px-4 bg-[#FFBE38] text-[#1C1C1E] font-semibold rounded-md shadow-lg hover:bg-[#E6A825] transition-colors font-['Poppins'] whitespace-nowrap text-xs md:text-sm">
                  Sign Up
                </button>
              </div>
            </div>

            <!-- Divider -->
            <div class="flex items-center gap-4">
              <span class="text-[rgba(224,224,224,0.4)] font-['Poppins'] text-sm md:text-base">or</span>
                              <button class="flex items-center justify-center gap-3 h-12 md:h-14 px-4 md:px-6 bg-[#1E2329] border border-[#4A4A4A] rounded-lg text-[#E0E0E0] font-['Poppins'] text-sm hover:bg-[#2A2D3A] transition-colors shadow-inner">
                  <img src="/svgs/google-logo.svg" alt="Google" class="w-6 h-6 md:w-8 md:h-8">
                  <img src="/svgs/apple-logo.svg" alt="Apple" class="w-8 h-8 md:w-10 md:h-10">
                </button>
              </div>
          </div>
        </div>

        <!-- Right Side - Floating Coin Cards -->
        <div class="hidden lg:block flex-1 relative">
          <!-- Hero Top Light Effect -->
          <div class="absolute top-0 left-0 w-60 h-full">
            <!-- Ellipse 3884 -->
            <div class="absolute w-48 h-36 left-0 -top-28 bg-[#F68726] rounded-full blur-[180px] opacity-30 transform rotate-[26deg]"></div>
            <!-- Ellipse 3885 -->
            <div class="absolute w-8 h-28 left-40 -top-44 bg-[#F68726] rounded-full blur-[17px] opacity-30 transform rotate-[26deg]"></div>
          </div>

          <!-- Floating Coin Cards -->
          <div class="absolute inset-0 ">
            <!-- Large Coin Card (Bitcoin) - Position: 1217dp left, 245dp top -->
            <div class="absolute top-16 left-8 lg:top-20 lg:left-12 xl:top-16 xl:left-8 w-48 h-36 lg:w-56 lg:h-40 xl:w-56 xl:h-40 bg-[rgba(205,205,205,0.05)] border border-[#4A4A4A] rounded-lg backdrop-blur-sm shadow-lg">
              <div class="p-4 flex flex-col justify-between h-full">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex gap-2">
                        <div class="w-10 h-10 bg-[#31353F] rounded-lg flex items-center justify-center">
                          <img src="/images/bitcoin-(btc).png" alt="BTC" class="w-3/5 h-3/5 object-contain" />
                        </div>
                        <div>
                          <p class="text-white text-base font-bold">Bitcoin</p>
                          <p class="text-gray-500 text-xs">BTC</p>
                        </div>
                    </div>
                    <img src="/svgs/arrow-up.svg" > 
                       
                </div>
                <div>
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-3">
                      <div class="text-white font-semibold text-lg">$52,291</div>
                      <div class="text-[#1ECB4F] text-sm">+0.25%</div>
                    </div>
                    <div class="flex items-center justify-center">
                      <img src="/svgs/graph.svg" alt="Graph" class="w-28 h-21">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Medium Coin Card (Litecoin) - Position: 1603dp left, 10dp top -->
            <div class="absolute top-2 right-16 lg:top-4 lg:right-20 xl:top-2 xl:right-28 w-40 h-28 lg:w-48 lg:h-32 xl:w-48 xl:h-32 bg-[rgba(205,205,205,0.05)] border border-[#4A4A4A] rounded-lg backdrop-blur-sm shadow-lg">
              <div class="p-3 flex flex-col justify-between h-full">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex gap-2">
                    <div class="w-7 h-7 bg-[#31353F] rounded-lg flex items-center justify-center">
                      <img src="/images/litecoin(ltc).png" alt="LTC" class="w-3/5 h-3/5 object-contain" />
                    </div>
                    <div>
                      <p class="text-white text-sm font-bold">Litecoin</p>
                      <p class="text-gray-500 text-xs">LTC</p>
                    </div>
                  </div>
                  <img src="/svgs/arrow-up.svg" alt="Up" class="w-4 h-4">
                </div>
                <div>
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-1">
                      <div class="text-white font-semibold text-sm">$8,291</div>
                      <div class="text-[#1ECB4F] text-xs">+0.25%</div>
                    </div>
                    <div class="flex items-center justify-center">
                      <img src="/svgs/graph.svg" alt="Graph" class="w-14 h-10.5">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Small Coin Card - Position: 1756dp left, 324dp top -->
            <div class="absolute top-80 left-36 lg:top-72 lg:left-24 xl:top-80 xl:left-36 w-36 h-26 lg:w-44 lg:h-30 xl:w-44 xl:h-30 bg-[rgba(205,205,205,0.05)] border border-[#4A4A4A] rounded-lg backdrop-blur-sm shadow-lg">
              <div class="p-2 flex flex-col justify-between h-full">
                <div class="flex items-center justify-between mb-1">
                  <div class="flex gap-1">
                    <div class="w-5 h-5 bg-[#31353F] rounded-lg flex items-center justify-center">
                      <img src="/images/ethereum-(eth).png" alt="ETH" class="w-3/5 h-3/5 object-contain" />
                    </div>
                    <div>
                      <p class="text-white text-sm font-bold">Ethereum</p>
                      <p class="text-gray-500 text-xs">ETH</p>
                    </div>
                  </div>
                  <img src="/svgs/arrow-up.svg" alt="Up" class="w-3 h-3">
                </div>
                <div>
                  <div class="flex justify-between">
                    <div class="flex flex-col gap-1">
                      <div class="text-white font-semibold text-xs">$123.45</div>
                      <div class="text-[#1ECB4F] text-xs">+0.25%</div>
                    </div>
                    <img src="/svgs/graph.svg" alt="Graph" class="w-11 h-7">
                  </div>
                </div>
              </div>
            </div>

            <!-- Small Litecoin Card - Position: 1756dp left, 324dp top -->
            <div class="absolute top-44 right-2 lg:top-40 lg:right-4 xl:top-44 xl:right-2 w-28 h-20 lg:w-32 lg:h-22 xl:w-32 xl:h-22 bg-[rgba(205,205,205,0.05)] border border-[#4A4A4A] rounded-lg backdrop-blur-sm shadow-lg">
              <div class="p-2 flex flex-col justify-between h-full">
                <div class="flex items-center justify-between mb-1">
                  <div class="flex gap-1">
                    <div class="w-5 h-5 bg-[#31353F] rounded-lg flex items-center justify-center">
                      <img src="/images/litecoin(ltc).png" alt="LTC" class="w-3/5 h-3/5 object-contain" />
                    </div>
                    <div>
                      <p class="text-white text-sm font-bold">Litecoin</p>
                      <p class="text-gray-500 text-xs">LTC</p>
                    </div>
                  </div>
                  <img src="/svgs/arrow-up.svg" alt="Up" class="w-3 h-3">
                </div>
                <div>
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-1">
                      <div class="text-white font-semibold text-xs">$6,291</div>
                      <div class="text-[#1ECB4F] text-xs">+0.25%</div>
                    </div>
                    <div class="flex items-center justify-center">
                      <img src="/svgs/graph.svg" alt="Graph" class="w-11 h-7">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Extra Small Litecoin Card - Position: 1725dp left, 533dp top -->
            <div class="absolute top-96 right-12 lg:top-88 lg:right-8 xl:top-96 xl:right-12 w-20 h-14 lg:w-24 lg:h-16 xl:w-24 xl:h-16 bg-[rgba(205,205,205,0.05)] border border-[#4A4A4A] rounded-lg backdrop-blur-sm shadow-lg">
              <div class="p-2 flex flex-col justify-between h-full">
                <div class="flex items-center justify-between mb-1">
                  <div class="flex gap-1">
                    <div class="w-4 h-4 bg-[#31353F] rounded-lg flex items-center justify-center">
                      <img src="/images/litecoin(ltc).png" alt="LTC" class="w-3/5 h-3/5 object-contain" />
                    </div>
                    <div>
                      <p class="text-white text-sm font-bold">LTC</p>
                    </div>
                  </div>
                  <img src="/svgs/arrow-up.svg" alt="Up" class="w-2 h-2">
                </div>
                <div>
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-1">
                      <div class="text-white font-semibold text-xs">$4,291</div>
                      <div class="text-[#1ECB4F] text-xs">+0.25%</div>
                    </div>
                    <div class="flex items-center justify-center">
                      <img src="/svgs/graph.svg" alt="Graph" class="w-7 h-5">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative Blur Element - Position: 1610dp left, 224dp top -->
            <div class="absolute top-12 right-6 w-16 h-8 bg-[#CC371C08] rounded-full blur-md"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No special script needed for now
</script>

<style scoped>
/* Add Poppins font if not already loaded */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
</style> 