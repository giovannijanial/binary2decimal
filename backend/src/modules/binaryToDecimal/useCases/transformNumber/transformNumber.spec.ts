import { AppError } from "../../../../errors/AppError";
import { TransformBinaryToDecimal } from "../../utils/transformBinaryToDecimal";

describe("Transform binary number", () => {
	it("Should be transform binary with string format in a number", async () => {
		const transformBinaryToDecimal = new TransformBinaryToDecimal();

		const binaryNumber = "010101";
		const transformedNumber = 21;
		const result = transformBinaryToDecimal.execute(binaryNumber);

		expect(result).toEqual(transformedNumber);
	});

	it("Should not be transform a invalid binary number", async () => {
		const transformBinaryToDecimal = new TransformBinaryToDecimal();

		const binaryNumber = "020101";
		await expect(
			transformBinaryToDecimal.execute(binaryNumber)
		).rejects.toEqual(new AppError("Binary number is invalid!"));
	});
});
