import React from 'react';
import { Content, Container, Header, Left, Body, Right, Button, Icon, Title, Text, Footer } from 'native-base';

export default class Header1 extends React.Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='md-menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>
                        {this.props.title}
                    </Title>
                </Body>
                <Right>

                </Right>
            </Header>
        );
    }
}