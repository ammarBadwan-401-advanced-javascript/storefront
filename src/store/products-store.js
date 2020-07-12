let initialState = {
    products: [
    {name:'iPhone 11' ,category: 'electronics',description: 'iPhone 11 from apple.' ,price: '900 JD' ,count:8 },
    {name:'Galaxy S20' ,category: 'electronics',description: 'Galaxy S20 from Samsung' ,price: '750 JD' ,count:15 },    
    {name:'Pizza' ,category: 'food' ,description:'Pepperoni Pizza' ,price:'5 JD' ,count:10 },
    {name:'Pasta' ,category: 'food' ,description:'Pasta with cheese' ,price:'3 JD' ,count:18 }
    ]
}

export default (state = initialState, action) =>{
  let {type,payload} = action;
  switch(type){
    case 'CHANGE':
    return {list: initialState.products.filter(val=>{
        if(val.category === payload) return val;
      })}

    default:
      return {list:initialState.products}
  }
}
