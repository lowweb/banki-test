import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cardsStore', () => {
  const cards = ref([])
  const activeCard = ref({})

  const getCards = async () => {
    try {
      const res = await fetch('../../src/api/cards.json')
      const data = await res.json()
      cards.value = data
    } catch (err) {
      console.log(err)
    }
  }

  const setActiveCard = (value) => {
    console.log(cards.value.find((item) => item.id === value))
    activeCard.value = cards.value.find((item) => item.id === value)
  }

  return {
    cards,
    getCards,
    setActiveCard,
    activeCard,
  }
})
