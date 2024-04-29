    // Card.js
    import React from 'react';
    import styles from './Card.module.css';
    import { Chip, Tooltip } from '@mui/material';

    const Card = ({ data }) => {
      const { image, follows, title } = data;

      return (
        <Tooltip title={`${follows} Follows`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" loading="lazy" />
              <div className={styles.banner}>
                <Chip
                  label={`${follows} Follows`}
                  size="small"
                  className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    };

    export default Card;
