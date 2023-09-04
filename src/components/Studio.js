import React from "react"
import styled from "styled-components";

const Studio = () => {
    return (
      <StyledArticle>
          <studio-text-div>
              <h1> Why Choose Jane Studios?</h1> 
              <ul class="fa-ul">
              <li><i class="fa-li fa fa-solid fa-heart"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua. </li>
              <li><i class="fa-li fa fa-solid fa-heart"></i>Massa massa ultricies mi quis. Tortor pretium viverra suspendisse potenti nullam ac. </li>
              <li><i class="fa-li fa fa-solid fa-heart"></i>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.</li>
              <li><i class="fa-li fa fa-solid fa-heart"></i>Volutpat maecenas volutpat blandit aliquam etiam. Cras vivamus. Integer quis amet.</li>
              </ul>
          </studio-text-div>
      </StyledArticle>
    )
  }
  const StyledArticle = styled.article`
    padding-top: 1rem;
    justify-content:space-evenly;
    align-items: center;
    width: max-width;
    display: grid;
    background: var(--medium-dark-blue);
    grid-template-columns: repeat(auto-fit, minmax(25rem, auto));
  

  h1 {
    text-align: center;  
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: var(--clr-white);
    font-family: 'Handlee', cursive;
    font-family: 'Sansita', sans-serif;
    font-size: xx-large;
    padding-bottom: 1rem;
  }
  
  
  studio-text-div div{
    color: var(--white-blue);
    width: max-width;
    text-align: center;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 1rem;
  
  }
  studio-text-div ul {
    display: inline block;
  }
  studio-text-div li {
      color: var(--clr-white);
      list-style-position: inside;
      list-style-type: none;
      text-align: left;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      font-family: 'Handlee', cursive;
      font-family: 'Sansita', sans-serif;
      font-size: large;
      padding-bottom: 1rem;
      list-style-image: fa-solid fa-heart;
      line-height: 1.5;
    }
  `
  export default Studio