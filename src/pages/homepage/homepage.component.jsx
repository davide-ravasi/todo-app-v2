import React from 'react';

import './homepage.styles.scss';

import Container from '@material-ui/core/Container';
import CardBox from '../../components/card-box/card-box.component';

const HomePage = () => {
  return (
    <div>
        <h1>homepage</h1>
        <Container maxWidth="lg" className="wrapper-grid">
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
        </Container>  
    </div>
  );
}

export default HomePage;