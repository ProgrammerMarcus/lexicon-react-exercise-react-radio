import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
import RadioChannels from "./components/RadioChannels.tsx";
import RadioCategories from "./components/RadioCategories.tsx";
import { RadioSchedule } from "./components/RadioSchedule.tsx";
import RadioPrograms from "./components/RadioPrograms.tsx";
import RadioSearch from "./components/RadioSearch.tsx";
import RadioProgramView from "./components/RadioProgramView.tsx";
import RadioFavorites from "./components/RadioFavorites.tsx";
import RadioNothing from "./components/RadioNothing.tsx";

const router = createBrowserRouter([
    {
        path: "*",
        element: (
            <App>
                <RadioNothing />
            </App>
        ),
    },
    {
        path: "/",
        element: (
            <App>
                <RadioChannels />
            </App>
        ),
    },
    {
        path: "/categories",
        element: (
            <App>
                <RadioCategories />
            </App>
        ),
    },
    {
        path: "/schedule/:id",
        element: (
            <App>
                <RadioSchedule />
            </App>
        ),
    },
    {
        path: "/programs/:id",
        element: (
            <App>
                <RadioPrograms />
            </App>
        ),
    },
    {
        path: "/search/:search",
        element: (
            <App>
                <RadioSearch />
            </App>
        ),
    },
    {
        path: "/view/:id",
        element: (
            <App>
                <RadioProgramView />
            </App>
        ),
    },
    {
        path: "/favorites/",
        element: (
            <App>
                <RadioFavorites />
            </App>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
