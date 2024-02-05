<template>
  <h4>Your Balance</h4>
  <h1 id="balance">$ {{store.balance}}</h1>
</template>

<script setup>
import {useTransactionsStore} from '../stores/transactionsStore'; 
const store = useTransactionsStore(); 
</script>

