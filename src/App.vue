<template>
  <TheHeader />
  <div class="container">
    <TheBalance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<script setup>
// components 
import TheHeader from './components/TheHeader.vue';
import TheBalance from '@/components/TheBalance.vue';
import IncomeExpenses from '@/components/IncomeExpenses.vue';
import TransactionList from '@/components/TransactionList.vue';
import AddTransaction from '@/components/AddTransaction.vue';
// store & vue 
import { useTransactionsStore } from './stores/transactionsStore';
import { onMounted } from 'vue';

const store = useTransactionsStore();

const persistStateToLocalStorage = () => {
  return localStorage.setItem(store.$id, JSON.stringify(store.transactions));
};

onMounted(() => {
  persistStateToLocalStorage(); 
  store.$subscribe(() => {
    persistStateToLocalStorage(); 
  });
});
</script>
