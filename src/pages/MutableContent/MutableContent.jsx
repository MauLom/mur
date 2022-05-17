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


function MutableContent() {
    return (
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
                </Routes >
            </Router>
        </Box>


    );
}

export default MutableContent;
