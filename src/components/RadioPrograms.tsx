import { useEffect, useState } from "react";
import "../scss/common.scss";
import { useParams } from "react-router-dom";
import { getAllAiringProgramsChannelJSON } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Program from "./interfaces/Program";

export function RadioPrograms() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [programs, setPrograms] = useState<Program[]>([]);
    useEffect(() => {
        setLoading(true);
        getAllAiringProgramsChannelJSON(Number(id!)).then((data) => {
            setPrograms(data.programs);
            setLoading(false);
        });
    }, [id]);

    return (
        <>
            {loading && <RadioLoader />}
            <main className="list expand">
                <section className="day">
                    <h2 className="header text-bold">Programs</h2>
                    {programs.map((p) => (
                        <section key={p.id} className="box">
                            <div className="head">
                                <img src={p.programimage || "/logo.svg"} alt="Channel image" className="image" />
                                <h3 className="name">{p.name}</h3>
                            </div>
                            <p className="broadcast">{p.broadcastinfo}</p>
                            <p className="tagline">{p.description}</p>
                        </section>
                    ))}
                </section>
            </main>
        </>
    );
}

export default RadioPrograms;
