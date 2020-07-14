let initialState =[];
export default (state = initialState, action) =>{
  let {type,payload,active} = action;
  switch(type){
    case 'GET':
      console.log(payload);
      initialState = payload;
      return payload;
    case 'CHANGE':
    return initialState.filter(val=>{
        if(val.category === payload) return val;
      });

    case 'ADD':
      console.log(active)
      initialState = initialState.map(val=>{
        if(val.name === payload.name){
          return {...val, count:val.count-1}
         } 
         return val;
      });
      return initialState.filter(val=>{
        if(val.category === active) return val;
      });
    default:
      return state.filter(val=>{
        if(val.category === 'electronics') return val;
      });
  }
}
