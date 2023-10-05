import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import AbilityDetail from "./components/abilityDetail/AbilityDetail";
import RacesHome from "./components/racesHome/RacesHome";
import RacesDetail from "./components/racesDetail/RacesDetail";
import Intro from "./components/intro/Intro";
import ThemeProvider from "./providers/ThemeProvider";

const App = () => {
  return (
    // Vi omkredser ThemeProvider af alle vores elementer, så alle elementerne bliver påvirket at tema-skiftet.
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/ability-scores" element={<Home />} />
            <Route path="/ability-scores/details/:index" element={<AbilityDetail />}></Route>
            <Route path="/races" element={<RacesHome />} />
            <Route path="/races/details/:index" element={<RacesDetail />}></Route>


            <Route path="*" element={<>HTTP 404 - The page you were looking for does not exist.</>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
