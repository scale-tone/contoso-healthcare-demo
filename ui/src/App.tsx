import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { AppBar, Button, Box, Chip, List, ListItem, Paper, TextField, Toolbar, Typography } from '@material-ui/core';

import { DurableEntitySet } from './common/DurableEntitySet';
import { HealthCheckState, SymptomsEnum } from './shared/HealthCheckState';

const entityName = 'HealthCheckEntity';
var entityKey = '';

const appState = makeAutoObservable({

    msgText: '',

    state: new HealthCheckState()
});

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

        }).then(() => {

            entityKey = `health-check-${userName}`

            appState.state = DurableEntitySet.createEntity(entityName, entityKey, new HealthCheckState());
        });
    }),

    logger: { log: (l, msg: string) => console.log(msg) }
});


// Rendering that entity state
export const App = observer(
    class App extends React.Component {

        private sendMessage() {

            DurableEntitySet.signalEntity(entityName, entityKey, 'sendHealthCheck', appState.msgText);
            appState.msgText = '';
        }

        render(): JSX.Element { return (<>

            <AppBar position="static" color="default" className="app-bar">
                <Toolbar>

                    Your symptoms so far:

                    {appState.state?.symptoms.map((symptom: SymptomsEnum) => (
                        <Chip label={SymptomsEnum[symptom]} color="secondary" variant="outlined" className="appointment-status-chip" />
                    ))}

                </Toolbar>
            </AppBar>

            <List>

                {appState.state?.history.map((msg: any) => (<ListItem>
                    
                    <Paper className="appointment-paper" style={{ marginLeft: !msg.isFromServer ? 20 : 0 }}>
                
                        <Typography>{msg.text}</Typography>
                
                    </Paper>

                </ListItem>))}

            </List>

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

                </Toolbar>
            </AppBar>

        </>);}
    }
);