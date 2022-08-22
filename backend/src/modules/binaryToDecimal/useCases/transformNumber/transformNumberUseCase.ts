import { TransformBinaryToDecimal } from "../../utils/transformBinaryToDecimal";

class TransformNumberUseCase {
	execute(binaryNumber: string): Number {
		const transformBinaryToDecimal = new TransformBinaryToDecimal();

		const numberConvert = transformBinaryToDecimal.execute(binaryNumber);
		console.log(numberConvert);
		return numberConvert;
	}
}

export { TransformNumberUseCase };
