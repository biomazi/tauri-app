import { atom } from "jotai";
import { ICard } from "../data/generateCards";

export interface ICart extends ICard {
  cartId: string;
}

export const cartAtoms = atom<ICart[]>([]);

export const shoppingCartAtoms = atom(
  (get) => get(cartAtoms),
  (get, set, update: (arg: ICart[]) => ICart[]) => {
    const currentLength = get(cartContentLengthAtom);
    return currentLength < 5 && set(cartAtoms, update);
  }
);

export const cartContentLengthAtom = atom((get) => get(cartAtoms).length);

export const cartPriceAtom = atom((get) =>
  get(cartAtoms).reduce((acc, card) => acc + card.price, 0)
);

export const purchaseCompletedAtom = atom(false);
