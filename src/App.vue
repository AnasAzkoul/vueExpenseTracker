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
import TheHeader from './components/TheHeader.vue';
import TheBalance from '@/components/TheBalance.vue';
import IncomeExpenses from '@/components/IncomeExpenses.vue';
import TransactionList from '@/components/TransactionList.vue';
import AddTransaction from '@/components/AddTransaction.vue';
</script>
