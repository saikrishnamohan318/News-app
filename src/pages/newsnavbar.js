import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { generalNewsAction, businessNewsAction, techNewsAction, moviesNewsAction, sportsNewsAction, userBlogsAction, searchNewsAction } from "../actions/news.action";
import newslogo from '../assets/newslogo.png';
import NewsPageComponent from "./newspage";
import Loader from "../components/loader";

function NewsComponent(){
    const dispatch = useDispatch();
    const [newsData,setNewsData] = useState([]);
    const [searchvalue,setSearchValue] = useState('');
    const [bool,setBool] = useState(false);

    //getting general news from store
    const data = useSelector(state=>state.generalNews);
    //dispatching general news action
    useEffect(()=>{
       dispatch(generalNewsAction());
    },[])
    var generalNews = () => {
        dispatch(generalNewsAction());
        setBool(false);
    }
    //maintaining store data
    useEffect(()=>{
        setNewsData(data);
    },[data])

    //getting business news from store
    const data1 = useSelector(state=>state.businessNews);
    //dispatching business action
    var businessNews = () => {
        dispatch(businessNewsAction());
        setBool(false);
    }
    //maintaining store data
    useEffect(()=>{
        setNewsData(data1);
    },[data1])

    //getting tech news from store
    const data2 = useSelector(state=>state.techNews);
    //dispatching tech action
    var technologyNews = () => {
        dispatch(techNewsAction());
        setBool(false);
    }
    //maintaining store data
    useEffect(()=>{
        setNewsData(data2);
    },[data2])

    //getting movie news from store
    const data3 = useSelector(state=>state.moviesNews);
    //dispatching movie news action
    var moviesNews = () => {
        dispatch(moviesNewsAction());
        setBool(false);
    }
    //maintaining store data
    useEffect(()=>{
        setNewsData(data3);
    },[data3])

    //getting sports news from store
    const data4 = useSelector(state=>state.sportsNews);
    //dispatching sports news action
    var sportsNews = () => {
        dispatch(sportsNewsAction());
        setBool(false);
    }
    //maintaining store data
    useEffect(()=>{
        setNewsData(data4);
    },[data4])

    //getting search news from store
    const data5 = useSelector(state=>state.searchNews);
    //dispatching search news action
    var searchNews = () => {
        if(searchvalue === ''){
            alert('Enter any Topic related to news');
            setBool(true);
        }
        dispatch(searchNewsAction(searchvalue));
        setSearchValue('');
    }
    //maintaining store data
    useEffect(()=>{
        setNewsData(data5);
    },[data5])

    //getting user uploaded blogs from store
    const data6 = useSelector(state=>state.userBlogs);
    //dispatching user blogs action
    var userBlogs = () => {
        dispatch(userBlogsAction());
        setBool(false);
    }
    //maintaining store data
    useEffect(()=>{
        setNewsData(data6);
    },[data6]);

    //hamburger menu list show/hide
    var lists = document.getElementById('navbarNav');
    var showList = () => {
        if(lists.style.display === 'none'){
            lists.style.display = 'block';
        }else {
            lists.style.display = 'none';
        }
    }
    return(
        <>
        (
            <div className="maindiv">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={newslogo} alt='newslogo' width='80px' height='80px'/></a>
                        <button className="navbar-toggler" type="button" onClick={showList} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars fa-xl"></i></span>
                        </button>
                        <div className="collapse navbar-collapse mx-4" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#home" onClick={generalNews}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#business" onClick={businessNews}>Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#technology" onClick={technologyNews}>Technology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#movies" onClick={moviesNews}>Movies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sports" onClick={sportsNews}>Sports</a>
                                </li>
                                <li className="nav-item">
                                    <form className="d-flex navform">
                                        <input className="form-control me-2" type="search" placeholder="Search news" aria-label="Search" onChange={e=>setSearchValue(e.target.value)} value={searchvalue}/>
                                        <button className="btn btn-outline-success" type="button" onClick={searchNews}>Search</button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {newsData && newsData.isLoading ? (bool ? <NewsPageComponent /> : <Loader />) : <NewsPageComponent newsData={newsData.data}/>}
            </div>
        )
        </>
    )
}
export default NewsComponent;