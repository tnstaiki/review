import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const AppLayout = ({ children, header }) => {
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        {header}
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>{children}</main>
        </Container>
    );
};

export default AppLayout;