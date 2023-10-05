import { useEffect, useState } from "react";
import { getSkillsByIndex } from "../../APIHandler";


const SkillDescription = ({index}) => {

    const [skillsDescByIndex, setSkillsDescByIndex] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setSkillsDescByIndex(await getSkillsByIndex(index))
        }

        fetchData();
    }, [])

    return (
        <article className="row">
            <section className="col-12">
                {skillsDescByIndex?.desc.map(d => (
                    <p>{d}</p>
                ))}
            </section>
        </article>
    );
};

export default SkillDescription;