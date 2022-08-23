import { Request, Response } from "express";
import { TransformNumberUseCase } from "./transformNumberUseCase";

class TransformNumberController {
	handle(req: Request, res: Response) {
		const { binaryNumber } = req.body;

		const transformNumberUseCase = new TransformNumberUseCase();

		const result = transformNumberUseCase.execute(binaryNumber);
		return res.send({ result });
	}
}

export { TransformNumberController };
