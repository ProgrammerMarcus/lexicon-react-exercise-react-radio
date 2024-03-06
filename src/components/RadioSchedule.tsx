import { useEffect, useState } from "react";
import "../scss/common.scss";
import { Link, useParams } from "react-router-dom";
import { getProgramsOnDateOnChannelJSON, stringToDate } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Schedule from "./interfaces/Schedule";

export function RadioSchedule() {
    const [active, setActive] = useState("Today");
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [date, setDate] = useState<Date>(new Date());
    const [programs, setPrograms] = useState<Schedule[]>([]);
    useEffect(() => {
        setLoading(true);
        const formatted = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        getProgramsOnDateOnChannelJSON(Number(id!), formatted).then((data) => {
            setPrograms(data.schedule);
            setLoading(false);
        });
    }, [date, id]);

    return (
        <>
            {loading && <RadioLoader />}
            <main className="list">
                <div className="controls">
                    <span className="select">View Schedule for:</span>
                    <button
                        className={active === "Today" ? "btn active" : "btn"}
                        onClick={() => {
                            setDate(new Date(new Date().getTime()));
                            setActive("Today");
                        }}
                    >
                        Today
                    </button>
                    <button
                        className={active === "Tomorrow" ? "btn active" : "btn"}
                        onClick={() => {
                            setDate(new Date(new Date().getTime() + 86400000));
                            setActive("Tomorrow");
                        }}
                    >
                        Tomorrow
                    </button>
                    <button
                        className={active === "Overmorrow" ? "btn active" : "btn"}
                        onClick={() => {
                            setDate(new Date(new Date().getTime() + 172800000));
                            setActive("Overmorrow");
                        }}
                    >
                        Overmorrow
                    </button>
                </div>
                <section className="day">
                    <h2 className="header text-bold">{active}</h2>
                    {programs.map((p) => (
                        <section key={p.starttimeutc} className="box">
                            <div className="head">
                                <img src={p.imageurl || "/logo.svg"} alt="Channel image" className="image" />
                                <h3 className="name">{p.program.name}</h3>
                            </div>
                            <p className="broadcast">{stringToDate(p.starttimeutc)}</p>
                            <p className="tagline">{p.description}</p>
                            <Link className="btn text-bold" to={`/view/${p.program.id}`}>
                                View
                            </Link>
                        </section>
                    ))}
                </section>
            </main>
        </>
    );
}

export default RadioSchedule;
