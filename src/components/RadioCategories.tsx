import { useEffect, useState } from "react";
import "../scss/common.scss";
import { getAllCategoriesJSON } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import Category from "./interfaces/Category";

export function RadioPrograms() {
    const [active, setActive] = useState(2);
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        setLoading(true);
        getAllCategoriesJSON().then((data) => {
            setCategories(data.programcategories);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading && <RadioLoader />}
            <main className="group day list">
                <h2 className="header text-bold">Categories</h2>
                <div className="group">
                    {categories.map((p) => (
                        <div className="item btn text-bold" key={p.id}>
                            {p.name}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default RadioPrograms;
