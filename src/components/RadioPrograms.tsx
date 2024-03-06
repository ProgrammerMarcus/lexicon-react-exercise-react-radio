import { useEffect, useState } from "react";
import "../scss/common.scss";
import { useParams } from "react-router-dom";
import { getAllAiringProgramsChannelJSON } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Program from "./interfaces/Program";
import RadioProgram from "./RadioProgram";

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
            <main className="list">
                <h2 className="header text-bold">Programs</h2>
                <div className="day">
                    {programs.map((p) => (
                        <RadioProgram key={p.id} p={p} />
                    ))}
                </div>
            </main>
        </>
    );
}

export default RadioPrograms;
