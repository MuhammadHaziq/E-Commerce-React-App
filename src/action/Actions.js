import {
  ADD_QUENTITY_OF_PRODUCT,
  ADD_TO_CART,
  REMOVE_TO_CART,
  FETCH_WISHLIST_DATA,
  ADD_WISHLIST_DATA,
  REMOVE_QUENTITY_OF_PRODUCT,
  PRODUCT_NAME
} from "./ActionType.js";

export const AddToWishList = id => {
  return { type: ADD_WISHLIST_DATA, id };
};

export const AddToCheckout = id => {
  return { type: ADD_TO_CART, id };
};
export const AddQuentity = id => {
  return { type: ADD_QUENTITY_OF_PRODUCT, id };
};
export const RemoveQuentity = id => {
  return { type: REMOVE_QUENTITY_OF_PRODUCT, id };
};
export const RemoveToCheckout = id => {
  return { type: REMOVE_TO_CART, id };
};
export const Drawe = name => {
  console.log(name);
  return { type: PRODUCT_NAME, name };
};
