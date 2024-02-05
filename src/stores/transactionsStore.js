import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref([
    { id: 1, text: 'Flower', amount: -19.99 },
    { id: 2, text: 'Salary', amount: 299.97 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]);

  const balance = computed(() => {
    return transactions.value.reduce((acc, currentItem) => acc + currentItem.amount, 0);
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
