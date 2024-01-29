import {View, Text, TouchableOpacity, StyleSheet,ScrollView} from 'react-native'
import {React, useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3Icon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import FilmoviTrending from '../komponente/filmoviTrending';
import ListaFilmova from '../komponente/listaFilmova';
import { useNavigation } from '@react-navigation/native';
import { fetchNadolazeci, fetchNajbolji, fetchTrending } from '../api/bazaFilmova';

/*const ios = Platform.OS == 'ios';*/
export default function pocetniEkran(){
    const [trending, setTrending] = useState([]);
    const[nadolazeci, setNadolazece] = useState([]);
    const[najbolji, setNajbolji] = useState([]);
    const navigacija = useNavigation();

    useEffect(()=>{
        getTrendingFilmovi();
        getNadolazeciFilmovi();
        getNajboljiFilmovi();
    },[])

    const getTrendingFilmovi = async()=>{
        const data = await fetchTrending();
        if(data && data.results) setTrending(data.results);
        
    }
    const getNadolazeciFilmovi = async()=>{
        const data = await fetchNadolazeci();
        if(data && data.results) setNadolazece(data.results);
        
    }
    const getNajboljiFilmovi = async()=>{
        const data = await fetchNajbolji();
        if(data && data.results) setNajbolji(data.results);
        
    }

    return(
        <View style = {stilovi.cijeli_Ekran}>
            <View style={stilovi.gornji_View}>
                <StatusBar style="light"/>
                <View style={stilovi.view_red}>
                <Bars3Icon size="30" strokeWidth={2} color="blue"/>
                <Text 
                    style = {{
                        color: "#F0C7C7",
                        fontFamily: "serif",
                        fontSize:20
                }}> 
                Filmovi 
                </Text>
                <TouchableOpacity onPress={()=> navigacija.navigate('Pretraga')}>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color="blue"/>                
                </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{padingBottom:10}}
            >
                {   trending.length>0 && <FilmoviTrending data = {trending}/>
                }

                <ListaFilmova title = "Nadolazeći" data = {nadolazeci} />
                <ListaFilmova title = "Najbolje ocijenjeni" data={najbolji}/>

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
        flex:1,
    },
    view_red:{
        justifyContent: 'space-between',
        backgroundColor: '#3C3838',
        flexDirection: 'row',
        flex:1,
        marginVertical:20
        
    }

    
})


