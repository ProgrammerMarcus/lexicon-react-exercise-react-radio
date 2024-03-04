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
            <main className="list expand">
                <section className="day">
                    <h2 className="header-big text-bold">{program?.name}</h2>
                    <img src={program?.programimagewide} alt="Program image" className="image-wide" />
                    <div className="box info">
                        <h3 className="header">Info</h3>
                        <span className="text-bold">{program?.description}</span>
                        <span>{`Email: ${program?.email || "Unavailable"}`}</span>
                        <span>{`Phone: ${program?.phone || "Unavailable"}`}</span>
                        <span>{"Archived: " + (program?.archived ? "Yes" : "No")}</span>
                        <span>{"On demand: " + (program?.hasondemand ? "Yes" : "No")}</span>
                        <span>{"Podcast: " + (program?.haspod ? "Yes" : "No")}</span>
                        <span>{`Category: ${program?.programcategory.name || "Unavailable"}`}</span>
                        <span>{`Airs on: ${program?.channel.name || "Unavailable"}`}</span>
                        <span className="broadcast">{program?.broadcastinfo}</span>
                        <Link className="btn text-bold" to={`/schedule/${program?.id}`}>
                            View Channel
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}

export default RadioProgramView;
