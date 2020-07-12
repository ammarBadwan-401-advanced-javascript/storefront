import React from 'react';
import { connect } from 'react-redux';


const Products = props => {

  return(
    <section>
      {props.products.map((val,id)=>{
        return (
            <div key={id}>
                <p>Product: {val.name}</p> 
                <p>Description: {val.description}</p> 
                <p>Count: {val.count}</p> 
                <p>Price: {val.price}</p> 
            </div> 
        )
      })}
    </section>
  )
}

const mapStateToProps = state =>({
  products: state.products.list
});


export default connect(mapStateToProps)(Products);

/*
      {props.products.map((val,id)=>{
        return (
            <div>
                <p>{val.name}</p> 
                <p>{val.category}</p> 
                <p>{val.description}</p> 
                <p>{val.count}</p> 
                <p>{val.price}</p> 

            </div> 
        )
      })}
*/