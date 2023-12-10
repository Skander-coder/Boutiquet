<script setup lang="ts">
import type {
  FilterUpdate,
  FiltersInterface,
  ProductInterface,
} from "@/interfaces";
import ShopProductList from "./ShopProductList.vue";
import ShopFilters from "./ShopFilters.vue";
import { computed } from "vue";

const props = defineProps<{
  products: ProductInterface[];
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
  (e: "updateFilter", updateFilter: FilterUpdate): void;
}>();
const nbrOfProducts = computed(() => {
  return props.products.length;
});
</script>

<template>
  <div class="bg-gray-1 flex">
    <ShopFilters
      :filters="filters"
      @update-filter="emit('updateFilter', $event)"
      class="shop-filter text-text-color"
      :nbr-of-products="nbrOfProducts"
    />
    <ShopProductList
      class="flex-auto"
      :products="products"
      @add-product-to-cart="emit('addProductToCart', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.shop-filter {
  flex: 0 0 200px;
}
</style>
