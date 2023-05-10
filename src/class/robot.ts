import { ref, Ref } from "vue"

export class Chip {
  model: Ref<string> = ref('amd')
}

export class Robot {
  name: string = 'ET'
  chip: Chip = new Chip()
}