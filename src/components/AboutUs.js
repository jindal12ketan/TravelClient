import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src="/images/about-page-1.jpg" fluid />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo sit amet magna ullamcorper congue. Aliquam ac elit at justo venenatis dapibus. In semper sit amet dolor ut tristique. Ut vel ante aliquet, dapibus ipsum in, faucibus justo. Sed ultrices, nisl eget vulputate bibendum, purus arcu ultrices ex, sed vulputate massa nibh ac libero.</p>
          <p>Etiam eu mauris quis velit pellentesque suscipit ac vitae ante. Ut in turpis elit. Duis vestibulum libero ante, non dictum nunc rhoncus sit amet. In hac habitasse platea dictumst. Sed vel purus vel odio faucibus tempor id et dolor. Nulla eget sapien in mi faucibus facilisis eu at elit.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>Our mission is to provide the best travel experience for our customers. We believe that traveling is not just about seeing new places, but also about creating unforgettable memories and experiences. That's why we always go above and beyond to make sure that our customers have the time of their lives.</p>
          <p>Whether you're looking for a relaxing beach vacation or an adventurous trip to the mountains, we've got you covered. Our team of experienced travel experts will work with you to create a customized travel plan that fits your needs and budget.</p>
        </Col>
        <Col md={6}>
          <Image src="/images/about-page-2.jpg" fluid />
        </Col>
      </Row>
      <br/>
    </Container>
  );
};

export default AboutUs;
