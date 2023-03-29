import { Route, Routes } from "react-router-dom";
import ItemContainer from "./components/ItemContainer";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ItemContainer />} />
      <Route path="/:idParams" element={<ItemDetail />}/>
      <Route path="*"/>
    </Routes>
  );
}

export default App;