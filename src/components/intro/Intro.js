import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <article className="row">
            <div className="col-12 text-center mt-4">
                <h1>Dungeons and Dragons API</h1>
                <h2>Welcome to my website!</h2>
                <div className="container">
                    <p className="col-6 offset-3">Denne hjemmeside indeholder standard-racerne og de abilities, man bruger for at lave en karakter, og spille Dungeons and Dragons. Det burder være nemt at overskue, såååå... Tadaaa *Jazz hands* </p>
                </div>
            </div>
            <section className="row mt-4">
                <div className="col-6">
                    <Link to={`/ability-scores`} className="btn btn-primary w-100 mt-0 mb-5 col-6 p-4"><strong>DnD: Ability Scores</strong></Link>

                </div>
                <div className="col-6">
                    <Link to={`/races`} className="btn btn-primary w-100 mt-0 mb-5 col-6 p-4"><strong>DnD: Races</strong></Link>
                </div>
            </section>


        </article>
    );
};

export default Intro;