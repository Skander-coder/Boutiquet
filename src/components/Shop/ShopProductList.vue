<script setup lang="ts">
import type { ProductInterface } from "@/interfaces";
import ShopProduct from "./ShopProduct.vue";

defineProps<{
  products: ProductInterface[];
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
}>();
</script>

<template>
  <div class="grid grid-cols-4 grid-auto-rows gap-5 p-5">
    <ShopProduct
      v-for="product of products"
      :product="product"
      :key="product.id"
      @add-product-to-cart="emit('addProductToCart', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.grid-auto-rows {
  grid-auto-rows: 400px;
}
</style>
