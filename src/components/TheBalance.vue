<template>
  <h4>Your Balance</h4>
  <h1 id="balance">$ {{ balance }}</h1>
</template>

<script setup>
import {useDestructureStore} from '../composables/useDestructureStore'; 

const {balance} = useDestructureStore(); 
</script>
