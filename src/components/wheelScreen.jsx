import * as React from "react"

import { Grid, Box, Divider, Stack, Button, TextField } from "@mui/material";

export default function WheelScreen() {
  const wheelEmbbededURL = "https://wheeldecide.com/e.php?"
  const [participants, setParticipant] = React.useState([])
  const [wheelTitle, setWheelTitle] = React.useState("")
  const [participantsStr, setParticipantStr] = React.useState("")
  const [wheelIsCreated, setWheelisCreated] = React.useState(false)
  const [participantTemp, setParticipantTemp] = React.useState("")


  const addParticipant = (e) => {
    setParticipant([...participants, participantTemp])
    setParticipantTemp("")
    console.log("participant.length: ", participants)
  }

  const changeParticipantTemp = (e) => {
    setParticipantTemp(e.target.value)
  }

  const generateWheel = () => {
    let auxStrParticpant = ""
    participants.forEach(
      (eaParticipant, idx) => {
        idx++
        auxStrParticpant = auxStrParticpant + "c" + idx + "=" + eaParticipant + "&"
      })
    setParticipantStr(auxStrParticpant)
    setWheelisCreated(true)
  }

  const cleanData = () => {
    setParticipant([])
    setParticipantStr("")
  }



  return (
    <Box sx={{ margin: "15px 0 0 0" }} >
      <Grid container spacing={2}>
        <Grid sx={{ margin: "20% 0 0 0" }} item lg={5}>
          <Stack direction="column"
            alignItems="center"
            spacing={2}>
            <Box sx={{ minWidth: "200px", color: "black", backgroundColor: "rgba(61, 196, 104, 0.8);", borderRadius: "15px", maxWidth: "250px" }}>
              <span>Recompensa:</span>
              <br />
              <span> 90$ USDT</span>
            </Box>
            <Box sx={{ minWidth: "200px", color: "black", backgroundColor: "rgba(211, 279, 78, 0.8);", borderRadius: "15px", maxWidth: "250px" }}>
              <span>Inversion:</span>
              <br />
              <span>5$ USDT</span>
            </Box>

          </Stack>

        </Grid>
        <Grid item lg={3}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button onClick={() => { generateWheel() }}> Generar Rueda</Button>
          </Stack>
          <Box>
            {wheelIsCreated ?
              <>
                {/* src="https://wheeldecide.com/e.php?c1=Mauricio&c2=Joshu&c3=David&t=Ganador&time=5" */}
                <iframe src={wheelEmbbededURL + participantsStr + "t=''&time=5"} width="500" height="500" scrolling="no" frameborder="0">
                </iframe>
              </> : <></>}
            <div>
              <a className="buy-with-crypto"
                href="https://commerce.coinbase.com/checkout/a2a8876b-e344-4da8-9e1e-7bfc646f0719">
                Buy with Crypto
              </a>
              <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
              </script>
            </div>

          </Box>

        </Grid>
        <Grid item lg={3}>
          {/* <Box>Recompensas:</Box> */}

          <Stack>
            <TextField label="Nuevo Participante" variant="filled" value={participantTemp} onChange={(e) => { changeParticipantTemp(e) }} />
            <Button onClick={(event) => addParticipant(event)} variant="contained"> Agregar Participante</Button>
          </Stack>

          <Divider />
          <Box sx={{ margin: "5% 0 3% 0" }}> Participantes: </Box>
          {participants.map(eachParticipant => (
            <>
              <Box sx={{ textAlign: "center" }}>{eachParticipant}</Box>
              <Divider />
            </>
          ))}

          {participants.length > 0 ?
            <>
              <Button onClick={() => { cleanData() }} variant="contained" >Vaciar participantes</Button>
            </> : <></>}

        </Grid>

      </Grid>

    </Box>
  )

}