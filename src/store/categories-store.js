let initialState = {
  list: [{name:'electronics',displayName:'Electronics' ,description:'The electronics section' },
  {name:'food' ,displayName: 'Food' ,description:'This is the food section' },{ name: 'clothing', displayName: 'Clothing',description:'This is the Clothing section' }],
  active: 'electronics'
}

export default (state = initialState, action) =>{
  let {type,payload} = action;
  switch(type){
    case 'CHANGE':
      let active;
      let list = state.list.map(category =>{
        if (category.name === payload){
            active = payload;
        }
        return category;
      });

      return {list , active};
    default:
     return state;
  }
}

export const change = (name) =>{
  return{
    type: 'CHANGE',
    payload: name
  }
}