import { useEffect, useState } from "react";
import "../scss/common.scss";
import { getAllAiringProgramsCategoryJSON, getAllCategoriesJSON } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Category from "./interfaces/Category";
import Program from "./interfaces/Program";
import RadioProgram from "./RadioProgram";

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
                        <RadioProgram key={p.id} p={p} />
                    ))}
                </section>
            </main>
        </>
    );
}

export default RadioCategories;
