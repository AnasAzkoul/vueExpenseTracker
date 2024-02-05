<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <TransactionItem
      v-for="item in store.transactions"
      :id="item.id"
      :item="item"
    />
  </ul>
</template>

<script setup>
import TransactionItem from './TransactionItem.vue';
import {useTransactionsStore} from '../stores/transactionsStore'; 

const store = useTransactionsStore(); 

</script>