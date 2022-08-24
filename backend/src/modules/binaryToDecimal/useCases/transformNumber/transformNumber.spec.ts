import { TransformBinaryToDecimal } from "../../utils/transformBinaryToDecimal";

describe("Transform binary number", () => {
	it("Should be transform binary with string format in a number", async () => {
		const transformBinaryToDecimal = new TransformBinaryToDecimal();

		const binaryNumber = "010101";
		const transformedNumber = 21;
		const result = transformBinaryToDecimal.execute(binaryNumber);

		expect(result).toEqual(transformedNumber);
	});

	it("Should not be transform a invalid binary number", () => {
		const transformBinaryToDecimal = new TransformBinaryToDecimal();

		const binaryNumber = "020101";
		expect(() => transformBinaryToDecimal.execute(binaryNumber)).toThrow(
			"Binary number is invalid!"
		);
	});

	it("Should not be transform a empty string", () => {
		const transformBinaryToDecimal = new TransformBinaryToDecimal();

		const binaryNumber = "";
		expect(() => transformBinaryToDecimal.execute(binaryNumber)).toThrow(
			"Binary number is invalid!"
		);
	});
});
