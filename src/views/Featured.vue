<script setup>
import { products } from '../data/products'

function getImageUrl(fileName) {
  return new URL(`../assets/products/${fileName}`, import.meta.url).href
}


</script>


<template>
  <div class="max-w-screen">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
        <div 
        v-for=" item in products"
        :key="item.id"
        class="card bg-base-100 w-96 shadow-sm">
          <figure 
            class="aspect-[1/1] w-full overflow-hidden rounded"
          >
            <img
              :src="getImageUrl(item.image)"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{item.name}}</h2>
            <p>{{ item.description}}</p>
            <p>${{ item.price}}元</p>
            <div class="card-actions justify-end">
              <button class="btn bg-black text-white border-none hover:bg-amber-600">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div> 
</template>