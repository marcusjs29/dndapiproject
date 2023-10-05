import React from "react";
import RacesHome from "../racesHome/RacesHome";
import { Link } from "react-router-dom";

const Races = ({ racesData }) => {

    if (racesData === undefined) {
        return (
            <section className="row">
                <div className="col-12">
                    <h1>No Races...</h1>
                </div>
            </section>
        )
    }

    return (
        <>
            <div className="row text-center m-3 mb-0 mt-0" style={{height: 290}}>
                <section className="col-12 p-3">
                    <h2>{racesData?.name}</h2>
                </section>
                
                <section className="col-12 p-3">
                    <p>{racesData?.alignment}</p>
                </section>
            </div>
            <Link to={`/races/details/${racesData.index}`} className="btn btn-primary m-3 w-100 mt-0 mb-5"><strong>Details</strong></Link>

        </>
    );
};

export default Races;