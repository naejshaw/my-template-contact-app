import React from 'react';
import Section from './Section';
import styled from 'styled-components';

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  border: 1px solid blue;
  object-fit: contain;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
`

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 2rem;
`

const Testimonial = ({author, imgAlt, imgPath, text}) => {
  return(
    <TestimonialCard className="testimonial">
        <Image src={imgPath} alt={imgAlt}/>
        <p>"{text}"</p>
        <p>- {author}</p>
      </TestimonialCard>
  )
}

const Testimonials = () => {
  return (
    <Section>
      <h2>Depoimentos</h2>
      <Container>
        <Testimonial author={'Fulano'} imgAlt={'Fulano profile'} imgPath={''} text={'Muita felicidade'}/>
        <Testimonial author={'Ciclano'} imgAlt={'Ciclano profile'} imgPath={''} text={'Muita alegria'}/>
        <Testimonial author={'Beltrano'} imgAlt={'Beltrano profile'} imgPath={''} text={'Muita sorte'}/>
      </Container>
    </Section>
  );
};

export default Testimonials;