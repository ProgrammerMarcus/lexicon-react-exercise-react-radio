import { useEffect, useState } from "react";
import "../scss/common.scss";
import { getAllAiringProgramsCategoryJSON, getAllCategoriesJSON } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Category from "./interfaces/Category";
import Program from "./interfaces/Program";

export function RadioCategories() {
    const [active, setActive] = useState(2);
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        setLoading(true);
        getAllCategoriesJSON().then((data) => {
            setActive(data.programcategories[0].id);
            setCategories(data.programcategories);
            setLoading(false);
        });
    }, []);
    const [programs, setPrograms] = useState<Program[]>([]);
    useEffect(() => {
        setLoading(true);
        getAllAiringProgramsCategoryJSON(active!).then((data) => {
            setPrograms(data.programs);
            setLoading(false);
        });
    }, [active]);

    return (
        <>
            {loading && <RadioLoader />}
            <main className="day list">
                <h2 className="header text-bold">Categories</h2>
                <div className="group">
                    {categories.map((p) => (
                        <button
                            type="button"
                            className={active === p.id ? "item btn text-bold active" : "item btn text-bold"}
                            key={p.id}
                            onClick={() => {
                                setActive(p.id);
                            }}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>
                <section className="day">
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

export default RadioCategories;
