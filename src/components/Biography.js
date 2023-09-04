import React from "react"
import styled from "styled-components"


const Biography = () => {
  return (
    <StyledArticle id='about'>
        <biography-text-div>
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit et ultrices id, condimentum faucibus turpis platea placerat imperdiet curabitur facilisis. Conubia laoreet lacus luctus turpis ullamcorper risus interdum, donec odio cras felis himenaeos id ligula, quis nibh ultrices ridiculus duis class.</p>
        </biography-text-div>
        <biography-photo-div>
            <img src="./images/photographer.jpg"></img>
        </biography-photo-div>
    </StyledArticle>
  )
}

/*Biography*/
 const StyledArticle= styled.article`
    padding-top: 6rem;
    width: max-width;
    padding-bottom: 6rem;
    justify-content:space-evenly;
    align-items: center;
    display: grid;
    background: var(--medium-orange);
    grid-template-columns: repeat(auto-fit, minmax(25rem, auto));
  
  biography-text-div{
    color: #446776;
    width: 400px;
    height: 400px;
    text-align: center;
    padding-left: 1.5rem;
  }

  biography-text-div p {
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.8;

  }

  biography-text-div h1{
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-family: 'Handlee', cursive;
    font-family: 'Sansita', sans-serif;
    font-size: xx-large;
  }

  biography-photo-div{
    width: 400px;
    height: 400px;
    text-align: center;
    padding-right: 1.5rem;
  }
  biography-photo-div img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 8px solid #446776;
  }

`
  

export default Biography