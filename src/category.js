import fruits from './assets/full-basket-vegetable.png';
import dairy from './assets/dairy-and-eggs.png';
import seafood from './assets/meat-and-seafood.png';

export const categories = [
  {
    id: 1,
    title: "Fruits and Vegetables",
    description: "Fresh, organic products daily sourced from local villages",
    path: "/fruits",
    image: fruits,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description: "Wholesale dairy products and free-range eggs. From milk to yogurt",
    path: "/dairy",
    image: dairy,
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description: "High-quality, responsibly sourced meat and seafood. Always fresh",
    path: "/seafood",
    image: seafood,
  },
];