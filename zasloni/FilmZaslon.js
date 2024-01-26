import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native'
import React, {useEffect,useState} from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import Glumci from '../komponente/glumci';

var {width,height} = Dimensions.get('window');
export default function FilmZaslon(){
    const{params: item} = useRoute();
    const navigacija = useNavigation();
    const[glumci,setGlumci] = useState([1,2,3,4]);
    

    useEffect(()=>{
        //Pozivanje api-ja za detalje filma
    },[item])
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
                        source={require('../assets/slike/Spider-Man-_Across_the_Spider-Verse_poster.png')}
                        style={{width, height:height * 0.5}}
                    />
                    

                </View>
            </View>

            {/*Detalji o filmu */}
            <View style ={stilovi.detalji}>
                <Text style={stilovi.naslov}> 
                {"Spiderman"}
                </Text>
                <Text style={stilovi.opcenito}>
                    Izašao * 2023 * 140 min
                </Text>   
                <View style={stilovi.zanrovi}>
                    <Text style={stilovi.opcenito}>
                        Akcija * Komedija
                    </Text>
                </View> 
                {/* View o opisu filma */}
                <Text style={stilovi.opis}>
                Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.
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
