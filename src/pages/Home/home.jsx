import *  as React from "react"

//// Material
import {Box, Stack } from "@mui/material"

/// Assets 
import Logo from "../../assets/LOGO.png"
const Home = () => {
    const styles= {
        boxBackground: {
            backgroundColor:"#9F6FFA",
            width: "100%",
            height: "100%"
        },
        logoContainer : {
            width:"120px",
            height:"100px"
        },
        loginFrame: {
            width:"90%",
            height:"70%",
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #EFEFEF",
            backdropFilter: "blur(60px)",
            borderRadius: "25px",
            margin:"15% 0 0 5%" 
        },
        loginTitle:{
            margin: "5% 0 0 0 ",

            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "3rem",
            lineHeight: "36px",
            textAlign: "center",
            letterSpacing: "0.03em",
            color: "#FFFFFF",
            textShadow: "15px 12px 50px rgba(0, 0, 0, 0.3)",
        },
        divider:{
            width:"80%",
            border: "5px solid #FFFFFF",
            margin: "3% 0 0 10%"
        },
        usernameLabel:{
            width:"30%",
            margin: "8% 0 0 10%",
            textAlign:"left",

            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "2.5rem",
            lineHeight: "30px",
            letterSpacing: "0.03em",
            color: "#FFFFFF",
            textShadow: "15px 12px 50px rgba(0, 0, 0, 0.3)",
        },
        usernameInput:{
            width: "80%",
            height: "60px",
            margin:"0 0 0 10%",

            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.048) 0%, rgba(255, 255, 255, 0.008) 100%)",
            border: "2px solid #EFEFEF",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
            borderRadius: "25px",
        }
        
    }

    return (
        <Box sx={styles.boxBackground}>
            <Box sx={styles.logoContainer} component="img"  alt="Website Logo" src={Logo} />

            <Stack sx={styles.loginFrame} >
                <Box sx={styles.loginTitle}>Login to account</Box>
                <Box sx={styles.divider} />
                <Box sx={styles.usernameLabel}>Username</Box>
                <Box component="input" sx={styles.usernameInput} label="Enter your username"/>
                <div>Password</div>
                <div>password input</div>
                <div>Login button</div>
                <div>forget password lin</div>
            </Stack>
        </Box>
    )
}

export default Home;