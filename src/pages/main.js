import React, { Component } from 'react';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: "JSHunt"
    }

    state = {
        productInfo: {}, // além dos documetos que existem na API, há outras infos, e elas serão guardadas nesta variável do state
        docs: [],
        page: 1,
    };

    componentDidMount() {
        this.loadProducts();
    };

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`); // recebe os produtos da api

        const { docs, ...productInfo } = response.data; // desestruturação dos docs recebidos da response.data

        this.setState({ docs: [ ...this.state.docs, ...docs ], productInfo, page }); // Para alterar alguma variável do state, só utilizando o setState()
    };

    renderItem = ({ item }) => ( // como iremos trabalhar com retorno de codigo jsx, utilizamos o parenteses
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>

            <TouchableOpacity 
                style={styles.productButton} 
                onPress={() => {
                    this.props.navigation.navigate('Product', { product: item });
                }}
            >
 
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page == productInfo.pages) return;

        const pageNumber = page + 1;    

        this.loadProducts(pageNumber);
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={style.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },

    list: {
        padding: 20
    },

    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold",
    }
});