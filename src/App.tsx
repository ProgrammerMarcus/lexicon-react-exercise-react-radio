import RadioNavbar from "./components/RadioNavbar";
import { createContext, useEffect, useState } from "react";

import "./reset.css";
import "./App.scss";

type FavoritesContextType = {
    favorites: number[];
    setAndStoreFavorites: (updated: number[]) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({ favorites: [], setAndStoreFavorites: () => {} });

export function App(props: { children: JSX.Element }) {
    const [favorites, setFavorites] = useState<number[]>([]);
    useEffect(() => {
        if (localStorage.getItem("favorites")) {
            setFavorites(JSON.parse(localStorage.getItem("favorites")!) || [])
        }
    },[])
    function setAndStoreFavoritesGenerator(set: React.Dispatch<React.SetStateAction<number[]>>) {
        return (updated: number[]) => {
            set(updated);
            localStorage.setItem("favorites", JSON.stringify(updated));
        };
    }
    const setAndStoreFavorites = setAndStoreFavoritesGenerator(setFavorites);
    return (
        <FavoritesContext.Provider value={{ favorites, setAndStoreFavorites }}>
            <>
                <div className="bg"></div>
                <RadioNavbar />
                {props.children}
            </>
        </FavoritesContext.Provider>
    );
}
