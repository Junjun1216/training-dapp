import {Box, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";

function PlayerCard({id, defaultColor, isCurrentPlayer, player, playerChoices, availableChoices, updateChoices}) {

    function handleUpdate(e) {
        updateChoices(player, e.target.value)
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
                height: 325,
                backgroundColor: playerChoices[player].choice,
                borderRadius: "5%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <Paper style={{
                    backgroundImage: `url(${playerChoices[player].profileUrl})`,
                    width: "100px",
                    height: "100px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    marginBottom: "10px"
                }}/>
                <Typography variant="h5">
                    {player}
                </Typography>
                <FormControl sx={{
                    width: "80%"
                }}>
                    <InputLabel id="color-select-label">Color</InputLabel>
                    <Select
                        labelId="color-select-label"
                        id={id}
                        value={playerChoices[player].choice}
                        label="Color"
                        onChange={handleUpdate}
                        disabled={!isCurrentPlayer}
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