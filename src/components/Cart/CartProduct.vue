<script setup lang="ts">
import type { ProductCartInterface } from "@/interfaces";

defineProps<{
  product: ProductCartInterface;
}>();

const emit = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<template>
  <div class="product mb-2 p-3 flex items-center rounded-md border bg-gray-1">
    <strong class="mr-2 text-sm">{{ product.title }}</strong>
    <span class="flex-auto">x {{ product.quantity }}</span>
    <span class="mr-5 text-xs">Prix : {{ product.price }} TND</span>

    <button
      class="bg-danger-1 px-3 py-2 rounded-md text-text-primary border-0 cursor-pointer font-medium hover:bg-danger-2 transition text-xs"
      @click="emit('removeProductFromCart', product.id)"
    >
      Supprimer
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
