<template>
<div style="padding: 1rem; border: 2px #3b82f6; border-radius: 8px; background: #eff6ff; font-family: sans-serif;">
<h2 style="color: #1e3a8a; margin-top:0;"> Products </h2>
<div style="display: flex; gap: 1rem;"> 
    <div v-for="product in products" :key="product.id" style="border:1px solid #bfdbfe; padding: 1rem; border-radius: 8px; background: white;">
        <h3 style="margin: 0 0 10px 0; color: #1e40af;">{{ product.name }}</h3>
        <p style="margin: 0 0 10px 0; font-weight: bold;">{{ product.price }} ₺</p>
        <button @click="addToCart(product)" style="background: #3b82f6; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
            Add to Cart
        </button>
    </div>
</div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const products = ref([
    { id: 1, name: 'Laptop', price: 25000 },
    { id: 2, name: 'Phone', price: 15000 },
    { id: 3, name: 'Tablet', price: 10000 },
]);

const addToCart = (product: any) => {
    console.log('Added to cart', product.name);
}
</script>
