import styled from 'styled-components';

export const DivBackground = styled.div`
    width: 100%;
    height: 100%;
`;

export const DivTotal = styled.div`
    width: calc(90px - 10px);
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-left: 25px;

    @media (max-width: 768px){
        width: 80%;
        height: 100%;

       div form {
            width: 90vw;
            height: 100vh;
        }
        form {
            width: 90vw;
            height: 100vh;

            margin-top: 300px;

            button {
                width: 70%;
            }
        }

    }
`;

export const Title = styled.h1`
    font-size: 20px;
    color: #f00;

    margin-bottom: 15px;
`;

export const SecondTitle = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: #555;

    margin-bottom: 15px;
    margin-right: 75px;
`;


export const Input = styled.input`
        width: 22vw;
        height: 9vh;

        margin-bottom: 25px;

        border-radius: 25px;
        outline: none;

        @media (max-width: 800px){
            width: 90%;
            height: 100%;
        }
`;

export const Button = styled.button`
        width: 22vw;
        height: 9vh;

        margin-bottom: 25px;

        font-size: 22px;
        color: #fff;

        background-color: #f00;

        border-radius: 29px;
        border-style: none;
`;

export const ButtonRegister = styled.a`
    font-size: 14px;
    color: #555;

`;

export const Anchor = styled.a`
    color: #f00;
    font-size: 14px;

    text-decoration: none;
`;


export const Form = styled.form`
        
        width: 65vw;
        height: 75vh;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        font-family: Arial, Helvetica, sans-serif;

        margin-left: 90px;
        margin-top: 160px;

        input{
            padding-left: 15px;

            border-style: none;
        }

        @media (max-width: 800px){
        width: 80%;
        height: 100%;

        form {
            width: 90vw;
        }
    }
`;

export const Div = styled.div`
        border-style: none;
`;

export const ForgetPassword = styled.a`
        margin-left: 100px;


        font-size: 12px;
        text-decoration: none;
        color: #555;
        

        margin-bottom: 15px;

        :hover{
            color: #f00;
        }
`;

export const Checkbox = styled.input`
        border-color: #f00;

        margin-bottom: 15px;

        #text {
            font-size: 12px;
            color: #555;
        }
`;

export const Label = styled.label`
        font-size: 12px;

        display: flex;
        flex-direction: row-reverse ;
        color: #555;
`;

export const DivOptions = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
`;