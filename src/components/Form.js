import React from "react"
import styled, {css} from 'styled-components/macro'

const Button = styled.button.attrs((props) => {
    return {type: props.type || 'button'}
})`
    background:var(--primary);
    border:none;
    color:white;
    padding:0.25rem;
    cursor: pointer;
    ${({type})=>{
        return type === 'submit' && 
        css`
            display: block;
            width: 100%;
            margin-top: 1rem;
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
    padding: 0.5rem;
    border: 5px solid #f2f4f8;
    border-radius: 0.25rem;
    width: 100%;
    margin-top: 1rem;
    `

  const Form = () => {
  return (
    <div>
        {/* <h2>some random stuff</h2>
        <Button>click me</Button> */}
        <form
            css={`
                width: 500px;
                background: #fff;
                padding: 2rem;
                margin-top: 1rem;

            `}
        >
            <h2
            >
                Contact Me</h2>
                <BasicInput/>
                <BasicInput type='name' placeholder={"Enter Name"}/>
                <BasicInput type='package' placeholder={"Enter Phone Number"}/>
                <BasicInput type="email" placeholder={"Enter Email"}/>
                <Button type ='submit'>submit here</Button>
        </form>
    </div>
  )
}
export default Form