import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
import RadioChannels from "./components/RadioChannels.tsx";
import RadioCategories from "./components/RadioCategories.tsx";
import { RadioSchedule } from "./components/RadioSchedule.tsx";
import RadioPrograms from "./components/RadioPrograms.tsx";

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
