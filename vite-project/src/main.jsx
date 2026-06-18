import react from "react";
import reactDOM from "react-dom/client";
import app from "./app";
reactDOM.createRoot(
    document.getElementById("root")
).render(
    <react.strictmode>
        <app />
</react.strictmode>
);
