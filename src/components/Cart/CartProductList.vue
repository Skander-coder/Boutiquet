<script setup lang="ts">
import type { ProductCartInterface } from "@/interfaces";
import CartProduct from "./CartProduct.vue";
defineProps<{
  cart: ProductCartInterface[];
}>();

const emit = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<template>
  <div class="flex flex-col">
    <CartProduct
      v-for="product in cart"
      :key="product.id"
      :product="product"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
