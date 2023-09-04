import React from "react"
import { useRef } from 'react';
import styled from 'styled-components'

const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.target.reset();
    }
    return (
        <StyledSection id='contact'>
            <form ref={form} onSubmit={sendEmail}>
            <h2>Contact Me</h2>
                    <input type='package' placeholder={"Enter Photography Package"}/>
                    <input type='name' placeholder={"Enter Name"}/>
                    <input type='package' placeholder={"Enter Phone Number"}/>
                    <input type="email" placeholder={"Enter Email"}/>
                    <button type ='submit'>Submit</button>
            </form>
        </StyledSection>
    )
    }

const StyledSection = styled.section `
        display: flex;
        padding-top: 3rem;
        justify-content: center;
    
    form {
        width: 500px;
        background: #71A0B2;
        padding: 2rem;
        margin-top: 1rem;
        padding-top: .5rem;
        padding-bottom: 3rem;
    }
    
    form h2 {
        color: var(--white-blue);
        text-align: center;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        font-weight: 200;
        font-size: xx-large;
        font-family: 'Handlee', cursive;
        font-family: 'Sansita', sans-serif;
    }
    button{

     display: block;
     width: 100%;
     margin-top: 1.5rem;
     border-radius: 0.25rem;
     font-size:medium;
     background:var(--dark-blue);
     border:none;
     color:white;
     padding-top: 25px;
     padding-bottom: 25px;
    }

    button:hover {
        background: var(--blue-medium);
    
        cursor: pointer;
    }
    
    input {
        box-sizing: border-box;
        padding: 1rem;
        border: 5px solid #f2f4f8;
        border-radius: 0.25rem;
        width: 100%;
        margin-top: 1rem;
        margin-bottom: .5rem;
    }

`
    
export default ContactForm