import React from "react"
import styled from 'styled-components'

const Card = () => {
  return (
    <StyledCard>
        <img src='./images/photographer.jpg'
        alt='photographer' />
        <footer>
            <h4>Jane Doe</h4>
            {/* <p>Photographer</p> */}
        </footer>
    </StyledCard>
  )
}


const StyledCard = styled.article`
width:90vw;
max-width: 250px;
background: transparent;
border-radius: 0.25rem;
padding-top: 2rem;

  img {
      width: 100%;
      border-bottom-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    h4{
      text-transform: capitalize;
      /* &::before {
        content: 'Name : ';
        color: blue;
      } */
    }
    p{
      color: var(--primary);
      font-weight: 700;
    }
    &:hover {
      background: pink;
    }
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
export default Card