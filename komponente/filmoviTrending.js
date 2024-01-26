import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

var {width,height} = Dimensions.get('window');

export default function FilmoviTrending({data}){
    const navigacija = useNavigation();
    const handleClick = (item) =>{
        navigacija.navigate("ZaslonFilm", item);
    }
    
    return(
        <View style={stilovi.view}>
            <Text style={stilovi.tekst}>Filmovi u trendingu</Text>
            <Carousel 
                data={data}
                renderItem={({item})=> <FilmKartica item = {item} handleClick = {handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{display:'flex',alignItems:'center'}}
            />
            </View>
    )
}
const FilmKartica = ({item, handleClick})=>{
    return(
        <TouchableWithoutFeedback onPress = {() => handleClick (item)}>
            <Image
                source={require('../assets/slike/Spider-Man-_Across_the_Spider-Verse_poster.png')}
                style ={{
                    width: width * 0.5,
                    height: height * 0.3,
                    borderRadius: 50
                }}

            />
        </TouchableWithoutFeedback>
    )
}


const stilovi = StyleSheet.create({
    view:{
        marginBottom:8,
        
        
    },
    tekst:{
        color:"#F9ECEC",
        fontSize: 20,
        marginBottom: 5,
        marginLeft:4,
        marginRight:4
        
    }

    

})

    