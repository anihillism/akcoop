import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, Heart } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Our Story</Header>
    <Heart />
    <Container center={center}>
      <h3>
        About us Honk Honk!
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
