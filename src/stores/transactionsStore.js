import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref(JSON.parse(localStorage.getItem('transactions')));

  const balance = computed(() => {
    return Math.ceil(transactions.value.reduce((acc, currentItem) => acc + currentItem.amount, 0));
  });

  const roundedIncome = computed(() => {
    return Math.ceil(
      transactions.value.reduce((acc, currentItem) => {
        if (currentItem.amount > 0) {
          return acc + currentItem.amount;
        }

        return acc;
      }, 0)
    );
  });

  const roundedExpenses = computed(() => {
    return Math.ceil(
      transactions.value.reduce((acc, currentItem) => {
        if (currentItem.amount < 0) {
          return acc + currentItem.amount;
        }

        return acc;
      }, 0)
    );
  });

  const deleteTransaction = (id) => {
    transactions.value = transactions.value.filter((item) => item.id !== id);
  };

  const addTransaction = (data) => {
    transactions.value = [data, ...transactions.value];
  };

  return {
    transactions,
    balance,
    roundedIncome,
    roundedExpenses,
    deleteTransaction,
    addTransaction
  };
});
