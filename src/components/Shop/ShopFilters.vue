<script setup lang="ts">
import type { Category, FilterUpdate, FiltersInterface } from "@/interfaces";

defineProps<{
  filters: FiltersInterface;
  nbrOfProducts: number;
}>();

const emit = defineEmits<{
  (e: "updateFilter", updateFilter: FilterUpdate): void;
}>();
</script>

<template>
  <div class="p-5 flex flex-col">
    <section class="mb-8">
      <h3 class="text-xl mb-5">Rechercher</h3>
      <input
        type="text"
        placeholder="Rechercher"
        class="border rounded py-2 px-4"
        :value="filters.search"
        @input="
          emit('updateFilter', {
            search: ($event.target as HTMLInputElement).value,
          })
        "
      />
    </section>
    <section class="mb-5">
      <h3 class="text-xl mb-3">Trier par prix</h3>
      <div
        class="mb-1"
        v-for="priceRange of ([[0, 10000],[800, 1000],[1000, 1500],[1500, 2000],[2000, 10000]] as [number,number][])"
        :key="priceRange[0]"
      >
        <input
          type="radio"
          @input="emit('updateFilter', { priceRange })"
          name="priceRange"
          :id="priceRange[0] + ''"
          :checked="filters.priceRange[0] === priceRange[0]"
        />
        <label :for="priceRange[0] + ''">
          {{
            priceRange[0] === 0
              ? " tous les prix"
              : priceRange[0] === 2000
              ? " plus de 2000 TND"
              : ` entre ${priceRange[0]}TD et ${priceRange[1]}TD`
          }}</label
        >
      </div>
    </section>
    <section class="mb-5 flex-auto">
      <h3 class="text-xl mb-3">Trier par categories</h3>
      <p
        v-for="(category, index) in (['All', 'Desktop', 'Gamer', 'Streaming'] as Category[])"
        @click="emit('updateFilter', { category })"
        :key="index"
        :class="{ selected: filters.category === category }"
        class="category mb-2"
      >
        {{ category }}
      </p>
    </section>
    <small>Nombre d résultats: {{ nbrOfProducts }}</small>
    <button
      class="bg-danger-1 text-white py-2 px-4 rounded-md"
      @click="emit('updateFilter', {})"
    >
      Supprimer les filtres
    </button>
  </div>
</template>

<style lang="scss" scoped>
.category {
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.selected {
  font-weight: bold;
  text-decoration: underline;
}
</style>
