import React from 'react';
import Section from './Section'
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  `
  
  const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  border: 1px solid blue;
  `
  
const Text = styled.p`
  text-align: justify;
  font-style: italic;
  text-wrap: wrap;
  width: 60%;
  align-self: center;
`

const AboutUs = () => {
  return (
    <Section>
      <h2>Sobre Nós</h2>
      <Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. sadasdasdasdsadasdasd asdasdasdsadasdsad asdsadasdas fasdasdasdasdasdas fasfsafdasdqwd wqdwqd wqdwqdqwdqw qwdwqdqwdsadsad qw2dqwdsadas dad wdqwdqw dwqd qwdqwdqwdqwdqd qdqwd wd qwd qwdqw4d qwd4 qwd qwdqwdqwd 7qwd qw
        </Text>
        <Image src='' alt='Teste'/>
      </Container>
    </Section>
  );
};

export default AboutUs;