<script setup lang="ts">
import type { ProductInterface } from "@/interfaces";

defineProps<{
  product: ProductInterface;
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
}>();
</script>

<template>
  <div
    class="product text-text-color flex flex-col bg-white rounded-[4px] border"
  >
    <div
      class="product-image"
      :style="{ backgroundImage: `url(${product.image})` }"
    ></div>
    <div class="p-3 flex flex-col border-t border-gray-2">
      <h4 class="text-lg font-medium mb-1">{{ product.title }}</h4>
      <p class="text-sm">
        {{ product.description }}
      </p>
      <div class="flex flex-row items-center mt-8">
        <span class="flex-auto text-sm font-medium text-gray-700"
          >Prix: {{ product.price }}TND</span
        >
        <button
          class="bg-primary-1 px-3 py-2 rounded-md text-text-primary border-0 cursor-pointer font-medium hover:bg-primary-2 transition text-xs"
          @click="emit('addProductToCart', product.id)"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  &-image {
    background-image: url(../../assets/macbookPro.png);
    background-size: cover;
    background-position: center;
    height: 250px;
  }
}
.transition {
  transition: background-color 0.2s;
}
</style>
