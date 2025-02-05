import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cardsStore', () => {
  const cards = ref([])

  const getCards = async () => {
    try {
      const res = await fetch('../../src/api/cards.json')
      const data = await res.json()
      cards.value = data
    } catch (err) {
      console.log(err)
    }
  }

  return {
    cards,
    getCards,
  }
})
