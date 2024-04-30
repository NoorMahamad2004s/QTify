
  
  // import React from 'react'
  import React, { useEffect, useState } from 'react'
  import "./App.css";
  import NavBar from "./components/NavBar/NavBar";
  import Header from "./components/Header/Header";
  import GridSection from './components/GridSection/GridSection'; 
  import Line from './components/Line/Line';
  import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from './api/api';
 


  const App = () => {

    const [dataTopAlbums, setDataTopAlbums] = useState([]);
    const [dataNewAlbum, setDataNewAlbum] = useState([]);
    const [dataSong, setDataSong] = useState([]);
  
    const getDataTopAlbums = async () => {
      try {
        const res = await fetchTopAlbums();
        setDataTopAlbums(res);
      } catch (error) {
        console.error(error)
      }
    }
  
    const getDataNewAlbums = async () => {
      try {
        const res = await fetchNewAlbums();
        setDataNewAlbum(res);
      } catch (error) {
        console.error(error)
      }
    }
  
    const getDataSongs = async () => {
      try {
        const res = await fetchSongs();
        setDataSong(res);
      } catch (error) {
        console.error(error)
      }
    }
  
    useEffect(() => {
      getDataTopAlbums();
      getDataNewAlbums();
      getDataSongs()
    }, [])
  
    return (
      <div>
        <NavBar data={dataTopAlbums} />
        <Header />
        <GridSection title={"Top Albums"} data={dataTopAlbums} type={"album"} />
        <GridSection title={"New Albums "} data={dataNewAlbum} type={"album"} />
        <Line />
        <GridSection title={"Songs "} data={dataSong} type={"song"} setDataSong={setDataSong} />
       
      </div>
    )
  }
  
  export default App;