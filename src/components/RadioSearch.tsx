import { useEffect, useState } from "react";
import "../scss/common.scss";
import { useParams } from "react-router-dom";
import { getProgramsSearch } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Program from "./interfaces/Program";
import RadioProgram from "./RadioProgram";

export function RadioSearch() {
    const { search } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [programs, setPrograms] = useState<Program[]>([]);
    useEffect(() => {
        setLoading(true);
        getProgramsSearch(search!).then((data) => {
            setPrograms(data);
            setLoading(false);
        });
    }, [search]);

    return (
        <>
            {loading && <RadioLoader />}
            <main className="list expand">
                <section className="day">
                    <h2 className="header text-bold">Search Results</h2>
                    {programs.map((p) => (
                        <RadioProgram key={p.id} p={p} />
                    ))}
                </section>
            </main>
        </>
    );
}

export default RadioSearch;
