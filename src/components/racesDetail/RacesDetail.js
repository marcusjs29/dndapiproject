import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRaces } from "../../APIHandler";


const RacesDetail = () => {
    const {index } = useParams();

    const [raceDetail, setRaceDetail] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setRaceDetail(await getRaces(index))
        }

        fetchData();

        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="row">
            <section className="col">
            <h2>{raceDetail?.name}</h2>
            <p>{raceDetail?.alignment}</p>
            <h4>Age: </h4>
            <p>{raceDetail?.age}</p>
            <h4>Size: </h4>
            <p>{raceDetail?.size_description}</p>
            <h4>Languages: </h4>
            <p>{raceDetail?.language_desc}</p>

            <h4>Traits</h4>
            {
                raceDetail?.traits.map((trait => (
                    <>
                        <p>{trait?.name}</p>
                    </>
                )))
            }




            </section>
        </article>
    );
};

export default RacesDetail;