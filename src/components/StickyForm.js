import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Modal, Icon } from 'semantic-ui-react';
import {addSticky} from '../actions/stickies';
import {incId} from '../actions/nextId'

class StickyForm extends React.Component {
  state = { title: '', note: '', modalOpen: false}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleNoteChange = (e) => {
    this.setState({ note: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault;
    let { title, note } = this.state;
    let {dispatch, id} = this.props;
    let sticky = { title, note, id };
    dispatch(addSticky(sticky));
    dispatch(incId());
    this.setState({title: '', note: '', modalOpen: false})
  }

  render() {
    return (
      <div>
        <Modal
          trigger={<Button
            onClick={this.handleOpen}
            inverted
            color='violet'
          >
            <Icon name='write'/>
            Add A Sticky Note
          </Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
        >
          <Modal.Header>
            <Icon name='write' />
            Add A Sticky Note
          </Modal.Header>
          <Form
            inverted
            onSubmit={this.handleSubmit}
          >
            <Form.Input
              autoFocus={true}
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
              Add Note
            </Button>
          </Form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(StickyForm);
