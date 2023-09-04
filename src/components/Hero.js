import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <StyledSection id='home'>
        <hero-banner>
            <h1>Lorem Ipsum</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natu.
            </p>
        </hero-banner>
    </StyledSection>
  );
}

const StyledSection = styled.section`
    min-height: 70vh;
    background: var(--medium-dark-blue);
    display: flex;
    justify-content: center;
    align-items: center;

  hero-banner.div{
    text-align: center;
    color: var(--clr-white);
    padding: 0 3rem;
  }
  hero-banner h1{
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: var(--clr-white);
    text-align: center;
    font-family: 'Handlee', cursive;
    font-family: 'Sansita', sans-serif;
  }
  hero-banner p{
    max-width: 35 rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: var(--clr-white);
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    
      background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)), url('./images/pexels-water.jpg') center/cover no-repeat;
      min-height: 90vh;
    }
    hero-banner{
      width: auto;
    }
    
    hero-banner p{
      max-width: 45rem;
    }
  
  `
 

export default Hero