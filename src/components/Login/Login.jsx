import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../utils/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";

import { Grid, Box, Stack, Paper, Button, TextField } from "@mui/material"
import Dashboard from "../../pages/Dashboard/Dashboard";

const Login = ({ isLogged, changeLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [userLogged, setUserLogged] = useState(false)
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) changeLogged(true);
  }, [user, loading]);
  return (
    <Box className="">

      <>
        <Stack direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2} >
          <TextField
            type="text"

            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <TextField
            type="password"

            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button variant="contained"

            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </Button>
          <Button variant="contained" onClick={signInWithGoogle}>
            Login with Google
          </Button>
        </Stack>
      </>

    </Box>
  );
}
export default Login;