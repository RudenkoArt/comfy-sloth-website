import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
            <p>
              I'm baby woke tilde vaporware helvetica fashion axe unicorn.
              Copper mug prism readymade quinoa pabst sustainable. Paleo vice
              master cleanse hoodie vape, locavore sus trust fund mustache marfa
              flannel pop-up venmo succulents. Vexillologist subway tile meh,
              food truck post-ironic XOXO same lomo PBR&B JOMO deep v austin
              hashtag. Intelligentsia kitsch hoodie, occupy semiotics tonx swag
              Brooklyn +1 typewriter man braid sus pour-over meh. Meditation man
              bun thundercats fam tonx, listicle photo booth knausgaard
              helvetica locavore readymade swag mlkshk lyft pickled.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
