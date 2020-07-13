import React from 'react';
// Redux modules
import { connect } from 'react-redux';
import { add } from '../../store/cart-reducer';

const SimpleCart = (props) =>{

  return(
    <>
      <p>This is cart ({props.cart.length}) {console.log(props)} </p>
    </>
  )
}

const mapStateToProps = state =>({
  cart: state.cart
});
  
const mapDispatchToProps = { add };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);