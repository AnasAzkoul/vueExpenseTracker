<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <TransactionItem
      v-for="item in transactions"
      :id="item.id"
      :item="item"
    />
  </ul>
</template>

<script setup>
import TransactionItem from './TransactionItem.vue';
import {useDestructureStore} from '../composables/useDestructureStore'; 

const {transactions} = useDestructureStore(); 
</script>