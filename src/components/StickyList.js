import React from 'react';
import Sticky from './Sticky';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

const StickyList = ({ stickies }) => (
  <Card.Group itemsPerRow={4}>
    { stickies.map( s => <Sticky key={s.id} {...s} /> ) }
  </Card.Group>
)

const mapStateToProps = (state) => {
  return { stickies: state.stickies }
}

export default connect(mapStateToProps)(StickyList);
