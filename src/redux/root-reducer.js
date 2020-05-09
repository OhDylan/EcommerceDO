import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// WE WANT TO USE LOCAL STORAGE OF BROWSER
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  // WHITELIST IS TO TELL THE PERSIST REDUCER WHICH REDUCER WE WANT TO PERSIST
  whitelist: ["cart"]
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
