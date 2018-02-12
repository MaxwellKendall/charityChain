import React, { Component } from 'react';
import UIButton from './UIButton';
import { Header, Icon } from 'semantic-ui-react';

export default class GlobalHeader extends Component {
    render() {
        return (
            <div className="header">
                <Header size="huge"className="header__h1">Charity Chain</Header>
                <Icon className="header__icon" name="signal" size="huge"/>
                <Header className="header__subHeader" sub>Soliciting the donation of charitable organizations</Header>
            </div>
        );
    }
    }
