import { BrowserRouter, Routes, Route} from "react-router-dom";
import GameRoom from "./components/game_room/game_room";

function App() {

   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<GameRoom/>}/>
           </Routes>
       </BrowserRouter>
  );
}

export default App;
