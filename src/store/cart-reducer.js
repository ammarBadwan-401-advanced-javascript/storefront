let initialState = [];

export default (state = initialState, action) => {
  let {type,payload} = action;
  switch(type){
    case 'ADD':
      return [...state, payload];
    default:
      return state;
  }
}

export const add = (item) =>{
  return{
    type: 'ADD',
    payload: item
  }
}