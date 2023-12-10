<script setup lang="ts">
import type { ProductCartInterface } from "@/interfaces";
import CartProductList from "./CartProductList.vue";
import { computed } from "vue";
const props = defineProps<{
  cart: ProductCartInterface[];
}>();

const emit = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();

const totalPrice = computed(() =>
  props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0)
);
</script>

<template>
  <div class="p-5 text-text-color bg-white border-l flex flex-col">
    <h2 class="text-3xl font-bold mb-3">Panier</h2>
    <CartProductList
      class="flex-auto"
      :cart="cart"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
    />
    <button
      class="bg-success-1 px-3 py-2 rounded-md text-text-primary border-0 cursor-pointer font-medium hover:bg-success-2 transition text-md"
    >
      Commander ({{ totalPrice }} TND)
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
