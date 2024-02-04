<template>
  <li :class="amountClass">
    {{item.text}}
    <span>$ {{item.amount}}</span>
    <button
      class="delete-btn"
      @click="handleClickEvent(item.id)"
    >
      x
    </button>
  </li>
</template>

<script setup>
import {computed, defineEmits} from 'vue';

const emit = defineEmits(['delete'])

const {item} = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const amountClass = computed(() => {
  if(item.amount> 0) {
    return "plus"
  } else {
    return "minus"
  }
})

const handleClickEvent = (id) => {
  emit('delete', id);
}

</script>