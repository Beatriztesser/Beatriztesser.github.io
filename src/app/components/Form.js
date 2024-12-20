import styled from "styled-components";
import React, { useRef } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Input = styled.input`
  width: 200px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 2.4vw;
`;

const Label = styled.label`
  font-family: 'Poppins';
  margin-bottom: 3px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #2c73d2;
  color: white;
  height: 38px;
  font-family: 'Poppins';
`;

const Form = ({ addUser }) => {
  const ref = useRef(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Formulario enviado!");
    const user = ref.current; 

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.data_nascimento.value ||
      !user.cpf.value ||
      !user.telefone.value ||
      !user.cidade.value ||
      !user.estado.value ||
      !user.endereco.value ||
      !user.bairro.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }


    if (addUser) {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          data_nascimento: user.data_nascimento.value,
          cpf: user.cpf.value,
          telefone: user.telefone.value,
          cidade: user.cidade.value,
          estado: user.estado.value,
          endereco: user.endereco.value,
          bairro: user.bairro.value
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome: </Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail:</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento:</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>
      <InputArea>
        <Label>CPF:</Label>
        <Input name="cpf" type="text" />
      </InputArea>
      <InputArea>
        <Label>Telefone:</Label>
        <Input name="telefone" type="text" />
      </InputArea>
      <InputArea>
        <Label>Cidade:</Label>
        <Input name="cidade" type="text" />
      </InputArea>
      <InputArea>
        <Label>Estado:</Label>
        <Input name="estado" type="text" />
      </InputArea>
      <InputArea>
        <Label>Endereço:</Label>
        <Input name="endereco" type="text" />
      </InputArea>
      <InputArea>
        <Label>Bairro:</Label>
        <Input name="bairro" type="text" />
      </InputArea>

      <Button type="submit">Cadastrar</Button>
    </FormContainer>
  );
};

export default Form;
