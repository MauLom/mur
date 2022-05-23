import React from 'react';
import { Box } from "@mui/material"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate

} from "react-router-dom";
import WheelScreen from '../../components/wheelScreen';
import Main from '../Main/main';
import Registro from '../Registro/Registro';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import Login from '../Login/Login';

function MutableContent() {
    return (
        // <AuthContext >
            <Box>
                <Router>
                    <Routes >
                        <Route
                            path="*"
                            element={<Navigate to="/main" replace />}
                        />
                        <Route path='/main' element={<Main />} />
                        <Route path='/wheel' element={<WheelScreen />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/login" element={<Login />} />

                    </Routes >
                </Router>
            </Box>
        // </AuthContext>



    );
}

export default MutableContent;
