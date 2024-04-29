
// GridSection.jsx
import React, { useEffect, useState } from 'react';
import styles from './GridSection.module.css';
import Card from '../Card/Card';
import axios from "axios";

const GridSection = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching top albums:", error);
      }
    };

    fetchTopAlbums();
  }, []);

  return (
    <div className={styles.gridSection}>
      <div className={styles.header}>
        <h3>Top Albums</h3>
        <h4 className={styles.toggleText}>Collapse All</h4>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.wrapper}>
          {albums.map((album) => (
            <Card key={album.id} data={album} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridSection;
