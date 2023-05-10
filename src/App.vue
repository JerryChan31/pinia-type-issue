<script setup lang="ts">
import { Chip } from './class/robot';
import { useRobotStore } from './store/ robot';

const robotStore = useRobotStore()

const useSayChipModel = (chip: Chip) => {
  const say = () => {
    console.log(chip.model)
  }
  return {
    say
  }
}

useSayChipModel(robotStore.currentRobot.chip)


</script>

<template>
  <div>
    123
  </div>
</template>

<style scoped>

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
