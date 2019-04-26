import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Left, Right, Body, Title, Subtitle } from 'native-base';
const folData = [
    'Simon Mignolet',
    'Nathaniel Clyne',
    'Dejan Lovren',
    'Mama Sakho',
    'Alberto Moreno',
    'Emre Can',
    'Joe Allen',
    'Phil Coutinho',
];
import Header1 from '../Router/Header1';

export default class Following extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listFollow: folData
        }
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    }
    render() {
        return (
            <Container>
                <Header1 navigation={this.props.navigation} title="Following" />
                <Content>
                    <List
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        dataSource={this.ds.cloneWithRows(this.state.listFollow)}
                        // dataSource={this.state.listFollow}
                        renderRow={data =>
                            <ListItem>
                                <Body>
                                    <Text>{data}</Text>
                                </Body>
                            </ListItem>}
                        // {/* onPress={this.showAlert.bind(this, data)} */}

                        renderRightHiddenRow={(data) =>
                            <Button full danger >
                                <Icon active name="md-remove" />
                            </Button>
                        }

                        renderLeftHiddenRow={data =>
                            <Button full onPress={() => alert(data)}>
                                <Icon active name="information-circle" />
                            </Button>}
                    />
                    {/* // onPress={() => this.props.navigation.navigate("PurcaseAdd")} */}

                </Content>

            </Container>
        );
    }
}