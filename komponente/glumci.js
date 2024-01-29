import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { slika_manja } from '../api/bazaFilmova'

export default function Glumci({glumci, navigacija}){
    let ime_glumca = 'Shameik Moore'
    let ime_lika = 'Miles Morales'
    return(
        <View style={stilovi.view}>
            <Text style={stilovi.tekst}>Glavne uloge</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:15}}
            >
                {
                    glumci && glumci.map((osoba, index) =>{
                        return(
                            <TouchableOpacity
                                key={index}
                                style={stilovi.glumac_touch}
                                onPress={()=>navigacija.navigate("Osoba", osoba)}
                            >
                                <Image
                                    style={stilovi.slika}
                                    //source={require('../assets/slike/ShameikMoore.png')}
                                    source={{uri:slika_manja(osoba?.profile_path)}}
                                />
                                <Text style ={stilovi.glumac_tekst}
                                >
                                    {
                                        osoba?.character.length>10 ? osoba?.character.slice(0,10)+'...':osoba?.character
                                    }
                                    
                                </Text>
                                <Text style ={stilovi.glumac_tekst}
                                >
                                    {
                                        osoba?.original_name.length>10 ? osoba?.original_name.slice(0,10)+'...':osoba?.original_name
                                    }
                                    
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const stilovi = StyleSheet.create({
    view:{
        marginVertical:6
    },

    tekst:{
        color:"#FFFFFF",
        marginBottom:5,
        marginHorizontal:4
    },
    glumac_touch:{
        marginRight:4, 
        alignItems:'center'
    },
    glumac_tekst:{
        marginTop:1,
        color:"#FFFFFF",
        fontSize:12
    },
    slika:{
        height:90,
        borderRadius:50,
        width:90,
    }
    
})