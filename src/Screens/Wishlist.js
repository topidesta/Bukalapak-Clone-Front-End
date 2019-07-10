import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import WishlistProducts from '../Components/Product/WishlistProducts';
import data from '../Assets/DummyData/Products';
class WishlistScreen extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            products:data,
            filter:'Semua',
        };
      }

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor:'#F5F5F5'}}>
                <View style={styles.search}>
                    <Image source={require('../Assets/Images/Icons/ico_search.png')} style={{opacity:0.5,margin:20,height:20,width:20,}}/>
                    <TextInput placeholder={'Cari barang favorit...'} style={styles.searchInput}/>
                    <TouchableOpacity style={styles.filterButton}><Text style={{alignSelf:'center'}}>Filter</Text></TouchableOpacity>
                </View>
                <View>
                    <Text style={{margin:5,opacity:0.9}}>Filter : {this.state.filter}</Text>
                </View>
                <View style={styles.wishlist}>
                    <FlatList
                    style={{}}
                    data={this.state.products}
                    keyExtractor={this._keyExtractor}
                    numColumns='2'
                    renderItem={({item}) => <WishlistProducts data={item}/>}
                  />

                </View>
            </ScrollView>
        );
    };
};

export default WishlistScreen;

const styles = StyleSheet.create({
    search:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFF',
        elevation:1,
        borderBottomWidth:1,
        borderBottomColor:'#F4F4F4'
    },
    searchInput:{
        flex:3,
    },
    filterButton:{
        alignContent:'center',
        justifyContent:'center',
        width:100,
        flex:1,
        padding:20,
        borderLeftWidth:1,
        borderLeftColor:'#F5F5F5'
    },
    wishlist:{
        backgroundColor:'#FFF',
        flex:1,
        marginBottom:40
    },

});