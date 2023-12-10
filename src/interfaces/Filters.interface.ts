export type Category = 'Gamer' | 'Desktop' | 'Streaming' | 'All';

export interface FiltersInterface {
    search: string,
    priceRange: [number, number]
    category: Category
}

export interface FilterUpdate {
    search?: string,
    priceRange?: [number, number],
    category?: Category
}