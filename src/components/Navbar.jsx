

import { useState, useRef} from "react";
import {FaBars} from 'react-icons/fa';
import {links, social} from './NavLinks';
import React from "react"
import styled from 'styled-components'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);


    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };

    return ( 
    <StyledNavbar>
      <div className="nav-header"/>
         <img src='./images/download (13).svg'
        alt='logo' />
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
        <div>
        {showLinks && (
        <div className='links-container show-container'>
                <ul className='links'>
                  {links.map((link)=> {
                    const {id, url, text} = link;
                    return (
                      <li 
                        key={id}> <a className="a" href={url}>{text}</a>
                      </li>
                    );
                  })}
                </ul>
                </div>
        )}
                </div>
    </StyledNavbar>
    );
}

const StyledNavbar = styled.nav`

/* background: var(--clr-white); */
background-color: #eaf4f4;
box-shadow: var(--light-shadow);


    .nav-header {
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
  }
  .nav-toggle {
  display: block;
  margin-left: auto;
  margin-right: 0;

    font-size: 1.5rem;
    color: var(--primary-5);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-grey-3);
    /* transform: rotate(90deg); */
  }

  img{
    height: 40px;
  }

  .a{
        font-family: 'Handlee', cursive;
        font-family: 'Sansita', sans-serif;
        font-weight: 300;
        color: var(--dark-blue);
        font-size: 1.5rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        display: block;
        padding: 0.5rem 1rem;
        /* border: 2px solid red; */
        transition: var(--transition);
    &:hover{
      background: var(--clr-primary-8);
      color: var(--medium-orange);
      padding-left: 1.5rem;

    }
  }


  .links-container{
    overflow: hidden;
    transition: var(--transition);
  }


  @media screen and (min-width: 800px) {

    .nav-center{
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header{
      padding: 0;
    }
    .nav-toggle{
      display: none;

    }
    .links-container{
      overflow: hidden;
      transition: var(--transition)
    }
    .links {
      display: flex;
    }
    img{
    height: 40px;
  }



    .a{
      padding: 0;
      margin: 0 0.5rem;
      &:hover{
        padding: 0;
      }
    }
  }

`

export default Navbar
// import { useState, useRef} from "react";
// import {FaBars} from 'react-icons/fa';
// import {links, social} from './NavLinks';
// import React from "react"
// import styled from 'styled-components'


// const Navbar = () => {
//     const [showLinks, setShowLinks] = useState(false);
//     const linksContainerRef = useRef(null);
//     const linksRef = useRef(null);


//     const toggleLinks = () => {
//       //console.log(linksRef.current.getBoundingClientRect());
//       setShowLinks(!showLinks);
//     };

//     const linkStyles = {
//       height:showLinks?`${linksRef.current.getBoundingClientRect().height}px`:'0x'
//     }

    
//     return ( 
//     <StyledNavbar>
//       <div className="nav-center"/>
//       <div className="nav-header"/>
//          <img src='./images/logo.svg'
//         alt='logo' />
//         <button className="nav-toggle" onClick={toggleLinks}>
//           <FaBars />
//         </button>
//         <div>

//         <div className='links-container' ref={linksContainerRef} style={linkStyles}>
//                 <ul className='links' ref={linksRef}>
//                   {links.map((link)=> {
//                     const {id, url, text} = link;
//                     return (
//                       <li 
//                         key={id}> <a className="a" href={url}>{text}</a>
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 </div>
//                 </div>
//     </StyledNavbar>
//     );
// }

// const StyledNavbar = styled.nav`

// background: var(--clr-white);
// box-shadow: var(--light-shadow);

//   .nav-header {
//     display: flex;
//     align-items:center;
//     justify-content:space-between;
//     padding:1rem;
//   }
//   .nav-toggle {
//     font-size: 1.5rem;
//     color: var(--primary-5);
//     background: transparent;
//     border-color: transparent;
//     transition: var(--transition);
//     cursor: pointer;
//   }
//   .nav-toggle:hover {
//     color: var(--primary-1);
//     transform: rotate(90deg);
//   }

//   img{
//     height: 40px;
//   }

//   .a{
//         color: var(--clr-grey-3);
//         font-size: 1rem;
//         text-transform: capitalize;
//         letter-spacing: 0.1rem;
//         display: block;
//         padding: 0.5rem 1rem;
//         border: 2px solid red;
//         transition: var(--transition);
//     &:hover{
//       background: var(--clr-primary-8);
//       color: var(--clr-primary-5);
//       padding-left: 1.5rem;

//     }
//   }


//   .links-container{
//     overflow: hidden;
//     transition: var(--transition);
//     height: linkStyles;
//   }


//   @media screen and (min-width: 800px) {
//     .nav-center{
//       max-width: 1170px;
//       margin: 0 auto;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       padding: 1rem;
//     }
//     .nav-header{
//       padding: 0;
//     }
//     .nav-toggle{
//       display: none;

//     }
//     .links-container{
//       height: auto !important;
//     }
//     .links {
//       display: flex;
//     }
//     .a{
//       padding: 0;
//       margin: 0 0.5rem;
//       &:hover{
//         padding: 0;
//         background: transparent;
//       }
//     }
//   }

// `

// export default Navbar