import { useContext, useEffect, useState } from "react";
import "../scss/common.scss";
import { getSpecificPrograms } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Program from "./interfaces/Program";
import RadioProgram from "./RadioProgram";
import { FavoritesContext } from "../App";

export function RadioFavorites() {
    const [loading, setLoading] = useState<boolean>(true);
    const [programs, setPrograms] = useState<Program[]>([]);
    const { favorites } = useContext(FavoritesContext);
    useEffect(() => {
        setLoading(true);
        getSpecificPrograms(favorites).then((data) => {
            setPrograms(data);
            setLoading(false);
        });
    }, [favorites]);

    return (
        <>
            {loading && <RadioLoader />}
            <main className="list expand">
                <section className="day">
                    <h2 className="header text-bold">Favorite Programs</h2>
                    {programs.map((p) => (
                        <RadioProgram key={p.id} p={p} />
                    ))}
                </section>
            </main>
        </>
    );
}

export default RadioFavorites;
