import React from 'react';
import { Content, Container, Header, Left, Body, Right, Button, Icon, Title, Text, Footer } from 'native-base';
import Header1 from '../Router/Header1';


export default class Coba1 extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <Container>
               <Header1 navigation={this.props.navigation} title="Coba1" /> 
                <Content>
                    <Text>
                        Coba1
                    </Text>
                </Content>
                <Footer></Footer>
            </Container>
        );
    }
}