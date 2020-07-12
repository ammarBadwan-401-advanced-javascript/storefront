import React from 'react';
import { connect } from 'react-redux';

//Material UI modules
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
});


const Products = props => {
  const classes = useStyles();
  return(
    <Grid container spacing={4} className={classes.gridContainer} >
          {props.products.map((val,id)=>{
            return(
              <Grid item xs={4} >
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Product: {val.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Count: {val.count}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Description: {val.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    Price: {val.price}
                  </CardActions>
               </Card>
              </Grid>
            )
          })}
    </Grid>
  )
}

const mapStateToProps = state =>({
  products: state.products.list
});


export default connect(mapStateToProps)(Products);


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
*/