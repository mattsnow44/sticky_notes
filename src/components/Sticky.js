import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteSticky } from '../actions/stickies';

const Sticky = ({ title, note, id, dispatch }) => (
  <Card >
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{note}</Card.Description>
    </Card.Content>
    <Card.Content>
      <Button
        inverted
        color='red'
        onClick={() => dispatch(deleteSticky(id))}
      >
        Delete
      </Button>
    </Card.Content>
  </Card>
)



export default connect()(Sticky);
