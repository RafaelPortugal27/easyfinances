import React from 'react';
import { getPlanet } from '../src/services/planets';

export const getServerSideProps = async () => {
  const { name, terrain } = await getPlanet(1);
  // o jeito correto seria colocar o objeto inteiro de acordo com o que precisa na pagina
  return { props: { name, terrain } };
};

const Test = ({ name, terrain }) => (
  <section>
    <h1>{name}</h1>
    <p>
      {terrain}
    </p>
  </section>
);

// adicionar depois propTypes name, terrain

export default Test;
