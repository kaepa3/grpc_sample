import { configureStore } from "@reduxjs/toolkit";

const initialState: StoreTest = {
  count: 12,
  names: ['person', 'human']
};


export type StoreTest = {
  count: number;
  names: string[]
}

const reducer = (state: StoreTest = initialState) => {
  return state
}

const store = configureStore({
  reducer: {
    counterReducer: reducer
  },
})
export type RootState = ReturnType<typeof store.getState>;

export default store
