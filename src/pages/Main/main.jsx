import { Button, TextField } from "@mui/material"
import { Grid, Box, Stack } from "@mui/material"
import * as React from "react"
import { Link } from "react-router-dom"
import Shutterstock from "../../video/shutterstock.mp4";

export default function Main() {

    const [mostrarInputEmail, setMostrarInputEmail] = React.useState(false)
    const [mostrarInputTelefono, setMostrarInputTelefono] = React.useState(false)

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

        },
        titulos: {

        },
        textFields: {

        }

    }


    return (
        <>
            <Grid container sx={{ width: "100%", height: "100%" }}>
            <video autoPlay loop muted 
            style={{
                position: "absolute",
                width: "100%",
                
            }}
            >
                    <source src={Shutterstock} type="video/mp4" />
                </video>
                <Box sx={styles.titulos}> Espacio para logos</Box>
                
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Stack sx={{ height: "100%" }}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Box sx={styles.titulos}> Selecciona tu metodo de conexion</Box>
                        <Button onClick={() => { handleChangeInputs(1) }} variant="contained" sx={styles.buttons}> Correo Electronico </Button>
                        {mostrarInputEmail ? <><TextField sx={styles.textFields} label="Ingresa tu email" variant="outlined"></TextField></>
                            : <></>}
                        <Button onClick={() => { handleChangeInputs(2) }} variant="contained" sx={styles.buttons}> Numero de telefono </Button>
                        {mostrarInputTelefono ? <><TextField sx={styles.textFields} label="Ingresa tu telefono" variant="outlined"></TextField></>
                            : <></>}

                        <Box sx={styles.buttons}>
                            <Box>¿No tienes cuenta?</Box>
                            <Link to="/registro">Registrarte</Link>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}