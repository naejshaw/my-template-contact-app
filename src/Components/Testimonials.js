import React from 'react';
import Section from './Section';

const Testimonials = () => {
  return (
    <Section>
      <h2>Depoimentos</h2>
      <div className="testimonial">
        <p>"Lorem ipsum dolor sit amet."</p>
        <p>- João da Silva</p>
      </div>
      // ... (outros depoimentos)
    </Section>
  );
};

export default Testimonials;