import express, { Application } from "express";
import routes from "routes";

const app: Application = express();

app.use("/", routes);

app.listen({ host: "0.0.0.0", port: 5000 });
