import React from 'react';
// Redux modules
import { connect } from 'react-redux';
import { add } from '../../store/cart-reducer';

// Material UI
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const SimpleCart = (props) =>{
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  return(
    <>
      <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Cart Items ({props.cart.length}) {console.log(props)} </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.cart.map((val,id)=>{
            return <MenuItem key={id} onClick={handleClose} >{val.name}</MenuItem>
        })}
      </Menu>
    </>
  )
}

const mapStateToProps = state =>({
  cart: state.cart
});
  
const mapDispatchToProps = { add };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);

/*
<>
    
    <p>Cart Items ({props.cart.length}) {console.log(props)} </p>
    <ul>
        {props.cart.map((val,id)=>{
            return <li key={id} >{val.name}</li>
        })}
    </ul>
    <p>{console.log(props)} </p>
  </>
*/