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

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 2rem;
`

const Service = ({description, imgAlt, imgPath, title}) => {
  return(
    <ServiceCard>
        <Image src={imgPath} alt={imgAlt}/>
        <p>"{title}"</p>
        <p>- {description}</p>
      </ServiceCard>
  )
}
const ProductsServices = () => {
  return (
    <Section>
      <h2>Produtos e Serviços</h2>
      <Container>
        <Service description={'Product1'} imgAlt={'Product1 image'} imgPath={''} title={'Descrição do Produto 1'}/>
        <Service description={'Product2'} imgAlt={'Product2 image'} imgPath={''} title={'Descrição do Produto 2'}/>
        <Service description={'Product3'} imgAlt={'Product3 image'} imgPath={''} title={'Descrição do Produto 3'}/>
      </Container>
    </Section>
  );
};

export default ProductsServices;