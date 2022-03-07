import { createStore } from 'redux'

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

const store = createStore(reducer)

export default store
