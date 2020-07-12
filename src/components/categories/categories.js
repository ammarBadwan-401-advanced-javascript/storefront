import React from 'react';
import { connect } from 'react-redux';

import { change } from '../../store/categories-store';

const Categories = props => {

  return(
    <section>
      <ul>
        {console.log(props.theState)}
        {props.categories.map((list,id) => {
          return <li onClick={()=>props.change(list.name)} key={id}>{list.displayName}</li>
        })}
      </ul>
    </section>
  )
}

const mapStateToProps = state =>({
  categories: state.categories.list,
  theState: state
});

const mapDispatchToProps = {change };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
