import {View, Text, Dimensions, ScrollView, StyleSheet, SafeAreaView,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

var{ width, height } = Dimensions.get('window');

export default function Osoba(){
    const navigacija = useNavigation();

    return(
        <ScrollView style={stilovi.zaslon} contentContainerStyle={{paddingBottom:15}}>
        
            {/*Button za povratak */}
            <View style={stilovi.safe_view}>
                    <TouchableOpacity style = {stilovi.touch} onPress={()=> navigacija.goBack()}>
                        <ChevronLeftIcon size="25" strokeWidth={2.5} color="white"/>
                    </TouchableOpacity>
                    
            </View>
            {/* Detalji o glumcima */}
            <View>
                <View style={stilovi.detalji}>
                    <View style={stilovi.view_slika}>
                        <Image
                            source={require('../assets/slike/ShameikMoore.png')}
                            style={stilovi.slika}
                        />
                    </View>
                </View>
                <View style={{marginTop:6}}>
                    <Text style={stilovi.ime_glumca}>
                        Shameik Moore
                    </Text>
                    <Text style={stilovi.detalji_glumac}>
                    Atlanta, Georgia, USA
                    </Text>
                </View>
                <View style={stilovi.view_detalji}>
                    <View style={stilovi.view_opce_inf}>
                        <Text style={stilovi.detalji_glumac}>Spol</Text>
                        <Text style={stilovi.detalji_glumac}>Muškarac</Text>
                    </View>
                    <View style={stilovi.view_opce_inf}>
                        <Text style={stilovi.detalji_glumac}>Datum rođenja</Text>
                        <Text style={stilovi.detalji_glumac}>4. svibnja, 1995.</Text>
                    </View>
                    <View style={stilovi.view_opce_inf}>
                        <Text style={stilovi.detalji_glumac}>Posao</Text>
                        <Text style={stilovi.detalji_glumac}>Glumac</Text>
                    </View>

                </View>
                <View style={stilovi.view_opis}>
                    <Text style={stilovi.tekst_opis}>
                        Biografija
                    </Text>
                    <Text style={stilovi.detalji_glumac}>
                        Moore started off with bit roles in shows and films such as Tyler Perry's House of Payne, Reed Between the Lines, and Joyful Noise. In 2013, he had his first main television role on the sketch-comedy series Incredible Crew, which aired on Cartoon Network before being canceled after one season.  
                    </Text>

                </View>
            </View>
        </ScrollView>
    )
}

const stilovi = StyleSheet.create({
    zaslon:{
        flex:1,
        backgroundColor:"#3C3838",

    },
    safe_view:{
        backgroundColor:"#3C3838",
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical:30
    },
    touch:{
        padding:1,
    },
    detalji:{
        flexDirection:'row',
        justifyContent:'center',

    },
    slika:{
        height: height * 0.40,
        width: width * 0.60
    },
    view_slika:{
        alignItems:'center',
        borderRadius:50,
        overflow:'hidden'
    },
    ime_glumca:{
        color:"#FFFFFF",
        fontSize:16,
        textAlign:'center'

    },
    detalji_glumac:{
        color:"#F2E3E3",
        fontSize:12,
        textAlign:'center'
    },
    view_detalji:{
        marginHorizontal:3,
        marginTop:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"#CAC3C3"

    },
    view_opce_inf:{
        borderRightWidth:2,
        paddingHorizontal:2,
        alignItems:'center'
    },
    view_opis:{
        marginVertical:6,
        marginHorizontal:4,
        letterSpacing:2
    },
    tekst_opis:{
        color:"#FFFFFF",
        fontSize:14

    }


})

