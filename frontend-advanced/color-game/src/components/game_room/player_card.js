import {Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";

function PlayerCard({id, defaultColor, player, playerChoices, setPChoices, availableChoices, setAvailableChoices}) {

    function updateChoices(e) {
        /** update player choice **/
        setPChoices(prevState => ({
            ...prevState,
            [player]: e.target.value
        }))

        /** make previous choice available **/
        if (playerChoices[player] !== defaultColor) {
            setAvailableChoices(prevState => ({
                ...prevState,
                [playerChoices[player]]: !prevState[playerChoices[player]]
            }))
        }

        /** make new choice unavailable **/
        if (e.target.value !== defaultColor) {
            setAvailableChoices(prevState => ({
                ...prevState,
                [e.target.value]: !prevState[e.target.value]
            }))
        }
    }

    return (
        <Grid item xs={8} sm={8} md={5} lg={5} sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 0
        }}>
            <Box sx={{
                width: "100%",
                height: 350,
                backgroundColor: playerChoices[player],
                borderRadius: "5%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <Typography variant="h5">
                    Player {player}
                </Typography>
                <FormControl sx={{
                    width: "80%"
                }}>
                    <InputLabel id="color-select-label">Color</InputLabel>
                    <Select
                        labelId="color-select-label"
                        id={id}
                        value={playerChoices[player]}
                        label="Color"
                        onChange={updateChoices}
                    >
                        <MenuItem value={defaultColor}>none</MenuItem>
                        {Object.keys(availableChoices).map((keyName, i) => {
                                if (availableChoices[keyName]) {
                                    return <MenuItem value={keyName} key={i}>{keyName}</MenuItem>
                                } else {
                                    return <MenuItem value={keyName} key={i} disabled>{keyName}</MenuItem>
                                }
                            }
                        )}
                    </Select>
                </FormControl>
            </Box>
        </Grid>
    )
}

export default PlayerCard;