import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import pocetniEkran from '../zasloni/pocetniEkran.js';
import FilmZaslon from '../zasloni/FilmZaslon.js';
import Osoba from '../zasloni/Osoba.js';
const Stack = createNativeStackNavigator();

export default function AppNavigacija(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Pocetna" options = {{headerShown: false}} component = {pocetniEkran} />
                <Stack.Screen name = "ZaslonFilm" options ={{headerShown:false}} component = {FilmZaslon} />
                <Stack.Screen name = "Osoba" options={{headerShown:false}} component={Osoba}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}