import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Animations from "./pages/Animations";
import Websites from "./pages/Websites";
import Other from "./pages/Other";

function App() {
    return (
        // This is the react-router-dom taking place
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/animations" element={<Animations />} />
                <Route path="/websites" element={<Websites />} />
                <Route path="/other" element={<Other />} />
            </Route>
        </Routes>
    );
}

export default App;