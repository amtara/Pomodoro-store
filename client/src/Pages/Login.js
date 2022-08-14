import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginSelector, signIn } from "../redux/authSlice";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://pomodoro.store/wp-content/uploads/2021/08/dsc00446.jpg-scaled.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(loginSelector);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("error", error);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = { username, password };
    dispatch(signIn(data));
  };

  return (
    <Container>
      <Wrapper>
        <Title>Bienvenue</Title>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 my-[10px] text-sm">{error}</p>}
          <Button type="submit">Connection</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
