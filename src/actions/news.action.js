import axios from 'axios';

export const generalNewsAction = () => async (dispatch) => {
    dispatch({type: 'GENERALNEWS_GET_REQUEST'})
    try{
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {
              q: 'general',
              count: '18',
              freshness: 'Day',
              textFormat: 'Raw',
              safeSearch: 'Off'
            },
            headers: {
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': 'dc45336db1mshbdcb413762643a8p104984jsnba10bbd8bb51',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'GENERALNEWS_GET_SUCCESS', payload: data.data.value});
    }catch (err){
        dispatch({type: 'GENERALNEWS_GET_FAILURE', payload: err})
    }
}

export const businessNewsAction = () => async (dispatch) => {
    dispatch({type: 'BUSINESSNEWS_GET_REQUEST'})
    try{
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {
              q: 'business markets',
              count: '18',
              freshness: 'Day',
              textFormat: 'Raw',
              safeSearch: 'Off'
            },
            headers: {
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': 'dc45336db1mshbdcb413762643a8p104984jsnba10bbd8bb51',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'BUSINESSNEWS_GET_SUCCESS', payload: data.data.value});
    }catch (err){
        dispatch({type: 'BUSINESSNEWS_GET_FAILURE', payload: err})
    }
}

export const techNewsAction = () => async (dispatch) => {
    dispatch({type: 'TECHNEWS_GET_REQUEST'})
    try{
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {
              q: 'Technology AI',
              count: '18',
              freshness: 'Day',
              textFormat: 'Raw',
              safeSearch: 'Off'
            },
            headers: {
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': 'dc45336db1mshbdcb413762643a8p104984jsnba10bbd8bb51',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'TECHNEWS_GET_SUCCESS', payload: data.data.value});
    }catch (err){
        dispatch({type: 'TECHNEWS_GET_FAILURE', payload: err})
    }
}

export const moviesNewsAction = () => async (dispatch) => {
    dispatch({type: 'MOVIESNEWS_GET_REQUEST'})
    try{
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {
              q: 'movies tollywood bollywood',
              count: '18',
              freshness: 'Day',
              textFormat: 'Raw',
              safeSearch: 'Off'
            },
            headers: {
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': 'dc45336db1mshbdcb413762643a8p104984jsnba10bbd8bb51',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'MOVIESNEWS_GET_SUCCESS', payload: data.data.value});
    }catch (err){
        dispatch({type: 'MOVIESNEWS_GET_FAILURE', payload: err})
    }
}

export const sportsNewsAction = () => async (dispatch) => {
    dispatch({type: 'SPORTSNEWS_GET_REQUEST'})
    try{
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {
              q: 'sports cricket',
              count: '18',
              freshness: 'Day',
              textFormat: 'Raw',
              safeSearch: 'Off'
            },
            headers: {
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': 'dc45336db1mshbdcb413762643a8p104984jsnba10bbd8bb51',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'SPORTSNEWS_GET_SUCCESS', payload: data.data.value});
    }catch (err){
        dispatch({type: 'SPORTSNEWS_GET_FAILURE', payload: err})
    }
}

export const userBlogsAction = () => async (dispatch) => {
  dispatch({type: 'USERBLOGS_GET_REQUEST'})
  try{
    const data = await axios.get('https://guvi-backend.vercel.app/getBlogs');
    dispatch({type: 'USERBLOGS_GET_SUCCESS', payload: data.data});
  }catch(err){
    dispatch({type: 'USERBLOGS_GET_FAILURE', payload: err});
  }
}

export const searchNewsAction = (value) => async (dispatch) => {
    dispatch({type: 'SEARCHNEWS_GET_REQUEST'})
    try{
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {
              q: value,
              count: '18',
              freshness: 'Day',
              textFormat: 'Raw',
              safeSearch: 'Off'
            },
            headers: {
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': 'dc45336db1mshbdcb413762643a8p104984jsnba10bbd8bb51',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        var data = await axios.request(options);
        dispatch({type: 'SEARCHNEWS_GET_SUCCESS', payload: data.data.value});
    }catch (err){
        dispatch({type: 'SEARCHNEWS_GET_FAILURE', payload: err})
    }
}