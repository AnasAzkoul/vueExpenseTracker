<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="handleFormSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." v-model="transactionName" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input type="number" id="amount" placeholder="Enter amount..." v-model="transactionAmount" />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const transactionName = ref(null);
const transactionAmount = ref(null);

const emits = defineEmits(['add-transaction']);

const handleFormSubmit = () => {
  emits('add-transaction', {
    text: transactionName.value,
    amount: transactionAmount.value
  });

  transactionAmount.value = null;
  transactionName.value = null;
};
</script>
