import React from "react"
import styled from 'styled-components'
const NewFooter = () => {
  return (
    <StyledFooter>
        <twitter>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#portfolio">Lorem</a></li> 
        <li><a href="#portfolio">Ipsum</a></li> 
        <li><a href="#portfolio">Dolor</a></li>
        </twitter>
        <instagram>
        <li><a href="#staff">Staff</a></li>
        <li><a href="#staff">Lorem</a></li> 
        <li><a href="#staff">Ipsum</a></li> 
        <li><a href="#staff">Dolor</a></li>
        </instagram>
        <facebook>
        <li><a href="#about">About</a></li>
        <li><a href="#about">Lorem</a></li> 
        <li><a href="#about">Ipsum</a></li> 
        <li><a href="#about">Dolor</a></li>
        </facebook>
        <youtube>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Lorem</a></li> 
        <li><a href="#contact">Ipsum</a></li> 
        <li><a href="#contact">Dolor</a></li>
        </youtube>
        </StyledFooter>
  )
}

const StyledFooter = styled.article`
display:flex;
height: 200px;
background: var(--medium-orange);
align-items: center;
justify-content: center;
padding-bottom:20px;

li{
    list-style-position: inside; 
    list-style-type: none;
    margin-bottom:20px;
}
twitter{
  display: grid;
  height: 100px;
  padding-left:30px;
  padding-right:30px;
}
twitter a{
    color: white;
}
instagram{
  display: grid;
  height: 100px;
  padding-left:30px;
  padding-right:30px
}
instagram a{
    color: white;
}
facebook{
  display: grid;
  height: 100px;
  padding-left:30px;
  padding-right:30px
}
facebook a{
    color: white;
}
youtube{
  display: grid;
  height: 100px;
  padding-left:30px;
  padding-right:30px
}
youtube a{
    color: white;
}

`
export default NewFooter