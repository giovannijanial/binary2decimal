import { AppError } from "../../../errors/AppError";

class TransformBinaryToDecimal {
	execute(binaryNumber: string): Number {
		const arrBinary = binaryNumber.split("");

		if (
			arrBinary.some((binary) => !["0", "1"].includes(binary)) ||
			!arrBinary.length
		) {
			throw new AppError("Binary number is invalid!");
		}

		let transformedNumber: number = 0;
		arrBinary.reverse().map((binary, index) => {
			if (binary !== "0") {
				transformedNumber += Math.pow(2, index);
			}
		});

		return transformedNumber;
	}
}

export { TransformBinaryToDecimal };
