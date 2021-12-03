import {useState} from "react";

import { Grid, Container, Typography} from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import PlayerCard from "./player_card";

const theme = createTheme({
    palette: {
        primary: {
            main: "#001E3C"
        }
    },
    typography: {
        h1: {
            color: "white",
            margin: "0 0 10px 0",
            textAlign: "center",
        },
        h5: {
            color: "white",
            margin: "0 0 10px 0",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "150%"
        }
    }
});

function GameRoom() {
    const [defaultColor] = useState("#B0AAA9");

    const [playerChoices, setPChoices] = useState({
        "1": defaultColor,
        "2": defaultColor,
        "3": defaultColor,
        "4": defaultColor
    });

    const [availableChoices, setAvailableChoices] = useState({
        "red": true,
        "green": true,
        "blue": true,
        "yellow": true
    });

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xlg" sx={{
                backgroundColor: "primary.main",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography variant="h1">
                    Color Game
                </Typography>
                <Grid container spacing={4} maxWidth="lg" flexDirection={"row"} justifyContent={"center"}
                      alignItems={"center"} marginBottom={4}>
                    {Object.keys(playerChoices).map((keyName, i) => {
                        return <PlayerCard
                            key={i}
                            id={i.toString()}
                            defaultColor={defaultColor}
                            player={keyName}
                            playerChoices={playerChoices}
                            setPChoices={setPChoices}
                            availableChoices={availableChoices}
                            setAvailableChoices={setAvailableChoices}
                        />
                    })}
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default GameRoom;