import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const RightContainer = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  height: 85%;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  span {
    position: absolute;
    right: 0.5rem;
    top: 38%;
  }
  p {
    margin: 0;
    text-align: right;
    color: rgba(247, 135, 25, 1);
    font-size: small;
  }
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const InputCheckbox = styled.input`
  padding: 0;
`;
export const Input = styled.input`
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const LabelCheckbox = styled.label`
  display: flex;
  align-item: center;
  justify-content-center;
  p{
    margin:0;

    a{
        color:rgba(247, 135, 25, 1);
    }
  }
`;

export const Button = styled.button`
  width: 80%;
  align-self: center;
  border: none;
  padding: 0.8rem;
  font-size: 1.2rem;
  border-radius: 5px;
  color: #fff;
  background: rgba(21, 117, 167, 1);
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;

export const Signup = styled.p`
  text-align: center;
  a {
    text-decoration: none;
    font-weight: bold;
    color: rgba(247, 135, 25, 1);
  }
`;
