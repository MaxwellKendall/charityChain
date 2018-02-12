import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Image, Input, Modal, Grid, } from 'semantic-ui-react';

export default class SignUp extends Component {
  static propTypes = {
    onClick : PropTypes.func.isRequired,
  }
  render() {
    return (
        <Modal trigger={<Button onClick={this.props.onClick} className="signUp__button">Sign Up</Button>}>
          <Modal.Header>Profile Picture</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/wireframe/image.png' />
            <Modal.Description>
              <Header>Modal Header</Header>
              Hey Guys
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button primary>
              Proceed <Icon name='right chevron' />
            </Button>
          </Modal.Actions>
        </Modal>
    );
  }
}
