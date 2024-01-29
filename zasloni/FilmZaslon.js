import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native'
import React, {useEffect,useState} from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import Glumci from '../komponente/glumci';
import { fetchFilmCredits, fetchFilmdetalji, slika_manja, slika_najveca } from '../api/bazaFilmova';

var {width,height} = Dimensions.get('window');
export default function FilmZaslon(){
    const{params: item} = useRoute();
    const navigacija = useNavigation();
    const[glumci,setGlumci] = useState([]);
    const[film,setFilm] = useState({});

    useEffect(()=>{
        //Pozivanje api-ja za detalje filma
        //console.log('id filma',item.id);
         getFilmDetalji(item.id);
         getFilmCredits(item.id);
    },[item])

    const getFilmDetalji = async id =>{
        const data = await fetchFilmdetalji(id);
        //console.log(data)
        if(data) setFilm(data);
    }

    const getFilmCredits = async id =>{
        const data = await fetchFilmCredits(id);
        if(data && data.cast) setGlumci(data.cast);
    }

    return(
        <ScrollView
            contentContainerStyle={{paddingBottom:20}}
            style={stilovi.zaslon}
        >
            {/* Kreiranje buttona za povratak i poster filam*/}
            <View>
                <View style={stilovi.safe_view}>
                    <TouchableOpacity style = {stilovi.touch} onPress={()=> navigacija.goBack()}>
                        <ChevronLeftIcon size="25" strokeWidth={2.5} color="white"/>
                    </TouchableOpacity>
                    
                </View>
                <View>
                    <Image
                        //source={require('../assets/slike/Spider-Man-_Across_the_Spider-Verse_poster.png')}
                        source={{uri: slika_najveca(film?.poster_path)}}
                        style={{width, height:height * 0.5}}
                    />
                    

                </View>
            </View>

            {/*Detalji o filmu */}
            <View style ={stilovi.detalji}>
                <Text style={stilovi.naslov}> 
                {
                    film?.title
                }
                </Text>
                {
                    film?.id?(
                        <Text style={stilovi.opcenito}>
                            {film?.status} * {film?.release_date?.split('-')[0]} * {film?.runtime} min
                        </Text>
                    ):null
                }
                <View style={stilovi.zanrovi}>
                    
                {
                    film?.genres?.map((genre,index)=>{
                        return(
                            <Text key={index}style={stilovi.opcenito}>
                            {genre?.name} *
                            </Text>
                        )

                    })
                }
                </View> 
                {/* View o opisu filma */}
                <Text style={stilovi.opis}>
                    {
                        film?.overview
                    }
                </Text>


            </View>

            {/*O glumcima */}
            <Glumci navigacija={navigacija} glumci={glumci}/>

            
        </ScrollView>
    )
}

const stilovi = StyleSheet.create({
    zaslon: {
        flex:1,
        backgroundColor: '#3C3838'
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
        marginTop:3
    },
    naslov:{
        color:"#FFFFFF",
        textAlign:'center',
        fontSize:20,
        letterSpacing: 2.5
    },
    opcenito:{
        color:"#FFFFFF",
        textAlign:'center',
        fontSize:16,
        lineHeight:24
    },
    zanrovi:{
        flexDirection:'row',
        justifyContent:'center',
        marginRight:4,
        marginLeft:4,
    },
    opis:{
        color:"#FFFFFF",
        textAlign:'center',
        fontSize:12,
        lineHeight:18
    }
    
})
