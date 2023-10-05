import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getAbilityScores } from "../../APIHandler";
import SkillDescription from "./SkillDescription";

const AbilityDetail = () => {
    const { index } = useParams();

    const [abilityScoreIndex, setAbilityScoreIndex] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setAbilityScoreIndex(await getAbilityScores(index))
        }

        fetchData();

        window.scrollTo(0, 0);
    }, []);


    return (
        <article className="row">
            <section className="col">
                <h1>{abilityScoreIndex?.full_name}</h1>
                <h6>{abilityScoreIndex?.name}</h6>

                {
                    abilityScoreIndex?.skills.map((skill => (
                        <>
                            <h3>{skill?.name}</h3>
                            <SkillDescription index={skill.index}/>
                        </>
                    )))
                }
            </section>
        </article>
    )
}

export default AbilityDetail;