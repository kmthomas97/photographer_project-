import React from "react"
import styled from 'styled-components'
const Footer = () => {
  return (
    <StyledFooter>
      <photo>
        <img src='/images/logo13.svg'/>
        </photo>
      <div>
        <ul>
          <li>About </li>
          <li>Duio</li>
          <li>Magna</li>
          <li>Quis</li>
        </ul>
      </div>
      <paragraph>
      <ul>
          <li>Portfolio</li>
          <li>Duio</li>
          <li>Magna</li>
          <li>Quis</li>
        </ul>
      </paragraph>
      <>
      <ul>
          <li>Reviews</li>
          <li>Duio</li>
          <li>Magna</li>
          <li>Quis</li>
        </ul>
      </>
     </StyledFooter>
  )
}

const StyledFooter = styled.article`
display:flex;
height: 250px;
background: var(--medium-orange);
justify-content: center;

div{
  display: grid;
  height: 6rem;
}
photo{
  display: grid;
  height: 4rem;
}
paragraph{
  display: grid;
  height:4rem;
}
li{
  padding-left: 45px;
  padding-right: 35px;
  color: var(--dark-blue);
  font-size: medium;
  text-align: center;
  font-size: large;
  text-transform: capitalize;
  list-style-position: inside;
  list-style-type: none;
  line-height: 2.5;
  text-align: left;
  font-weight: 500;
}

`
export default Footer