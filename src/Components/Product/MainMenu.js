import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const width = Dimensions.get('window').width

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {

            };
    }

    // carousel ads
    ads = [
        <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg'}} />,
        <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg'}} />,
        <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg'}} />
    ]
    render(){
        return(
            <View>
                <View style={[styles.container,{flexDirection:'row',paddingHorizontal:15}]}>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                        <Text style={styles.title}>VoucherKu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                        <Text style={styles.title}>VoucherKu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}>
                        <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                        <Text style={styles.title}>VoucherKu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => { this.props.navigation.navigate('Wishlist', this.props.data)}}>
                        <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                        <Text style={styles.title}>Barang Favorite</Text>
                    </TouchableOpacity>
                </View>

                {/* Loop Carousel */}
                <View style={[styles.container,{height:210}]}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={{margin:15,fontSize:16,position:'absolute',fontWeight:'bold'}}>Spesial Untukmu</Text> 
                        <Text style={{fontSize:13,left:280,margin:15,color:'red'}}>Lihat semua</Text> 
                    </View>
                    <View style={{flex:3}}>
                        <Carousel
                            ref={ ref => this.carouselRef = ref }
                            data={ this.ads }
                            renderItem={ ({ item }) => item }
                            onSnapToItem={ i => this.setState({ activeTab : i }) }
                            sliderWidth={ width }
                            itemWidth={ 360 }
                            slideStyle={{paddingHorizontal:5}}
                            inactiveSlideOpacity={ 1 }
                            inactiveSlideScale={ 1 }
                            loop={true}
                            autoplay={true}
                            autoplayInterval={3000}
                        />
                    </View>   
                </View>

                {/* Menu Icon */}
                <View style={styles.container}>
                    <View style={{flex:1,paddingHorizontal:15,paddingVertical:10}}>
                        <Text style={{fontSize:16,fontWeight:'bold',margin:5}}>E-Voucher, tiket, & investasi</Text> 
                    </View> 
                    <View style={{flex:1,flexDirection:'row',paddingHorizontal:15}}>
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                            <Text style={styles.title}>VoucherKu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                            <Text style={styles.title}>VoucherKu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                            <Text style={styles.title}>VoucherKu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                            <Text style={styles.title}>VoucherKu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,flexDirection:'row',paddingHorizontal:15}}>
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                            <Text style={styles.title}>VoucherKu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                            <Text style={styles.title}>VoucherKu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                            <Text style={styles.title}>VoucherKu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require('../../Assets/Images/ic_voucherku.png')} style={styles.icon}/>
                            <Text style={styles.title}>VoucherKu</Text>
                        </TouchableOpacity>
                    </View>     
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15,
        backgroundColor:'#FFF',
    },
    menu:{
        padding:5,
        marginHorizontal:10,
        alignContent:'center',
        justifyContent:'center'
    },
    icon:{
        width:60,
        height:60,
    },
    title:{
        marginTop:15,
        fontSize:11
    },
    image: {
        height: 145,
        borderRadius: 10
    },
  });