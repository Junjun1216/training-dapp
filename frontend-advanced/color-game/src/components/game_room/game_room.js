import {useState} from "react";

import {Container, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import { makeStyles, ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#001E3C"
        },
        secondary: {
            main: "#147A8B"
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
    const [color, setColor] = useState("#B0AAA9");
    const [color2, setColor2] = useState("#B0AAA9");
    const [color3, setColor3] = useState("#B0AAA9");
    const [color4, setColor4] = useState("#B0AAA9");


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
                    <Grid item xs={8} sm={8} md={5} lg={5} sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: 0
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: 350,
                            backgroundColor: color,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <Typography variant="h5">
                                Player 1
                            </Typography>
                            <FormControl sx={{
                                width: "80%"
                            }}>
                                <InputLabel id="color-select-label">Color</InputLabel>
                                <Select
                                    labelId="color-select-label"
                                    id="player-1"
                                    value={color}
                                    label="Color"
                                    onChange={(e) => {
                                        setColor(e.target.value)
                                    }}
                                >
                                    <MenuItem value={"#B0AAA9"}>none</MenuItem>
                                    <MenuItem value={"red"}>red</MenuItem>
                                    <MenuItem value={"green"}>green</MenuItem>
                                    <MenuItem value={"blue"}>blue</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={8} md={5} lg={5} sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: 0
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: 350,
                            backgroundColor: color2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <Typography variant="h5">
                                Player 2
                            </Typography>
                            <FormControl sx={{
                                width: "80%"
                            }}>
                                <InputLabel id="color-select-label">Color</InputLabel>
                                <Select
                                    labelId="color-select-label"
                                    id="player-2"
                                    value={color2}
                                    label="Color"
                                    onChange={(e) => {
                                        setColor2(e.target.value)
                                    }}
                                >
                                    <MenuItem value={"#B0AAA9"}>none</MenuItem>
                                    <MenuItem value={"red"}>red</MenuItem>
                                    <MenuItem value={"green"}>green</MenuItem>
                                    <MenuItem value={"blue"}>blue</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={8} md={5} lg={5} sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: 0
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: 350,
                            backgroundColor: color3,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <Typography variant="h5">
                                Player 3
                            </Typography>
                            <FormControl sx={{
                                width: "80%"
                            }}>
                                <InputLabel id="color-select-label">Color</InputLabel>
                                <Select
                                    labelId="color-select-label"
                                    id="player-3"
                                    value={color3}
                                    label="Color"
                                    onChange={(e) => {
                                        setColor3(e.target.value)
                                    }}
                                >
                                    <MenuItem value={"#B0AAA9"}>none</MenuItem>
                                    <MenuItem value={"red"}>red</MenuItem>
                                    <MenuItem value={"green"}>green</MenuItem>
                                    <MenuItem value={"blue"}>blue</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={8} md={5} lg={5} sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: 0
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: 350,
                            backgroundColor: color4,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <Typography variant="h5">
                                Player 4
                            </Typography>
                            <FormControl sx={{
                                width: "80%"
                            }}>
                                <InputLabel id="color-select-label">Color</InputLabel>
                                <Select
                                    labelId="color-select-label"
                                    id="player-2"
                                    value={color4}
                                    label="Color"
                                    onChange={(e) => {
                                        setColor4(e.target.value)
                                    }}
                                >
                                    <MenuItem value={"#B0AAA9"}>none</MenuItem>
                                    <MenuItem value={"red"}>red</MenuItem>
                                    <MenuItem value={"green"}>green</MenuItem>
                                    <MenuItem value={"blue"}>blue</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default GameRoom;