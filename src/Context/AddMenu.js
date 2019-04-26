import React, { Component } from 'react';
import {
    Container, Header, Content, Tab, Tabs, Left, Button, Icon, Body, Title, Right, Text,
    Toast, Root,
    Form,
    Item,
    Label,
    Input,
    Picker,

} from 'native-base';
import { Image } from 'react-native';
import Header1 from '../Router/Header1';


const imgUrl = [
    "https://i.ibb.co/jRFgjbg/mint.jpg",
    "https://i.ibb.co/HHyfDQH/theUlti.jpg",
    "https://i.ibb.co/ctY1TKt/cake3.jpg",
    "https://i.ibb.co/7ptTm4Z/whitecake.jpg",
    "https://i.ibb.co/bKgz97f/cake2.jpg"
];

const levelList = ['EASY', 'MEDIUM', 'MORE EFFORT'];

export default class addMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedLevel: 0,
        }
    }

    handleChange(value) {
        this.setState({
            selectedIndex: value
        })

    }
    handleSubmit() {

        this.props.navigation.navigate("Home", {
            data:
            {
                'name': this.state.name,
                'desc': this.state.desc,
                'serves': this.state.serves,
                'prep': this.state.prep,
                'level': levelList[this.state.selectedLevel],
                'pic': imgUrl[this.state.selectedIndex]
            }

        })
    }



    render() {
        pilihan = imgUrl.map((item, index) => {
            return <Picker.Item label={item} value={index} />
        })

        pilihan1 = levelList.map((item, index) => {
            return <Picker.Item label={item} value={index} />
        })
        return (
            < Container >
                <Header1 navigation={this.props.navigation} title="Add Menu" />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>name</Label>
                            <Input name='name' value={this.state.name}
                                onChangeText={val => this.setState({ name: val })} />
                        </Item>
                        <Item floatingLabel >
                            <Label>desc</Label>
                            <Input name='desc' value={this.state.desc}
                                onChangeText={val => this.setState({ desc: val })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Time</Label>
                            <Input name='date_order' value={this.state.prep}
                                onChangeText={val => this.setState({ prep: val })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>serves </Label>
                            <Input name='serves' keyboardType="numeric" value={this.state.serves}
                                onChangeText={val => this.setState({ serves: val })} />
                        </Item>

                        <Item inlineLabel>
                            <Label>Level </Label>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                // style={{ width: undefined }}
                                placeHolderText="Select date"
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                placeholderIconColor="#007aff"
                                selectedValue={parseInt(this.state.selectedLevel)}
                                onValueChange={(value) => this.setState({ selectedLevel: value })}
                            >
                                {pilihan1}
                            </Picker>
                        </Item>


                        <Item inlineLabel>
                            <Label>Image Uri </Label>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                // style={{ width: undefined }}
                                placeHolderText="Select date"
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                placeholderIconColor="#007aff"
                                selectedValue={parseInt(this.state.selectedIndex)}
                                onValueChange={(value) => this.handleChange(value)}
                            >
                                {pilihan}

                            </Picker>
                        </Item>
                        <Item>
                            <Image source={{ uri: imgUrl[this.state.selectedIndex] }} style={{ height: 400, width: null, flex: 1 }} />
                        </Item>

                        <Button Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.handleSubmit()} >
                            <Text>
                                Add
                                </Text>
                        </Button>
                    </Form>
                </Content>
            </Container >
        );
    }

}