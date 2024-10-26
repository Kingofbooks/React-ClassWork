import React from 'react';
import { Grid, Container } from '@mui/material';
import DestinationCard from '../components/DestinationCard';

const destinations = [
  {
    name: 'Paris',
    description: 'The city of lights and love.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'New York',
    description: 'The city that never sleeps.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Tokyo',
    description: 'A blend of tradition and modernity.',
    image: 'https://via.placeholder.com/300x200',
  },
];

const Destinations = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {destinations.map((destination, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DestinationCard destination={destination} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Destinations;
