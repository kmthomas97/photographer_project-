import React from "react"
import styled from "styled-components"

const FooterLogo = () => {
    return (
      <StyledArticle>
          <div className="Logo-photo-div">
              <img src="./images/Logo13.svg"></img>
          </div>
      </StyledArticle>
    )
  }

  /*FooterLogo*/

 const StyledArticle = styled.article`
  
  margin-top: 150px;
  padding-top: 1rem;
  width: max-width;
  padding-bottom: 1rem;
  justify-content:space-evenly;
  align-items: center;
  display: grid;
  background: var(--medium-orange);

 `

  export default FooterLogo