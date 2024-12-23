"use client";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form.js";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
`;

const Title = styled.h1`
font-family: 'Poppins';
font-weight: 600;
font-size: 3.2vh;

`;



export default function Home() {
  return (
    <>
    <Container>
      <Title>Cadastrar cliente</Title>
      <Form/>
    </Container>
    <ToastContainer autoClose={3000} position="bottom-left" />
    </>
  )
}