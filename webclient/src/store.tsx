import { createStore } from 'redux'

const initialState = {
  count: 12,
  names: ['person', 'human']
};


export interface IStore {
  count: number;
  names: string[]
}


const reducer = (state = initialState) => {
  return state
}

const store = createStore(reducer)

export default store
