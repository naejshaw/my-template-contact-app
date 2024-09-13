import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg'
import fachada from '../assets/fachada.jpg'

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  `
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    width: 100%;
    margin: 1rem auto 0 auto;
    background: url(${background}) no-repeat cover ;
`
  
 const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.68);
  object-fit: cover;
`
const BackgroundImage = styled.img`
position: absolute;
z-index: -999;
top: 0;
left: 0;
height: 100vh;
width: 100%;
object-fit: cover;
`
  
const Text = styled.p`
  text-align: justify;
  font-style: italic;
  text-wrap: wrap;
  width: 60%;
  align-self: center;
  background: rgba(255, 255, 255, 0.28);
  padding: 1rem;
  border-radius: 1rem;
`
const Title = styled.h2`
  background: rgba(255, 255, 255, 0.28);
  padding: .5rem;
  border-radius: 1rem;
`

const AboutUs = () => {
  return (
    <Section id='about'>
      <Title>Sobre Nós</Title>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. sadasdasdasdsadasdasd asdasdasdsadasdsad asdsadasdas fasdasdasdasdasdas fasfsafdasdqwd wqdwqd wqdwqdqwdqw qwdwqdqwdsadsad qw2dqwdsadas dad wdqwdqw dwqd qwdqwdqwdqwdqd qdqwd wd qwd qwdqw4d qwd4 qwd qwdqwdqwd 7qwd qw
        </Text>
        <Image src={fachada} alt='Teste'/>
      </Container>
      <BackgroundImage src={background} alt='Teste'/>
    </Section>
  );
};

export default AboutUs;