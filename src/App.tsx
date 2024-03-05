import RadioNavbar from "./components/RadioNavbar";
import { createContext, useState } from "react";

import "./reset.css";
import "./App.scss";

type FavoritesContextType = {
    favorites: number[];
    setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
};

const FavoritesContextState = {
    favorites: [],
    setFavorites: () => {},
};

export const FavoritesContext = createContext<FavoritesContextType>(FavoritesContextState);

export function App(props: { children: JSX.Element }) {
    const [favorites, setFavorites] = useState<number[]>([]);
    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            <>
                <RadioNavbar />
                {props.children}
            </>
        </FavoritesContext.Provider>
    );
}
