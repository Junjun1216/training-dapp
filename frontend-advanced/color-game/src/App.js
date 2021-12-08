import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./firebaseConfig.js";

import GameRoom from "./components/game_room/game_room";
import Login from "./components/login/login";
import AuthContext from "./AuthContext";


function App() {
    const [authToken, setAuthToken] = useState({});

    const contextValue = {
        authToken: authToken,
        setAuthToken: setAuthToken
    }

    return (
       <BrowserRouter>
           <Routes>
               <Route name="gameRoom" path="/game-room" element={
                   <AuthContext.Provider value={contextValue}>
                       <GameRoom authToken={authToken}/>
                   </AuthContext.Provider>
               }/>
               <Route name="login" path="/*" element={
                   <AuthContext.Provider value={contextValue}>
                       <Login/>
                   </AuthContext.Provider>
               }/>
           </Routes>
       </BrowserRouter>
    );
}

export default App;
