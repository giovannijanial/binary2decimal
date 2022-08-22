import { Request, Response } from "express";
import { TransformNumberUseCase } from "./transformNumberUseCase";

class TransformNumberController {
	handle(req: Request, res: Response) {
		const { binaryNumber } = req.body;

		const postFileUseCase = new TransformNumberUseCase();

		const result = postFileUseCase.execute(binaryNumber);

		return res.sendStatus(201).send(result);
	}
}

export { TransformNumberController };
