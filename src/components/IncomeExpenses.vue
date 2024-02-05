<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+$ {{ store.roundedIncome }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-$ {{ store.roundedExpenses }}</p>
    </div>
  </div>
</template>

<script setup>
import {useTransactionsStore} from '../stores/transactionsStore'; 

const store = useTransactionsStore(); 
</script>
