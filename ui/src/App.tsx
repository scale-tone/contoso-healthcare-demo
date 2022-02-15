import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { AppBar, Button, Box, Chip, Grid, LinearProgress, List, ListItem, Paper, TextField, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { DurableEntitySet } from './common/DurableEntitySet';
import { HealthCheckState } from './shared/HealthCheckState';

// Optional setup
DurableEntitySet.setup({

    fakeUserNamePromise: new Promise<string | null>((resolve) => {

        var userName = '';

        // Trying to fetch current user name from server - this should work when deployed to Azure and EasyAuth properly configured
        fetch('/.auth/me').then(r => r.json()).then(result => {

            if (!result || !result.length) {
                throw new Error('EasyAuth seems to be not configured. Falling back to a fake user name');
            }

            userName = result[0].user_id;

            // By returning null here we tell DurableEntitySet to proceed with using EasyAuth
            resolve(null);

        }).catch(() => {

            // Asking the user for some fake user name. Obviously, we should never do it like that in production.
            userName = prompt('Enter your name:', 'Anonymous') as string;
            resolve(userName);
        });
    }),

    logger: { log: (l, msg: string) => console.log(msg) }
});

const entityName = 'HealthCheckEntity';
const entityKey = 'my-health-check';

const appState = makeAutoObservable({

    msgText: '',

    state: DurableEntitySet.createEntity(entityName, entityKey, new HealthCheckState())
});

// Rendering that entity state
export const App = observer(
    class App extends React.Component {

        private sendMessage() {

            DurableEntitySet.signalEntity(entityName, entityKey, 'sendHealthCheck', appState.msgText);
        }

        render(): JSX.Element { return (<>

            <AppBar position="static" color="default" className="app-bar">
                <Toolbar>

                    <TextField
                        fullWidth
                        label="Your message"
                        InputLabelProps={{ shrink: true }}
                        variant="outlined"
                        size="small"
                        value={appState.msgText}
                        onChange={(evt) => appState.msgText = evt.target.value as string}
                        onKeyPress={(evt) => {
                            if (evt.key === 'Enter') {
                                evt.preventDefault();
                                this.sendMessage();
                            }
                        }}
                    />

                    <Box width={20} />

                    <Button variant="contained" color="default" size="large" className="new-appointment-button"
                        onClick={() => this.sendMessage()}
                    >
                        Send
                    </Button>

                    <Box width={40} />

                    <AccountCircle />
                    <Box width={5} />

                </Toolbar>
            </AppBar>

            <List>

                {appState.state.history.map(msg => (<ListItem><Paper className="appointment-paper">
                
                    <Grid container spacing={2}>

                        <Grid item xs={2}>
                            <Typography className="participants-text">Participants:</Typography>
                        </Grid>

                    </Grid>
                
                </Paper></ListItem>))}

            </List>
        </>);}
    }
);