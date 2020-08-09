import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1100px;
    background: linear-gradient(120deg, #fff, #32CD32);
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 9px  20px 13px rgba(0,0,0,0.5);
    text-align: center;

    p {
        font-size: 1rem;

    }
`


 
export const OptionWrapper = styled.div`
    transition: all 0.3s ease;

    .input {
        cursor: pointer
    }

    .options {
        cursor: pointer;
        font-size: 1rem;
        height: 40px;
        margin: 5px 0;
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: black;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
    }

`