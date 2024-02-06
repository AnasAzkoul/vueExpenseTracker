<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+$ {{ roundedIncome }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-$ {{ roundedExpenses }}</p>
    </div>
  </div>
</template>

<script setup>
import { useDestructureStore } from '../composables/useDestructureStore';

const { roundedExpenses, roundedIncome } = useDestructureStore();
</script>
