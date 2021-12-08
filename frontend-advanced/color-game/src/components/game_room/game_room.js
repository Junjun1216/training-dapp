import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Container, Typography, Button, Input } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import PlayerCard from "./player_card";
import AuthContext from "../../AuthContext";

import { getFunctions, httpsCallable } from "firebase/functions";

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
            fontSize: "125%"
        }
    }
});

function GameRoom() {
    const [defaultColor] = useState("#B0AAA9");
    const { authToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const functions = getFunctions();

    const [playerChoices, setPChoices] = useState({
        p1: {choice: defaultColor},
        p2: {choice: defaultColor},
        p3: {choice: defaultColor},
        p4: {choice: defaultColor}
    });

    const [availableChoices, setAvailableChoices] = useState({
        "red": true,
        "green": true,
        "blue": true,
        "yellow": true
    });

    useEffect(() => {
        let fetchAvailableColors = httpsCallable(functions, "fetchAvailableColors");
        fetchAvailableColors().then((querySnapshot) => {
                setAvailableChoices(querySnapshot.data)
            }
        )

        let fetchUsers = httpsCallable(functions, "fetchUsers");
        fetchUsers().then((querySnapshot) => {
                setPChoices(querySnapshot.data)
            }
        )
    }, [functions])

    useEffect(() => {
        if (Object.keys(authToken).length === 0) {
            navigate("/")
        }
    }, [authToken, navigate])

    function updateChoices(player, newChoice) {
        let newAvailability = Object.assign({}, availableChoices);

        /** make previous choice available **/
        if (playerChoices[player].choice !== defaultColor) {
            newAvailability[playerChoices[player].choice] = !newAvailability[playerChoices[player].choice];
        }

        /** make new choice unavailable **/
        if (newChoice !== defaultColor) {
            newAvailability[newChoice] = !newAvailability[newChoice];
        }

        /** submit update to backend **/
        let updateAvailability = httpsCallable(functions, "updateAvailability");
        updateAvailability({availableChoices: newAvailability})
            .then(() => {
                setAvailableChoices(newAvailability)
            });

        /** update player choice **/
        let newPlayerChoices = Object.assign({}, playerChoices);
        newPlayerChoices[player].choice = newChoice;

        /** submit update to backend **/
        let updateUser = httpsCallable(functions, "updateUser");
        updateUser({user: newPlayerChoices[player]})
            .then(() => {
                setPChoices(newPlayerChoices)
            })
    }

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("Upload A Profile Picture")

    function handleChange(e) {
        if (e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = function() {
                setImage(reader.result)
                setFileName(e.target.files[0].name)
            }

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    function handleUpload() {
        let uploadProfile = httpsCallable(functions, "uploadProfile");

        uploadProfile({image: image})
            .then(res => {
                if (res.data) {
                    let fetchUsers = httpsCallable(functions, "fetchUsers");
                    fetchUsers().then((querySnapshot) => {
                            setPChoices(querySnapshot.data)
                        }
                    )
                }
            })
    }

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
                      alignItems={"center"} marginBottom={1}>
                    {Object.keys(playerChoices).map((player, i) => {
                        return <PlayerCard
                            key={i}
                            id={i.toString()}
                            defaultColor={defaultColor}
                            isCurrentPlayer = {authToken.uid === playerChoices[player].uid}
                            player={player}
                            playerChoices={playerChoices}
                            availableChoices={availableChoices}
                            updateChoices={updateChoices}
                        />
                    })}
                </Grid>
                <label style={{color: "#fff", fontWeight: "bold", marginBottom: "4px"}}>
                    Change Profile Picture
                </label>
                <Grid containe spacing={4} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Button component={"label"} variant="contained" sx={{
                        backgroundColor: '#35BEB4',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#28776D',
                            color: '#fff',
                        },
                        fontWeight: "bold",
                        marginRight: "10px"
                    }}>
                        <Input type="file" id="image-upload" accept="image/jpeg" style={{display: "none"}}
                               onChange={handleChange}/>
                        {fileName}
                    </Button>
                    <Button variant="contained" sx={{
                        backgroundColor: '#35BEB4',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#28776D',
                            color: '#fff',
                        },
                        fontWeight: "bold"
                    }} onClick={handleUpload}>Upload</Button>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default GameRoom;