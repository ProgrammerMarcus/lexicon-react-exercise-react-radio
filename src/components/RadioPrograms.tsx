import { useEffect, useState } from "react";
import "../scss/common.scss";
import { useParams } from "react-router-dom";
import { getProgramsOnDateOnChannelJSON, stringToDate } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Schedule from "./interfaces/Schedule";

export function RadioPrograms() {
    const [programs, setPrograms] = useState<Schedule[]>([]);
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        const date = new Date()
        const formatted = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        getProgramsOnDateOnChannelJSON(id!, formatted).then((data) => {setPrograms(data.schedule); setLoading(false)});
    }, [id]);

    return (
        <>
            {loading && (<RadioLoader  />)}
            <main className="list">
                <section className="today day">
                    <h2 className="header text-bold">Broadcasting Today</h2>
                    {programs
                        .map((p) => (
                            <section key={p.starttimeutc} className="box">
                                <div className="head">
                                    <img src={p.imageurl || "/logo.svg"} alt="Channel image" className="image" />
                                    <h3 className="name">{p.title}</h3>
                                </div>
                                <p className="broadcast">{stringToDate(p.starttimeutc)}</p>
                                <p className="tagline">{p.description}</p>
                            </section>
                        ))}
                </section>
            </main>
        </>
    );
}

export default RadioPrograms;
