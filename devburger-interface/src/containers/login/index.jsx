import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Title, LeftContainer, RightContainer, Form, InputContainer } from "./styles";
import { Button } from "../../components/Button";


export function Login() {

const schema = yup
  .object({
    email: yup.string()
    .email('Digite um e-mail válido')
    .required('O email é obrigatório'),
    password: yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('digite uma senha'),
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
   const  response = await toast.promise(
    api.post('/sessions', {
      email: data.email,
      password: data.password,
    }),
    {
      pending: 'Verificando seus dados...',
      success: 'Login realizado com sucesso! ',
      error: 'E-mail ou senha incorretos. '
    }
   );
  
    console.log(response);
    
  };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo DevBurger" />
            </LeftContainer>
            <RightContainer>
                <Title>Óla seja bem vindo ao <span>Dev Burguer!</span>
                <br></br>
                 Acesse com seu <span>Login e senha </span>
                 </Title>
                 <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                       <label htmlFor="email">Email</label>
                       <input {...register("email")}  type="email" id="email" />
                       <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="senha">Senha</label>
                        <input  {...register("password")} type="password" id="senha" />
                        <p>{errors?.passowd?.message}</p>
                    </InputContainer>
                    <br></br>
                    <Button type="submit" theme="primary">Entrar</Button>
                 </Form>
                 <br></br>
                 <p>
                    Não possui Conta? <a> Criar aqui </a>
                 </p>
            </RightContainer>
        </Container>
    )
};