import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
import RadioChannels from "./components/RadioChannels.tsx";
import RadioCategories from "./components/RadioCategories.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App>
                <RadioChannels></RadioChannels>
            </App>
        ),
    },
    {
        path: "/categories",
        element: (
            <App>
                <RadioCategories></RadioCategories>
            </App>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
