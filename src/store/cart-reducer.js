let initialState = [];

export default (state = initialState, action) => {
  let {type,payload} = action;
  switch(type){
    case 'ADD':
      console.log(payload)
      return [...state, payload];
    default:
      return state;
  }
}
