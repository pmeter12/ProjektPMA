import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { slika_manja } from '../api/bazaFilmova';

var {width,height} = Dimensions.get('window');
export default function ListaFilmova({title, data}){
    //let imeFilma = "Oppenheimer";
    const navigacija = useNavigation();
    return(
        <View style={stilovi.view_nadolazeci}>
            <View style={stilovi.view_naslov}>
                <Text style={{
                    color:"#FFFFFF",
                    fontSize:15
                }}>{title}
                </Text>
                <TouchableOpacity>
                    <Text style={{
                        color:"#eab308",
                        fontSize: 15
                    }}>
                    Pregledajte sve    
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {
                    data.map((item,index)=>{
                        return(
                            <TouchableWithoutFeedback
                                key = {index}
                                onPress={()=>navigacija.navigate("ZaslonFilm",item)}
                            >
                                <View style={stilovi.view_opis}>
                                    <Image
                                        source={{uri:slika_manja(item.poster_path)}}
                                        style={{
                                            width: width * 0.30,
                                            height: height * 0.20,
                                            borderRadius: 50
                                        }}
                                    />
                                    <Text style={{
                                        color: "#D4D4D4",
                                        marginLeft:1,
                                    }}>
                                    {
                                        item.title.length > 10 ? item.title.slice(0,10)+'...': item.title
                                    }
                                    </Text>
                                </View>
                                
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
        
    )
}

const stilovi = StyleSheet.create({
    view_nadolazeci: {
        fontSize:14,
        marginBottom:8,
        marginTop:4
    },

    view_naslov:{
        marginLeft:4,
        marginRight:4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },

    view_opis: {
        marginTop:1,
        marginRight:4
    }


    
})

