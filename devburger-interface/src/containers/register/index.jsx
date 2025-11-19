import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';

import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Title, LeftContainer, RightContainer, Form, InputContainer, Link } from "./styles";
import { Button } from "../../components/Button";



export function Register() {

  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string()
        .required('O nome é obrigatorio'),
      email: yup.string()
        .email('Digite um e-mail válido')
        .required('O email é obrigatório'),
      password: yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('digite uma senha'),
      confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'As senhas devem corresponder')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post('/users', {
          name: data.name,
          email: data.email,
          password: data.password,

        },
          {
            validateStatus: () => true,
          },
        );

      if (status === 201 || status === 200) {
        setTimeout(() => {
          navigate('/login');
        }, 1500);
        toast.success('Conta criada com sucesso!');
      } else if (status === 400) {
        toast.error('Email já cadastrado! Faça login para continuar');
      } else {
        throw new Error();
      }
      console.log(status);

    } catch {
      toast.error("Falha no sistema tnete novamente");
    }


  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar Conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name">Nome</label>
            <input {...register("name")} type="text" id="email" />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" id="email" />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="senha">Senha</label>
            <input  {...register("password")} type="password" id="senha" />
            <p>{errors?.passowd?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="senha">Confirmar senha</label>
            <input  {...register("confirmPassword")} type="password" id="senha" />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <br></br>
          <Button type="submit" theme="primary">Cadastrar</Button>
        </Form>
        <br></br>
        <p>
          Já possui conta? <Link to="/login"> Criar aqui </Link>
        </p>
      </RightContainer>
    </Container>
  )
};