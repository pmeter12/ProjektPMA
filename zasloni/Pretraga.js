import {View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image} from 'react-native'
import React, {useCallback, useState} from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import {debounce} from 'lodash'
import { fetchPretragaFilm, slika_manja } from '../api/bazaFilmova';

const{width,height} = Dimensions.get('window');

export default function Pretraga(){
    const navigacija=useNavigation();
    const[rezultati,setRezultati] =useState([]);
    const handlePretraga = vrijednost =>{
       // console.log('vrijednost:',vrijednost);
        if(vrijednost && vrijednost.length > 2){
            fetchPretragaFilm({
                query:vrijednost,
                include_adult:'false',
                language:'en-US',
                page:'1'
            }).then(data =>{
                //console.log('filmovi:',data);
                if(data && data.results) setRezultati(data.results);
            })
                
            
        }else{
            setRezultati([]);
        }
    }

    const handleTextDebounce = useCallback(debounce(handlePretraga, 400, []));
    return(
        <View style={stilovi.zaslon}>
            <View style={stilovi.view_pretraga}>
                <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder='Pretraži film'
                    placeholderTextColor={"#CBC9C9"}
                    style={stilovi.mjesto_pretrage}
                />
                <TouchableOpacity
                    onPress={()=> navigacija.navigate('Pocetna')}
                    style={stilovi.touch}
                >
                    <XMarkIcon size="25" color="#FFFFFF"/>
                </TouchableOpacity>
            </View>

            {/*Rezultati pretrage */}
            {
                rezultati.length>0 ?(
                    <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:15}}
                style={stilovi.skrol}
            >
                <Text style={stilovi.tekst_pretrage}>Rezultati:({rezultati.length}) </Text>
                <View style={stilovi.view_rezultati}>
                 {
                    rezultati.map((item,index) =>{
                        return(
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={()=> navigacija.push("ZaslonFilm",item)}
                            >
                                <View style={{
                                    marginTop:8,
                                    marginBottom:4

                                }}>
                                    <Image style={stilovi.slika}
                                        //source={require('../assets/slike/oppenheimer.png')}
                                        source={{uri:slika_manja(item?.poster_path)}}
                                    >
                                    </Image>
                                    <Text style={{color:"#FFFFFF"}}>
                                        {item?.title.length > 20? item?.title.slice(0,20)+'...':item?.title}
                                    </Text>

                                </View>


                            </TouchableWithoutFeedback>

                        )
                    })
                 }
                    
                </View>

            </ScrollView>

                ):(
                    <View 
                        style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
                    >
                        <Image 
                            style={stilovi.slika}
                            source={require('../assets/slike/slika.png')}/>

                    </View>

                )
            }
            
        </View>
    )
}

const stilovi = StyleSheet.create({
    zaslon:{
        backgroundColor: '#3C3838',
        flex:1
    },
    view_pretraga:{
        marginHorizontal:4,
        marginBottom:3,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#C7C7C7',
        borderRadius:50
    },
    mjesto_pretrage:{
        flex:1,
        paddingBottom:1,
        paddingLeft:6,
        fontSize:14,
        color:"#FFFFFF"
    },
    touch:{
        padding:3,
        margin:1,
        borderRadius:50
    },
    scroll:{
        marginTop:12
    },
    tekst_pretrage:{
        marginLeft:1,
        color:"#FFFFFF"
    },
    view_rezultati:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    slika:{
        borderRadius:50,
        width:width*0.4,
        height:height*0.3
    }
})