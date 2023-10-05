// Importerer de hooks vi bruger fra react.
import { createContext, useContext, useEffect, useState } from "react";

// Bruges til at gemme data på tværs af andre komponenter i forhold til den nærmeste provider.
const ThemeContext = createContext();

// Laver en const
export const useThemeProvider = () => {

    // Kontekst værdi for det kaldte objekt.
    const context = useContext(ThemeContext);

    // Returnerer kontekst.
    return context;
}

// Parser children i ThemeProvider.
const ThemeProvider = ({ children }) => {

    // Tracker dataen der er levet ændret, den består en af get, for a trække data ud af "skyen", og set value til at gemme data op i "skyen"
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Opretter funktionen til knappen, der ændrer temaet.
    const handleToggleDarkmode = () => {

        // VI har et parameter, der indeholder den tidligere værdi, og det sætter vi til at være det modsatte fordi det er en boolean.
        setIsDarkMode(prevValue => !prevValue)
    }

    // Vi arbejder på en side, hvor vi loader js ind. Fordi hjemmesiden er loadet kan den ikke loade en ny js og ny html, derfor har vi useeffekten, for at opdatere, når siden allerede er loadet.
    // UseEffect bliver kaldt når elementet bliver loadet, så længe at dependency-yarrayet er tomt.
    useEffect(() => {

        // Tager fat i html-tagget
        const html = document.documentElement;

        // Hvis den er i darkmode fjerner den bare dark fra bsTheme, for at gøre sidne hvidt tema.
        if (isDarkMode) {
            html.dataset.bsTheme = "";
        }

        // Hvis den ikke er i darkmode sætter den det til dark.
        else {
            html.dataset.bsTheme = "dark";
        }
        // UseEffecten bliver også kaldt når isDarkMode bliver ændret, den fjerner eller tilføjer.
    }, [isDarkMode]);

    return (

        // Sender værdierne isDarkMode og handleToggleDarkmode til alle childrens, så man kan bruge værdierne i andre filer.
        <ThemeContext.Provider value={{ isDarkMode, handleToggleDarkmode }}>
            {/* ThemeContexten gælder for alle dens children (tror det er i forhold til childrenen i "App.js") */}
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;