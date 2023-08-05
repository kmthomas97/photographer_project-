

import React from "react"
import styled from 'styled-components'
const BottomFooter = () => {
  return (
    <StyledFooter>
        <twitter>
        <a href="https://twitter.com/"> <i class="fa-brands fa-square-twitter fa-2x"></i></a>
        </twitter>
        <instagram>
        <a href="https://www.facebook.com/"> <i class="fa-brands fa-square-facebook fa-2x"></i></a>
        </instagram>
        <facebook>
        <a href="https://www.instagram.com/"> <i class="fa-brands fa-square-instagram fa-2x"></i></a>
        </facebook>
        <youtube>
        <a href="https://www.youtube.com/"> <i class="fa-brands fa-square-youtube fa-2x"></i></a>
        </youtube>
        </StyledFooter>
  )
}

const StyledFooter = styled.article`
display:flex;
height: 100px;
background: var(--dark-orange);
align-items: center;
justify-content: center;

twitter{
  display: grid;
  height: 50;
  padding-left:40px;
  padding-right:40px;
}
twitter a{
    color: white;
}
instagram{
  display: grid;
  height: 50;
  padding-left:40px;
  padding-right:40px
}
instagram a{
    color: white;
}
facebook{
  display: grid;
  height: 50;
  padding-left:40px;
  padding-right:40px
}
facebook a{
    color: white;
}
youtube{
  display: grid;
  height: 50;
  padding-left:40px;
  padding-right:40px
}
youtube a{
    color: white;
}

`
export default BottomFooter