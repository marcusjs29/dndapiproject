import { useState, useEffect } from "react";

import { getAbilityScores } from "../../APIHandler";

import AbilityScore from "../abilityscore/AbilityScore";

const Home = () => {

    const [abilityScoreCha, setAbilityScoreCha] = useState();
    const [abilityScoreCon, setAbilityScoreCon] = useState();
    const [abilityScoreDex, setAbilityScoreDex] = useState();
    const [abilityScoreInt, setAbilityScoreInt] = useState();
    const [abilityScoreStr, setAbilityScoreStr] = useState();
    const [abilityScoreWis, setAbilityScoreWis] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setAbilityScoreCha(await getAbilityScores("cha"));
            setAbilityScoreCon(await getAbilityScores("con"));
            setAbilityScoreDex(await getAbilityScores("dex"));
            setAbilityScoreInt(await getAbilityScores("int"));
            setAbilityScoreStr(await getAbilityScores("str"));
            setAbilityScoreWis(await getAbilityScores("wis"));
        }

        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-center mt-4">Ability Scores</h1>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <AbilityScore abilityData={abilityScoreStr} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <AbilityScore abilityData={abilityScoreCon} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <AbilityScore abilityData={abilityScoreDex} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <AbilityScore abilityData={abilityScoreInt} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <AbilityScore abilityData={abilityScoreCha} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <AbilityScore abilityData={abilityScoreWis} />
                </div>
            </div>

        </>
    );
};

export default Home;