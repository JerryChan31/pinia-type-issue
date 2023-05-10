import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Robot } from '../class/robot'

export const useRobotStore = defineStore('robot', () => {
  const currentRobot = ref(new Robot())
  return {
    currentRobot
  }
})