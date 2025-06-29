import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () =>{
  const cart = ref([])

  function addToCart(product) {
    const existingItem = cart.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  function removeShopCart(productId) {
    cart.value = cart.value.filter(item => item.id !== productId)
  }

  function clearCart() {
    cart.value = []
  }

  const totalCount = computed(() =>
    cart.value.reduce((total, item) => total + item.quantity, 0)
  )

  return {
    cart,
    addToCart,
    removeShopCart,
    clearCart,
    totalCount
  }

})

