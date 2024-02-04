<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <TransactionItem
      v-for="item in list"
      :id="item.id"
      :item="item"
      @delete="handleEmmit"
    />
  </ul>
</template>

<script setup>
import TransactionItem from './TransactionItem.vue';

const {list} = defineProps({
  list: {
    type: Array,
    required: true
  },
});

const emit = defineEmits(['delete']);

const handleEmmit = (payload) => {
  emit('delete', payload);
}

</script>