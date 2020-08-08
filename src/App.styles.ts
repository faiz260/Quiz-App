    import styled, {createGlobalStyle} from 'styled-components';
    import BGImage from "./Images/background.jpg";

    export const GlobalStyles = createGlobalStyle`
    
        html {
            height: 100%;
        }

        body {
            background-image: url(${BGImage});
            background-size: cover;
            margin: 0;
            padding: 0 20px;
            display: flex;
            justify-content: center;
        }

        *{
            box-sizing: border-box;
            font-family: 'Catamaran', sen-serif;

        }

    `

    export const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        > p  {
            color: black;
        }

        .score {
            color: black;
            font-size: 2rem;
            margin-top: 100px;
        }

        h1 {
            font-family: Fascinate Inline;
            background-image: linear-gradient(180deg, #fff, #61b33b);
            background-size: 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            filter: drop-shadow(2px 2px #0085a3);
            font-size: 70px;
            text-align: center;
            margin: 20px;
            font-weight: 600
        }

        .submit, .start-again {
            cursor: pointer;
            background-color: linear-gradient(180deg, #fff, #ffcc91);
            border: 2px solid #d38558;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            height: 40px;
            margin: 20px 0;
            padding: 0 40px;
            max-width: 200px;
            font-size: 16px
        }

        .ques-num {
            font-size: 18px;
            margin: 10px;
            width: 200px;
            background: linear-gradient(150deg, #fff, #32CD32);
            height: 40px;
            border: 1px solid;
            border-radius: 7px;
            text-align: center;
            padding-top: 8px;
            box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25);
        }

        
    `