import React from 'react';
// Redux modules
import { connect } from 'react-redux';
import { change } from '../../store/categories-store';

//Material UI modules

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Categories = props => {
  const classes = useStyles();
  return(
    <section className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {props.categories.map((list,id)=>{
          return <Button onClick={()=>props.change(list.name)} key={id}>{list.displayName}</Button>
        })}
      </ButtonGroup>
    </section>
  )
}

const mapStateToProps = state =>({
  categories: state.categories.list,
  theState: state
});

const mapDispatchToProps = {change };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
