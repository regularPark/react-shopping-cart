import { Product } from '../types';
import { CartItem } from '../types';
import { getLocalStorage } from '../utils/localStorage';

export const cartItems: CartItem[] = getLocalStorage<CartItem[]>('cart', []);

export const products: Product[] = [
  {
    id: 1,
    name: 'PET보틀-정사각(420ml)',
    price: 43400,
    imageUrl: '/assets/product1.svg',
  },
  {
    id: 2,
    name: 'PET보틀-밀크티(370ml)',
    price: 73400,
    imageUrl: '/assets/product2.svg',
  },
  {
    id: 3,
    name: 'PET보틀-정사각(370ml)',
    price: 41000,
    imageUrl: '/assets/product3.svg',
  },
  {
    id: 4,
    name: 'PET보틀-납작(450ml)',
    price: 39900,
    imageUrl: '/assets/product4.svg',
  },
  {
    id: 5,
    name: 'PET보틀-단지(480ml)',
    price: 39900,
    imageUrl: '/assets/product5.svg',
  },
  {
    id: 6,
    name: 'PET보틀-납작(260ml)',
    price: 41000,
    imageUrl: '/assets/product6.svg',
  },
  {
    id: 7,
    name: 'PET보틀-원형(500ml)',
    price: 61800,
    imageUrl: '/assets/product7.svg',
  },
  {
    id: 8,
    name: 'PET보틀-원형(500ml)',
    price: 30500,
    imageUrl: '/assets/product8.svg',
  },
  {
    id: 9,
    name: 'PET보틀-길쭉(500ml)',
    price: 50000,
    imageUrl: '/assets/product1.svg',
  },
  {
    id: 10,
    name: 'PET보틀-원형(500ml)',
    price: 44500,
    imageUrl: '/assets/product2.svg',
  },
  {
    id: 11,
    name: 'PET보틀-딥다크(500ml)',
    price: 18000,
    imageUrl: '/assets/product3.svg',
  },
  {
    id: 12,
    name: 'PET보틀-힙 플라스크(500ml)',
    price: 21500,
    imageUrl: '/assets/product4.svg',
  },
];
