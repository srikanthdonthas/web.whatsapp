import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG12.png" />

        <Button onClick={signIn} variant="outlined">
          Sign In with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  padding: 50px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
  > Button {
    background-color: #00fff2;
  }
`;

const Logo = styled.img`
  height: 200px;
  width: 250px;
  margin-bottom: 40px;
`;
