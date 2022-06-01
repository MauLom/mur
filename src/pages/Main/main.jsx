import { Button, TextField } from "@mui/material"
import { Grid, Box, Stack, Paper } from "@mui/material"
import * as React from "react"
import { Link } from "react-router-dom"
import Shutterstock from "../../video/shutterstock.mp4";
import Login from "../../components/Login/Login"
import Register from "../../components/Register/Register"
import Dashboard from "../Dashboard/Dashboard";

export default function Main() {

    const [mostrarInputEmail, setMostrarInputEmail] = React.useState(false)
    const [mostrarInputTelefono, setMostrarInputTelefono] = React.useState(false)

    const [mostrarRegistro, setMostrarRegistro] = React.useState(false)
    const [userIsLogged, setUserIsLogged] = React.useState(false)
    const handleChangeInputs = (value) => {
        if (value == 1) {
            setMostrarInputEmail(true)
            setMostrarInputTelefono(false)
        } else if (value == 2) {
            setMostrarInputEmail(false)
            setMostrarInputTelefono(true)
        }

    }

    const styles = {
        buttons: {
            zIndex: "50",
        },
        titulos: {

        },
        textFields: {

        }

    }


    return (
        <>
            <Grid container sx={{ height: "100%", width:"100%" }}>
                <Grid item lg={2} md={12} sm={10} xs={10} sx={{ padding: "0 0 0 0", backgroundColor: "#bdc3c7" }}>
                    <Box sx={{}}>
                        {mostrarRegistro ?
                            <>
                                <Register />
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                    <Box>Ya tienes cuenta? </Box>
                                    <Button onClick={() => { setMostrarRegistro(false) }}>Conexion</Button>
                                </Stack>
                            </>
                            :
                            <>
                                {userIsLogged ? <>

                                    <Dashboard isLogged={userIsLogged} changeLogged={setUserIsLogged} /></> :
                                    <>
                                        <Login isLogged={userIsLogged} changeLogged={setUserIsLogged} />
                                        <Stack
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={2}>
                                            <Link to="/reset">Olvide mi contrasena</Link>
                                            <Box>No tienes cuenta? </Box>
                                            <Button onClick={() => { setMostrarRegistro(true) }}>registrate</Button>
                                        </Stack>
                                    </>
                                }

                            </>}

                    </Box>
                </Grid>
                <Grid item lg={10} md={12} sm={10} xs={10} sx={{ width: "100%", backgroundColor: "#2c3e50", padding: "3%" }}>
                    <Stack direction="column" spacing={2} >
                        <Stack
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                            alignItems="center">
                            <Paper sx={{ width: "50%", height: "30vh", backgroundColor: "red" }}>
                                <Link sx={{ width: "100%", height: "100%" }} to="/wheel">Hazme click</Link>
                            </Paper>
                            <Paper sx={{ width: "50%", height: "30vh", backgroundColor: "green" }}> Segundo juego</Paper>
                            <Paper sx={{ width: "50%", height: "30vh", backgroundColor: "gray" }}> Tercer juego</Paper>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>

                            <Box>Tabla de Premios</Box>
                        </Stack>
                    </Stack>

                </Grid>

            </Grid>
        </>
    )
}