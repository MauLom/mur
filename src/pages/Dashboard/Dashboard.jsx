import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../utils/firebaseApp";
import { query, collection, getDocs, where } from "firebase/firestore";

import LoopIcon from '@mui/icons-material/Loop';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { Box, Modal, Paper, Button, TextField, Typography, Stack } from "@mui/material"


const Dashboard = ({ isLogged, changeLogged }) => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  const handleOpenModal = () => { setOpenModal(!openModal) }

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  const getOutOfhere = () => {
    logout()
    changeLogged(false)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box >
      <Stack direction="row" justifyContent="space-around" sx={{backgroundColor:"white", borderRadius:"20px", margin:"15px 3px 15px 3px"}}>
        <Box sx={{margin:"5px 5px 5px 5px"}}>
          <CreditScoreIcon />
        </Box>
        <Box sx={{ margin:"5px 0 5px 0", color:"green" }}>5000$</Box>
        <Button onClick={() => { handleOpenModal() }}> <AddBoxIcon /> </Button>
      </Stack>


      <div >
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>

        <Modal
          open={openModal}
          onClose={handleOpenModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Bitcoin
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" >
                <div><LoopIcon /></div>
                Delete
              </Button>
              <Button variant="outlined" >
                Delete
              </Button>
            </Stack>
          </Box>
        </Modal>

        <Button onClick={() => { getOutOfhere() }}>
          Logout
        </Button>
      </div>
    </Box>
  );
}
export default Dashboard;