import { Link } from "react-router-dom";

const AbilityScore = ({ abilityData }) => {

    if (abilityData === undefined) {
        return (
            <section className="row">
                <div className="col-12">
                    <h1>No Abilities?...</h1>
                </div>
            </section>
        )
    }

    return (
        <>
            <div className="row text-center m-3 mb-0 mt-0" style={{height: 420}}>
                <section className="col-12 p-3">
                    <h2>{abilityData.full_name}</h2>
                    <h4>Shortened to: {abilityData.name}</h4>
                </section>

                <section className="col-12 p-3">
                    <p>{abilityData.desc}</p>
                </section>
            </div>
            <Link to={`/ability-scores/details/${abilityData.index}`} className="btn btn-primary m-3 w-100 mt-0 mb-5"><strong>Details</strong></Link>

        </>
    );
};

export default AbilityScore;