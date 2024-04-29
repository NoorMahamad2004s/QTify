// Card.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import '../Card/Card.module.css'; 
const AlbumCard = ({ image, follows, name }) => {
  return (
    <Card className="card">
      <CardMedia
        className="media"
        image={image}
        title="Album Image"
      />
      <Chip label={`Follows: ${follows}`} className="chip" />
      <div className="bottomSection">
        <Typography variant="h6">{name}</Typography>
      </div>
    </Card>
  );
};

export default AlbumCard;
