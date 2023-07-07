import { v4 as uuidv4 } from "uuid";
import imgSrc from "../assets/bottle.png";

export const generateCards = (quantity: number) => {
  const cards = [];
  for (let i = 1; i <= quantity; i++) {
    const obj = {
      id: uuidv4(),
      name: "Placeholder product",
      price: Math.floor(Math.random() * 1501) + 500,
      img: imgSrc,
    };
    cards.push(obj);
  }
  return cards;
};

export interface ICard {
  id: string;
  name: string;
  price: number;
  img: string;
}
