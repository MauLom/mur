import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../utils/firebaseApp";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  // const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    // if (user) history.replace("/dashboard");
  }, [user, loading]);
  return (
    <Box className="">
      <Stack
          direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
            className="register__container">
        <TextField
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <TextField
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <TextField
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button variant="contained" className="register__btn" onClick={register}>
          Register
        </Button>
        <Button variant="contained"
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </Button>
    
      </Stack>
    </Box>
  );
}
export default Register;