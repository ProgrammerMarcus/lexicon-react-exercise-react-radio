import { useEffect, useState } from "react";
import "../scss/common.scss";
import { useParams } from "react-router-dom";
import { getAllPrograms } from "./RadioCore";
import Program from "./interfaces/Program";

export function RadioPrograms() {
    const [programs, setPrograms] = useState<Program[]>([]);
    const { id } = useParams();
    useEffect(() => {
        getAllPrograms(id!).then((data) => setPrograms(data));
    }, [id]);

    // dates have to many cases, need other date source for requirements
    function checkIfToday(date: string, day: number) {
        date = date.toLocaleLowerCase();
        switch (day) {
            case 0: // sunday
                if (date.includes("söndag")) {
                    return true;
                }
                break;
            case 1: // monday
                if (date.includes("måndag")) {
                    return true;
                }
                break;
            case 2: // tuesday
                if (date.includes("tisdag")) {
                    return true;
                }
                break;
            case 3: // wednesday
                if (date.includes("onsdag")) {
                    return true;
                }
                break;
            case 4: // thursday
                if (date.includes("torsdag")) {
                    return true;
                }
                break;
            case 5: // friday
                if (date.includes("fredag")) {
                    return true;
                }
                break;
            case 6: // saturday
                if (date.includes("lördag")) {
                    return true;
                }
                break;
            default:
                return false;
        }
        return false;
    }

    return (
        <>
            <main className="list">
                <section className="today day">
                <h2 className="header text-bold">Broadcasting Today</h2>
                {programs
                    .filter((p) => checkIfToday(p.broadcastInfo, new Date().getDay()))
                    .map((p) => (
                        <section key={p.id} className="channel">
                            <div className="head">
                                <img src={p.image} alt="Channel image" className="image" />
                                <h3 className="name">{p.name}</h3>
                            </div>
                            <p className="broadcast">{p.broadcastInfo}</p>
                            <p className="tagline">{p.description}</p>
                        </section>
                    ))}
                </section>
                <section className="tomorrow day">
                <h2 className="header text-bold">Broadcasting Tomorrow</h2>
                {programs
                    .filter((p) => checkIfToday(p.broadcastInfo, (new Date().getDay() + 1) % 6))
                    .map((p) => (
                        <section key={p.id} className="channel">
                            <div className="head">
                                <img src={p.image} alt="Channel image" className="image" />
                                <h3 className="name">{p.name}</h3>
                            </div>
                            <p className="broadcast">{p.broadcastInfo}</p>
                            <p className="tagline">{p.description}</p>
                        </section>
                    ))}
                </section>
                <section className="tomorrow day">
                <h2 className="header text-bold">All Broadcasts</h2>
                {programs
                    .map((p) => (
                        <section key={p.id} className="channel">
                            <div className="head">
                                <img src={p.image} alt="Channel image" className="image" />
                                <h3 className="name">{p.name}</h3>
                            </div>
                            <p className="broadcast">{p.broadcastInfo}</p>
                            <p className="tagline">{p.description}</p>
                        </section>
                    ))}
                </section>
            </main>
        </>
    );
}

export default RadioPrograms;
