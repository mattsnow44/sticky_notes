import React from 'react';
import { Card, Button, Modal, Form, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteSticky } from '../actions/stickies';
import { updateSticky } from '../actions/stickies';

class Sticky extends React.Component {
  state = { title: '', note: '', id: '', modalOpen: false}

  handleOpen = () => this.setState({ title: this.props.title, note: this.props.note, modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = (e) => {
    e.preventDefault
    let { title, note } = this.state;
    let {dispatch, id} = this.props;
    let sticky = { title, note, id };
    dispatch(updateSticky(sticky));
    this.setState({title: '', note: '', modalOpen: false})
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  handleNoteChange = (e) => {
    this.setState({note: e.target.value})
  }

  render() {
    let { title, note, id, dispatch } = this.props
    return (
      <Card >
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{note}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Modal
            trigger={<Button
              onClick={this.handleOpen}
              inverted
              color='blue'
            >
              <Icon name='edit' />
              Edit
            </Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
          >
            <Modal.Header>
              <Icon name='edit' />
              Edit Sticky Note
            </Modal.Header>
            <Form
              inverted
              onSubmit={this.handleSubmit}
            >
              <Form.Input
                required={true}
                label='Title'
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
              <Form.Input
                required={true}
                label='Note'
                value={this.state.note}
                onChange={this.handleNoteChange}
              />
              <Button
                inverted
                color='green'
              >
                Update
              </Button>
            </Form>
          </Modal>
          <Button
            inverted
            color='red'
            onClick={() => dispatch(deleteSticky(id))}
            >
              <Icon name='delete' />
              Delete
            </Button>
          </Card.Content>
        </Card>
    )
  }
}



export default connect()(Sticky);
