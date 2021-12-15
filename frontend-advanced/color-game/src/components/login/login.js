import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { useContext, useState } from "react";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, inMemoryPersistence } from "firebase/auth";
import AuthContext from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#958F8E"
        },
        secondary: {
            main: "#FAFAFA"
        }
    },
    typography: {
        h1: {
            color: "white",
            textAlign: "center",
            fontSize: "50px"
        },
        h2: {
            color: "red",
            textAlign: "center",
            fontSize: "24px"
        }
    }
});

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { setAuthToken } = useContext(AuthContext);

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        setPersistence(getAuth(), inMemoryPersistence).then(() =>
        {
            signInWithEmailAndPassword(getAuth(), email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setAuthToken(user);
                    setError("");
                    navigate("/game-room");
                })
                .catch((error) => {
                    setError(error.code);
                    setEmail("");
                    setPassword("");
                });
        })
        .catch((error) => {
            setError(error.code);
            setEmail("");
            setPassword("");
        })
    }

    function handleSignup(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(getAuth(), email, password).then((userCredential) => {
            const user = userCredential.user;
            setAuthToken(user);
            setError("");
            setTimeout(navigate("/game-room"), 3000);
        }).catch((error) => {
            setError(error.code);
            setEmail("");
            setPassword("");
        });
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
                <Typography variant="h2">
                    {error}
                </Typography>
                <Grid container maxWidth="lg" display={"flex"} justifyContent={"center"}>
                    <Grid item>
                        <form style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "20px"
                        }}>
                            <TextField required focused color="secondary" id={"email"} label="Email" type={"email"} variant={"outlined"}
                            sx={{
                                marginBottom: "10px",
                                width: "300px",
                            }}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}/>
                            <TextField required focused color="secondary" id={"password"} label="Password" type={"password"} variant={"outlined"}
                            sx={{
                                marginBottom: "10px",
                                width: "300px",
                            }}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}/>
                            <Button type={"submit"} color="secondary" variant="contained" onClick={handleLogin}>login</Button>
                            <hr style={{width: "250px"}}/>
                            <Button type={"submit"} color="secondary" variant="contained" onClick={handleSignup}>sign up</Button>
                        </form>
                    </Grid>
                </Grid>
        </Container>
        </ThemeProvider>
    )
}

export default Login;
