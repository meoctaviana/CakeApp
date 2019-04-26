import React from 'react';
import { Image, FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, Fab, List } from 'native-base';
import Header1 from '../Router/Header1';

const listCakex = [{
    id: 0,
    name: 'Easter nest cake',
    desc: 'Bake a showstopping cake for Easter. This one is so easy and the kids can decorate it by filling the pretzel nest with their favourite chocolate eggs',
    prep: "45 MINS",
    cook: '30 MINS',
    level: 'EASY',
    serves: '12 - 15',
    pic: "https://i.ibb.co/hZh895c/Easter-nest-cake.jpg"
},
{
    id: 1,

    name: 'Magical reindeer cake',
    desc: 'Bake a Christmas cake that looks like Rudolph! Kids will love it and everyone will enjoy the rich chocolate sponge with buttercream and biscuit antlers',
    prep: "2 HRS, 15 MINS",
    cook: '1 HR',
    level: 'MORE EFFORT',
    serves: '16 - 22',
    pic: "https://i.ibb.co/8NxHfzJ/reindeer-cake.jpg"
},
{
    id: 2,

    name: 'Halloween biscuits',
    desc: 'Bake our ghost-shaped piñata biscuits with the kids for a Halloween treat. They feature a surprise centre with popping candy to stir up some excitement',
    prep: "45 MINS",
    cook: '25 MINS',
    level: 'EASY',
    serves: '7 - 8',
    pic: "https://i.ibb.co/PwxzP2G/ghost-biscuits.jpg"
}
];

export default class CardImageExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            listCake: listCakex
        }
        console.log('xx')
    }
    componentWillMount() { }

    componentWillReceiveProps(nextProps) {
        // console.log(this.props.navigation.getParam("name"));
        let { navigation } = nextProps;
        data = navigation.getParam('data', {});

        listCake1 = this.state.listCake;
        lastId = listCake1[listCake1.length - 1].id;
        idBaru = parseInt(lastId) + 1;

        data.id = idBaru;
        listCake1.push(data)
        // console.log(data);
        this.setState({
            listCake: listCake1,
            refresh: !this.state.refresh
        })

    }

    

    render() {
        console.log('render home')
        cakeKu = this.state.listCake;
        console.log(cakeKu)
        return (
            <Container>
                <Header1 navigation={this.props.navigation} title="Home" />
                <Content>
                    <FlatList
                        extraData={this.state.refresh}
                        data={cakeKu}
                        renderItem={({ item }) =>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>{item.name}</Text>
                                            <Text note>{item.desc}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={{ uri: item.pic }} style={{ height: 200, width: null, flex: 1 }} />
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="md-clock" />
                                            <Text>{item.prep}</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Button transparent>
                                            <Icon active name="md-people" />
                                            <Text>{item.serves}</Text>
                                        </Button>
                                    </Body>
                                    <Right>
                                        <Text>{item.level}</Text>
                                    </Right>
                                </CardItem>
                            </Card>

                        }
                    />

                </Content>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate("AddMenu", true)}
                >
                    <Icon name="add" />

                </Fab>
            </Container>
        );
    }
}