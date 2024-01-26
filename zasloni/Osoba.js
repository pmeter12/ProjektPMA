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
            <SafeAreaView style={stilovi.safe_view}>
                    <TouchableOpacity style = {stilovi.touch} onPress={()=> navigacija.goBack()}>
                        <ChevronLeftIcon size="25" strokeWidth={2.5} color="white"/>
                    </TouchableOpacity>
                    
            </SafeAreaView>
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
    }

})

