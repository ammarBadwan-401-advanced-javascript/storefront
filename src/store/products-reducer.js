let initialState =[];
export default (state = initialState, action) =>{
  let {type,payload,active} = action;
  switch(type){
    case 'GET':
      console.log(payload);
      initialState = payload;
      return payload.filter(val=>{
        if(val.category === payload) return val;
      });
    case 'CHANGE':
    return initialState.filter(val=>{
        if(val.category === payload) return val;
      });

    case 'ADD':
      console.log(payload)
      initialState = initialState.map(val=>{
        if(val._id === payload._id){
          return {...val, inStock:val.inStock-1}
         } 
         return val;
      });
      return initialState.filter(val=>{
        if(val.category === active) return val;
      });
    default:
      return state.filter(val=>{
        if(val.category === active) return val;
      });
  }
}
