<template>
  <li :class="item?.amount > 0 ? 'plus' : 'minus'">
    {{ item.text }}
    <span>$ {{ item.amount }}</span>
    <button class="delete-btn" @click="store.deleteTransaction(item.id)">x</button>
  </li>
</template>

<script setup>
import { useTransactionsStore } from '../stores/transactionsStore';

const store = useTransactionsStore();

const { item } = defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>
