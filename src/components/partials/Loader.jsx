import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress style={{ width: '25px' , height: '25px' }} />
        </Box>
    )
}

export default Loader