import { Link } from "react-router-dom";
import { useThemeProvider } from "../../providers/ThemeProvider";

const Nav = () => {
    const { handleToggleDarkmode } = useThemeProvider();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/" className="navbar-brand">DnD Homepage</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dnd-db-nav" aria-controls="dnd-db-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="dnd-db-nav">
                    <div className="navbar-nav me-auto">
                        <Link className="nav-link active" aria-current="page" to="/ability-scores">Abilityscores</Link>
                        <Link className="nav-link active" to="/races">Races</Link>
                    </div>

                    {/* Laver knappen i nav-baren, så man kan skifte temaet på siden. */}
                    <button onClick={handleToggleDarkmode} className="nav-link active d-flex"><strong>Toggle Darkmode</strong></button>

                </div>

            </div>

        </nav>

    );
};

export default Nav;