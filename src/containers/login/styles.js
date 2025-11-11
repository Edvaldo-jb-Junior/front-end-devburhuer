import styled from "styled-components";
import BackgroundLogin from "../../assets/background.svg";
import Background from "../../assets/background-login.svg";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw
;`
export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
    }

    `;
export const RightContainer = styled.div`
    background: url('${Background}');
    background-size: cover;
    background-position: center;
    background-color: #1e1e1e;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 50%;

    p{
        color: #ffffff;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: bold;
        font-size: 18px;

        a{
            text-decoration: underline;
        }
    }
    
`
export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #ffffff;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
 
  span {
    color: #9758a6;
    font-family: "Road Rage", sans-serif;
  }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    width: 100%;
    max-width: 400px;
`
export const InputContainer = styled.div`
   display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    label {
        color: #ffffff;
        font-size: 18px;
        line-height: 100%;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
    }

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }
`
