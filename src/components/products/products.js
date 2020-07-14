import React , {useEffect} from 'react';

//Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

//Material UI modules
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridContainer: {
    paddingLeft:'20px',
    paddingRight:'20px',
  },
  button: {
    marginLeft: '20px',
  },
});


const Products = props => {
  const classes = useStyles();
  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  }

  useEffect (()=>{
    fetchData()
  },[]);

  return(
    
    <Grid container spacing={4} className={classes.gridContainer} >
      {console.log('hi')}
      {console.log(props)}
          {props.products.map(val=>{
            return(
              <Grid item xs={4} key={val._id} >
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Product: {val.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Count: {val.inStock}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Description: {val.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    Price: {val.price}
                    <Button onClick={()=>props.addItem(val,props.active)} variant="outlined" color="primary" className={classes.button} >Add to cart</Button>
                  </CardActions>
               </Card>
              </Grid>
            )
          })}
    </Grid>
  )
}

const mapStateToProps = state =>({
  products: state.products,
  active: state.categories.active
});

const mapDispatchToProps = (dispatch, getState) => ({ 
  get: ()=> dispatch(actions.getProducts()),
  addItem: (val, props)=> dispatch(actions.addToCart(val, props)),
});


export default connect(mapStateToProps,mapDispatchToProps)(Products);


/*
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


                          <Button onClick={()=>props.add(val,props.active)} variant="outlined" color="primary" className={classes.button} >Add to cart</Button>
*/