import axios from 'axios';
import { ApiKey } from '../konstante';

//Endpoints
const apiBaza = 'https://api.themoviedb.org/3';
const trendingFilmoviEndPoint = `${apiBaza}/trending/movie/day?api_key=${ApiKey}&language=en-US`
const nadolazeciFilmoviEndPoint=`${apiBaza}/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`
const najboljiFilmoviEndPoint=`${apiBaza}/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`

//Endpoints detalji filmova
const filmDetaljiEndpoint = id => `${apiBaza}/movie/${id}?api_key=${ApiKey}`
const filmCreditsEndpoint = id => `${apiBaza}/movie/${id}/credits?api_key=${ApiKey}`

const glumacDetaljiEndpoint = id => `${apiBaza}/person/${id}?api_key=${ApiKey}`

export const slika_najveca = path => path? `https://image.tmdb.org/t/p/w500/${path}`: null;
export const slika_srednja = path => path? `https://image.tmdb.org/t/p/w342/${path}`: null;
export const slika_manja = path => path? `https://image.tmdb.org/t/p/w185/${path}`: null;


const apiCall = async(endpoint, params)=>{
    const options={
        method:'GET',
        url: endpoint,
        params: params? params:{}
    }

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error:',error)
        return{}
    }
}

export const fetchTrending = ()=>{
    return apiCall(trendingFilmoviEndPoint);
}
export const fetchNadolazeci = ()=>{
    return apiCall(nadolazeciFilmoviEndPoint);
}
export const fetchNajbolji = ()=>{
    return apiCall(najboljiFilmoviEndPoint);
}

export const fetchFilmdetalji = id =>{
    return apiCall(filmDetaljiEndpoint(id))
}
export const fetchFilmCredits = id =>{
    return apiCall(filmCreditsEndpoint(id))
}
export const fetchGlumacdetalji = id =>{
    return apiCall(glumacDetaljiEndpoint(id))
}