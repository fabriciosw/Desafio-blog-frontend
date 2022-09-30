import React from 'react';
import { Col } from 'react-bootstrap';
import Aside from '../../components/Aside';
import Text from '../../components/Text';
import Section from '../../components/Section';
import './styles.scss';

const Home: React.FunctionComponent = () => (
  <Section className="p-0 d-flex " title="Página inicial" description="Página inicial">
    <Col md={12} className="home">
      <Aside />
      <div className="home__body">
        <Text as="h1" size="2rem" weight={700} color="#E0E5E9">
          Página inicial
        </Text>
        <Text as="small" size=".85rem" weight={400} color="#E0E5E9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </Text>
      </div>
    </Col>
  </Section>
);

export default Home;
