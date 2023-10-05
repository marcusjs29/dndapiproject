import { useEffect, useState } from "react"
import { getRaces } from "../../APIHandler";
import Races from "../races/Races";


const RacesHome = () => {

    const [dndRaceDragonborn, setdndRaceDragonborn] = useState();
    const [dndRaceDwarf, setdndRaceDwarf] = useState();
    const [dndRaceElf, setdndRaceElf] = useState();
    const [dndRaceGnome, setdndRaceGnome] = useState();
    const [dndRaceHalfElf, setdndRaceHalfElf] = useState();
    const [dndRaceHalfOrc, setdndRaceHalfOrc] = useState();
    const [dndRaceHalfling, setdndRaceHalfling] = useState();
    const [dndRaceHuman, setdndRaceHuman] = useState();
    const [dndRaceTiefling, setdndRaceTiefling] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setdndRaceDragonborn(await getRaces("dragonborn"));
            setdndRaceDwarf(await getRaces("dwarf"));
            setdndRaceElf(await getRaces("elf"));
            setdndRaceGnome(await getRaces("gnome"));
            setdndRaceHalfElf(await getRaces("half-elf"));
            setdndRaceHalfOrc(await getRaces("half-orc"));
            setdndRaceHalfling(await getRaces("halfling"));
            setdndRaceHuman(await getRaces("human"));
            setdndRaceTiefling(await getRaces("tiefling"));
        }

        fetchData();
    }, [])

    return (
        <>
            <h1 className="text-center mt-4">Races</h1>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <Races racesData={dndRaceDragonborn} />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Races racesData={dndRaceDwarf} />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Races racesData={dndRaceElf} />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Races racesData={dndRaceGnome} />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Races racesData={dndRaceHalfElf} />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Races racesData={dndRaceHalfOrc} />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Races racesData={dndRaceHalfElf} />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Races racesData={dndRaceHuman} />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <Races racesData={dndRaceTiefling} />
                </div>
            </div>
        </>

    );
};

export default RacesHome;;