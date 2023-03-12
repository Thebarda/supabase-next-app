"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Icon,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSupabase } from "./SupabaseProvider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Login() {
  const context = useSupabase();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [signup, setSignup] = useState({
    email: "",
    password: "",
  });

  const [signupSucessful, setSignupSucessful] = useState(false);
  const [signupError, setSignupError] = useState<Error | null>(null);

  const changeLogin =
    (property: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLogin((currentLogin) => ({
        ...currentLogin,
        [property]: e.target.value,
      }));
    };

  const changeSignUp =
    (property: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSignupSucessful(false);
      setSignupError(null);
      setSignup((currentSignup) => ({
        ...currentSignup,
        [property]: e.target.value,
      }));
    };

  const loginUser = (): void => {
    context?.supabase?.auth.signInWithPassword({
      email: login.email,
      password: login.password,
    });
  };

  const signupUser = async (): Promise<void> => {
    const data = await context?.supabase?.auth.signUp({
      email: signup.email,
      password: signup.password,
    });

    if (data?.error) {
      setSignupError(data.error);
      console.log(data.error);
      return;
    }

    setSignupSucessful(true);
  };

  return (
    <Container maxWidth="md">
      <Paper
        sx={{
          padding: 2,
          display: "grid",
          gridTemplateColumns: "1fr min-content 1fr",
          columnGap: 2,
          justifyItems: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(3, min-content)",
            rowGap: 2,
            width: "100%",
            justifyItems: "center",
          }}
        >
          <Typography variant="h4">Sign in</Typography>
          <TextField
            label="Email"
            fullWidth
            value={login.email}
            onChange={changeLogin("email")}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={login.password}
            onChange={changeLogin("password")}
          />
          <Box sx={{ width: "100%" }}>
            <Button variant="contained" fullWidth onClick={loginUser}>
              Sign in
            </Button>
          </Box>
        </Box>
        <Divider orientation="vertical" />
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(3, min-content)",
            rowGap: 2,
            width: "100%",
            justifyItems: "center",
          }}
        >
          <Typography variant="h4">Sign up</Typography>
          <TextField
            label="Email"
            fullWidth
            value={signup.email}
            onChange={changeSignUp("email")}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={signup.password}
            onChange={changeSignUp("password")}
          />
          <Box sx={{ width: "100%" }}>
            <Button variant="contained" fullWidth onClick={signupUser}>
              Sign Up
            </Button>
            {signupSucessful && (
              <Typography>
                <Icon color="success">
                  <CheckCircleIcon />
                </Icon>{" "}
                Sign up successful. Check your mail box
              </Typography>
            )}
            {signupError && (
              <Typography color="error">{signupError.message}</Typography>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
