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
import { computed } from 'vue';
const { income, expenses } = defineProps({
  expenses: {
    type: Number,
    required: true
  },
  income: {
    type: Number,
    required: true
  }
});

const roundedExpenses = computed(() => Math.ceil(expenses)); 
const roundedIncome = computed(() => Math.ceil(income)); 
</script>
