
// GridSection.jsx
import React, { useEffect, useState } from 'react';
import styles from './GridSection.module.css';
import Card from '../Card/Card';
import axios from "axios";

const GridSection = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
  
    useEffect(() => {
      const fetchTopAlbums = async () => {
        try {
          const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
          setTopAlbums(response.data);
        } catch (error) {
          console.error("Error fetching top albums:", error);
        }
      };
  
      const fetchNewAlbums = async () => {
        try {
          const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
          setNewAlbums(response.data);
        } catch (error) {
          console.error("Error fetching new albums:", error);
        }
      };
  
      fetchTopAlbums();
      fetchNewAlbums();
    }, []);
  
    return (
      <div className={styles.gridSection}>
        <div className={styles.header}>
          <h3>Top Albums</h3>
          <h4 className={styles.toggleText}>Collapse All</h4>
        </div>
  
        <div className={styles.cardsWrapper}>
          <div className={styles.wrapper}>
            {topAlbums.map((album) => (
              <Card key={album.id} data={album} />
            ))}
          </div>
        </div>
  
        <div className={styles.header}>
          <h3>New Albums</h3>
          <h4 className={styles.toggleText}>Collapse All</h4>
        </div>
  
        <div className={styles.cardsWrapper}>
          <div className={styles.wrapper}>
            {newAlbums.map((album) => (
              <Card key={album.id} data={album} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default GridSection;
