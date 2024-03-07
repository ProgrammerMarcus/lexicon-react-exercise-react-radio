import { useEffect, useState } from "react";
import "../scss/common.scss";
import { Link, useParams } from "react-router-dom";
import { getProgram } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Program from "./interfaces/Program";

export function RadioProgramView() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [program, setProgram] = useState<Program>();
    useEffect(() => {
        setLoading(true);
        getProgram(Number(id!)).then((data) => {
            setProgram(data.program);
            setLoading(false);
        });
    }, [id]);

    return (
        <>
            {loading && <RadioLoader />}
            {program && (
                <main className="view">
                    <div className="limit">
                        <h2 className="header-big text-bold">{program.name || "Unavailable"}</h2>
                        <img src={program.programimage} alt="Program image" className="image-wide" />
                        <div className="info">
                            <span className="text-bold">{program.description}</span>
                            <span>{`Email: ${program.email || "Unavailable"}`}</span>
                            <span>{`Phone: ${program.phone || "Unavailable"}`}</span>
                            <span>{"Archived: " + (program.archived ? "Yes" : "No")}</span>
                            <span>{"On demand: " + (program.hasondemand ? "Yes" : "No")}</span>
                            <span>{"Podcast: " + (program.haspod ? "Yes" : "No")}</span>
                            <span>{"Category: " + (program.programcategory ? program.programcategory.name : "Unavailable")}</span>
                            <span>{`Airs on: ${program.channel.name || "Unavailable"}`}</span>
                            <span className="broadcast">{program.broadcastinfo}</span>
                            <div className="controls">
                            <a className="btn text-bold" href={program.programurl || ""}>{(program.programurl ? "Source" : "Unavailable")}</a>
                            <Link className="btn text-bold" to={`/schedule/${program.channel.id}`}>
                                View Channel
                            </Link>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}

export default RadioProgramView;
