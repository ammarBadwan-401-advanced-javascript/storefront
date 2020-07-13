let initialState =[
    {name:'iPhone 11' ,category: 'electronics',description: 'iPhone 11 from apple.' ,price: 900 ,count:8 },
    {name:'Galaxy S20' ,category: 'electronics',description: 'Galaxy S20 from Samsung' ,price: 750 ,count:15 },    
    {name:'Pizza' ,category: 'food' ,description:'Pepperoni Pizza' ,price:5 ,count:10 },
    {name:'Pasta' ,category: 'food' ,description:'Pasta with cheese' ,price:3 ,count:18 },
    { name: 'TV', category: 'electronics',description:'50" 4K TV', price: 699.00, count: 5 },
    { name: 'Radio', category: 'electronics', description:'FM RADIO with clear sound',price: 99.00, count: 15 },
    { name: 'Shirt', category: 'clothing',description:'Nice purple shirt', price: 9.00, count: 25 },
    { name: 'Socks', category: 'clothing',description:'White socks', price: 12.00, count: 10 },
    { name: 'Apples', category: 'food', description:'Red apples',price: .99, count: 500 },
    { name: 'Eggs', category: 'food',description:'Nice round eggs', price: 1.99, count: 12 },
    { name: 'Bread', category: 'food', description:'Toast Bread',price: 2.39, count: 90 },
    ];
export default (state = initialState, action) =>{
  let {type,payload,active} = action;
  switch(type){
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
