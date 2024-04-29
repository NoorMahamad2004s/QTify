
// Section.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AlbumCard from '../Card/Card';
import '../Section/Section.module.css'; // Import CSS file

const Section = ({ title }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(
          'https://qtify-backend-labs.crio.do/albums/top'
        );
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching top albums:', error);
      }
    };

    fetchTopAlbums();
  }, []);

  return (
    <div className="section-container">
      <div className="section-header">
        <Typography variant="h5" className="section-title">
          {title}
        </Typography>
        <Button variant="outlined" className="section-button">
          Collapse
        </Button>
      </div>
      <Grid container spacing={2}>
        {albums.map((album) => (
          <Grid item xs={12} sm={6} md={4} key={album.id}>
            <AlbumCard
              image={album.image}
              follows={album.follows}
              name={album.title}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section;
