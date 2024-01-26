import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'

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
                                    source={require('../assets/slike/ShameikMoore.png')}

                                />
                                <Text style ={stilovi.glumac_tekst}
                                >
                                    {
                                        ime_lika.length>10 ? ime_lika.slice(0,10)+'...':ime_lika
                                    }
                                    
                                </Text>
                                <Text style ={stilovi.glumac_tekst}
                                >
                                    {
                                        ime_glumca.length>10 ? ime_glumca.slice(0,10)+'...':ime_glumca
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