import React, { useEffect, useState } from 'react';
import styles from './GridSection.module.css';
import Card from '../Card/Card';
import { fetchTopAlbums } from '../../api/api';   

const GridSection = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbumsData = async () => {
      try {
        const albumsData = await fetchTopAlbums();
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error fetching top albums:", error);
      }
    };

    fetchAlbumsData();
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