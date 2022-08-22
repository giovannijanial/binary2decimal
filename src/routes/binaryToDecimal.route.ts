import { Router } from "express";
import { TransformNumberController } from "../modules/binaryToDecimal/useCases/transformNumber/transformNumberController";

const binaryToDecimal = Router();
const transformNumberController = new TransformNumberController();

binaryToDecimal.post("/", transformNumberController.handle);

export { binaryToDecimal };
