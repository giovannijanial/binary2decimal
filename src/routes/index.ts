import { Router } from "express";
import { binaryToDecimal } from "./binaryToDecimal.route";

const routes = Router();
routes.use("/transform", binaryToDecimal);

export { routes };
