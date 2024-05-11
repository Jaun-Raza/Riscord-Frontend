import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// Navbar 
import Nav from '../partials/Nav';

const Item = styled(Paper)(({ theme, height }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#23272a' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: height || 'auto',
}));

const Layout = ({ Content }) => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ margin: '0.5rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={2.5}>
                    <Item height="80vh">xs=4</Item>
                </Grid>
                <Grid item xs={9.5}>
                    <Item style={{
                        height: '80vh',
                        overflowY: 'auto',
                    }}>
                        {Content}
                    </Item>
                </Grid>
                <Grid item xs={2.5}>
                    <Item height="10vh">xs=4</Item>
                </Grid>
                <Grid item xs={9.5}>
                    <Item height="10vh" style={{ display: 'flex' }}>
                        <Nav />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Layout;
