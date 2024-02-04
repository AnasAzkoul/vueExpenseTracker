<template>
  <TheHeader />
  <div class="container">
    <TheBalance :balance="balance"/>
    <IncomeExpenses :income="income" :expenses="expenses"/>
    <TransactionList
      :list="transactions"
      @delete="deleteTransaction"
    />
    <AddTransaction />
  </div>
</template>

<script setup>
import { ref, computed} from 'vue'
import TheHeader from './components/TheHeader.vue';
import TheBalance from '@/components/TheBalance.vue';
import IncomeExpenses from '@/components/IncomeExpenses.vue';
import TransactionList from '@/components/TransactionList.vue';
import AddTransaction from '@/components/AddTransaction.vue';

// State
const transactions = ref([
  {id: 1, text: 'Flower', amount: -19.99},
  {id: 2, text: 'Salary', amount: 299.97},
  {id: 3, text: 'Book', amount: -10},
  {id: 4, text: 'Camera', amount: 150},
]);

// Event callbacks

const deleteTransaction = (id) => {
  transactions.value = transactions.value
    .filter(item => item.id !== id);
}

// Computed Values

const balance = computed(() => {
  return transactions.value.reduce((acc, currentValue) => acc + currentValue.amount, 0);
})

const income = computed(() => {
  return transactions.value.reduce((acc, currentValue) => {
    if(currentValue.amount > 0) {
      return acc + currentValue.amount
    }

    return acc
  }, 0)
})

const expenses = computed(() => {
  return transactions.value.reduce((acc, currentValue) => {
    if(currentValue.amount < 0) {
      return acc + currentValue.amount
    }

    return acc
  }, 0)
})

</script>