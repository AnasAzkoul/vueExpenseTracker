<template>
  <li :class="item?.amount > 0? 'plus' : 'minus'">
    {{item.text}}
    <span>$ {{item.amount}}</span>
    <button
      class="delete-btn"
      @click="handleClickEvent"
    >
      x
    </button>
  </li>
</template>

<script setup>
const emit = defineEmits(['delete'])

const {item} = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const handleClickEvent = () => {
  emit('delete', item?.id);
}

</script>