import React from "react"
import styled, {css} from 'styled-components/macro'

const Button = styled.button.attrs((props) => {
    return {type: props.type || 'button'}
})`
    background:var(--dark-blue);
    border:none;
    color:white;
    padding:0.55rem;
    :hover{
        background: var(--blue-medium);
    }
    cursor: pointer;
    ${({type})=>{
        return type === 'submit' && 
        css`
            display: block;
            width: 100%;
            margin-top: 1.5rem;
            border-radius: 0.25rem;
        `
    }}
`
    const BasicInput = styled.input.attrs((props) => {
        return{
            type: props.type || 'text',
            placeholder: props.placeholder || 'please enter value',
        }
    })`
    box-sizing: border-box;
    padding: 1rem;
    border: 5px solid #f2f4f8;
    border-radius: 0.25rem;
    width: 100%;
    margin-top: 1rem;
    `

  const ContactForm = () => {
  return (
    <div id='contact' className="form-div">
        {/* <h2>some random stuff</h2>
        <Button>click me</Button> */}
        <form className="form">
        <h2>Contact Me</h2>
                <BasicInput type='package' placeholder={"Enter Photography Package"}/>
                <BasicInput type='name' placeholder={"Enter Name"}/>
                <BasicInput type='package' placeholder={"Enter Phone Number"}/>
                <BasicInput type="email" placeholder={"Enter Email"}/>
                <Button type ='submit'>Submit</Button>
        </form>
    </div>
  )
}
export default ContactForm