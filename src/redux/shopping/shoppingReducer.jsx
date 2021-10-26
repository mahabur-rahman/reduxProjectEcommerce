import * as actionTypes from "./shopping-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Product 1",
      description: "First product description",
      price: "$ 20",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Second product description",
      price: "$ 40",
      image:
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Third product description",
      price: "$ 60",
      image:
        "https://images.unsplash.com/photo-1491947153227-33d59da6c448?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
  ], // {id, title, desc, price, img }
  cart: [], // {id, title, desc, price, img, quantity }
  currentItem: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //   get the items data from the product array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //   check if item is in cart already
      const inCart = state.cart.find((prod) =>
        prod.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...state, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
