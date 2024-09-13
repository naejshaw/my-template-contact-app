import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  background-color: #222;
  width: 100%;
  margin-bottom: 0;
  position: relative;
  padding: 0.5rem 0.25rem;
  color: white;
  bottom: 0;
`

const Social = styled.ul`
  list-style: none;
  display: flex;
  align-items- center;
  justify-content: space-between;
  padding: 0 auto;
  margin: .5rem auto;
  width:60%;
`

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  
  &:hover{
    color: rgba(255, 255, 255, 0.68);
  }
`

const Footer = ({company}) => {
  return (
    <FooterDiv>
      {/* Links para redes sociais, termos de uso, etc. */}
      <Social>
        <li><SocialLink href="#">Facebook</SocialLink></li>
        <li><SocialLink href="#">Instagram</SocialLink></li>
        <li><SocialLink href="#">Whatsapp</SocialLink></li>
      </Social>
      <p>&copy; {new Date().getFullYear()} {company}</p>
    </FooterDiv>
  );
};

export default Footer;