import superagent from 'superagent';

let API = 'https://rowaid-server.herokuapp.com/api/v1';

export const getProducts = () => dispatch =>{
  return superagent.get(`${API}/products`)
  .then(data=>{
      dispatch(getAction(data.body.results))
  })
}

export const addToCart = (item,active) => dispatch => {
  return dispatch(addItem(item,active));
}

export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}


export const addItem = (item,active) =>{
  return{
    type: 'ADD',
    payload: item,
    active,
  }
}
