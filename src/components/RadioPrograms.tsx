import { useEffect, useState } from "react";
import "./RadioChannels.scss";
import { useParams } from 'react-router-dom'
import { getAllPrograms } from "./RadioCore";
import Program from "./interfaces/Program";

export function RadioPrograms() {
    const [programs, setPrograms] = useState<Program[]>([]);
    const { id } = useParams()
    useEffect(() => {
        getAllPrograms(id!).then((data) => setPrograms(data));
    }, [id]);

    return (
        <>
            <main className="RadioChannels">
                <h2 className="header text-bold">Available programs</h2>
                {programs.map((p) => (
                    <section key={p.id} className="channel">
                        <div className="head">
                            <img src={p.image} alt="Channel image" className="image" />
                            <h3 className="name">{p.name}</h3>
                        </div>
                        <p className="tagline">{p.description}</p>
                        <button type="button" className="btn text-bold">?</button>
                    </section>
                ))}
            </main>
        </>
    );
}

export default RadioPrograms;
