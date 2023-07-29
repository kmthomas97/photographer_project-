import React from "react"
import styled from 'styled-components'

const Info = () => {
  return (
    <StyledCard>
        <header>My Story</header>
        <img src='./images/weddingbehind.jpg'
        alt='weddingbehind' />
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus.
</p>
    </StyledCard>
  )
}

const StyledCard = styled.article`
width:100vw;
font-size: 16px;
padding-left: 5rem;
max-width: 250px;
background: var(--white);
border-radius: 8px;
padding-top: 2rem;
margin: 0;
display: grid;
font-family: sans-serif;
grid-template-rows: auto;

header.div{
    display: flex;
    align-items: center;
    border-radius: inherit;
    position: relative;
}
img {
      width: 100%;
      border-bottom-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
  }
p{
      color: var(--primary);
      font-weight: 700;


    }

  transition: all 0.5s ease-in-out;
  &:hover{
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
  @media (min-width:768px){
    max-width: 400px;
  }
`
export default Info