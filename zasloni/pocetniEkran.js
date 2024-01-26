import {View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3Icon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import FilmoviTrending from '../komponente/filmoviTrending';
import ListaFilmova from '../komponente/listaFilmova';

/*const ios = Platform.OS == 'ios';*/
export default function pocetniEkran(){
    const [trending, setTrending] = useState([1,2,3]);
    const[nadolazeci, setNadolazece] = useState([1,2,3]);
    const[najbolji, setNajbolji] = useState([1,2,3]);

    return(
        <View style = {stilovi.cijeli_Ekran}>
            <SafeAreaView style={stilovi.gornji_View}>
                <StatusBar style="light"/>
                <View style={stilovi.gornji_View}>
                <Bars3Icon size="30" strokeWidth={2} color="blue"/>
                <Text 
                    style = {{
                        color: "#F0C7C7",
                        fontFamily: "serif",
                        fontSize:25
                }}> 
                Filmovi 
                </Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color="blue"/>                
                </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{padingBottom:10}}
            >
                <FilmoviTrending data = {trending}/>

                <ListaFilmova title = "Nadolazeći" data = {nadolazeci} />
                <ListaFilmova title = "Najbolje cijenjeni" data={najbolji}/>

            </ScrollView>

        </View>
    )
}


const stilovi = StyleSheet.create({
    cijeli_Ekran: {
        backgroundColor: '#3C3838',
        flex:1
        
    },

    
    gornji_View: {
        justifyContent: 'space-between',
        backgroundColor: '#3C3838',
        flexDirection: 'row',
        flex:1
    

    },

    logo: {
        color: "F0C7C7",
        fontFamily: "serif"

    }
})


