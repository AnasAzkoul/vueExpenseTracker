import { useTransactionsStore } from '../stores/transactionsStore';
import { storeToRefs } from 'pinia';

export const useDestructureStore = () => {
  const store = useTransactionsStore();
  const {
    balance,
    roundedExpenses,
    roundedIncome,
    transactions,
    addTransaction,
    deleteTransaction
  } = storeToRefs(store);

  return {
    balance,
    roundedExpenses,
    roundedIncome,
    transactions,
    addTransaction,
    deleteTransaction
  };
};
