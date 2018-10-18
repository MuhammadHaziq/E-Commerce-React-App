import {
  FETCH_DATA,
  ADD_TO_CART,
  REMOVE_TO_CART,
  FETCH_WISHLIST_DATA,
  ADD_WISHLIST_DATA,
  ADD_QUENTITY_OF_PRODUCT,
  REMOVE_QUENTITY_OF_PRODUCT,
  PRODUCT_NAME
} from "../action/ActionType.js";

const INTIAL_STATE = {
  products: [
    {
      url: "/products/Parental-Guidance-DI-DI-to-CW.jpg",
      id: "1",
      name: "men",
      price: 2000,
      inventry: 10
    },

    {
      url: "/products/IMG_5258-EMTPS-17-023.jpg",
      id: "2",
      name: "men",
      price: 2000,
      inventry: 10
    },
    {
      url: "/products/IMG_5258-EMTPS-17-023.jpg",
      id: "3",
      name: "men",
      price: 2000,
      inventry: 10
    },
    {
      url: "/products/ts1802-4.jpg",
      id: "4",
      name: "men",
      price: 2000,
      inventry: 10
    },
    {
      url: "/products/ts1803-3_-_2495...jpg",
      id: "5",
      name: "men",
      price: 2000,
      inventry: 10
    },
    {
      url: "/products/wtsh801-3c_-_1495..jpg",
      id: "6",
      name: "men",
      price: 2000,
      inventry: 10
    },
    {
      url: "/products/images.jpeg",
      id: "7",
      name: "women",
      price: 2000,
      inventry: 10
    },
    {
      url: "/products/images1.jpeg",
      id: "8",
      name: "women",
      price: 2000,
      inventry: 10
    },
    {
      url: "/products/images2.jpeg",
      id: "9",
      name: "women",
      price: 2000,
      inventry: 10
    },
    {
      url: "/products/index.jpeg",
      id: "10",
      name: "women",
      price: 2000,
      inventry: 10
    }
  ],
  counter: 0
};

const Reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WISHLIST_DATA: {
      // console.log(id);
      const products = state.products.slice().map(item => {
        if (item.id === action.id) {
          // const newItem = Object.assign({}, item);
          // newItem.addedToWishList = !newItem.addedToWishList;
          // return newItem;
          return { ...item, addedToWishList: !item.addedToWishList };
        }
        return item;
      });
      console.log(state.products);
      return {
        ...state,
        products
      };
    }
    case ADD_TO_CART: {
      const products = state.products.slice().map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            addedToCard: !item.addedToCard,
            counter: !item.counter ? 1 : 0,
            quentity: !item.quentity ? 1 : item.quentity,
            total: !item.total ? item.price : item.total
          };
        }
        return item;
      });
      return {
        ...state,
        products
      };
    }
    case REMOVE_TO_CART: {
      const products = state.products.slice().map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            addedToCard: !item.addedToCard,
            counter: !item.counter ? 1 : 0
          };
        }
        return item;
      });
      return {
        ...state,
        products
      };
    }
    case ADD_QUENTITY_OF_PRODUCT: {
      const products = state.products.slice().map(item => {
        if (item.id === action.id) {
          console.log(item.quentity);
          return {
            ...item,
            quentity: !item.quentity ? 1 : item.quentity + 1,
            total: !item.total ? item.price : item.price * (item.quentity + 1)
          };
        }
        console.log("Quentity :", item.quentity);
        return item;
      });
      return {
        ...state,
        products
      };
    }
    case REMOVE_QUENTITY_OF_PRODUCT: {
      const products = state.products.slice().map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            quentity:
              item.quentity && item.quentity > 1 ? item.quentity - 1 : 1,
            total:
              item.total && item.total > item.price
                ? item.total - item.price
                : item.price
          };
        }
        return item;
      });
      return {
        ...state,
        products
      };
    }
  }
  return state;
};
export default Reducer;
// return { ...item, quantity: item.quantity ? item.quantity++ : 1 };
