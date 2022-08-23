import { Api } from "../api";
import { IBinaryNumber } from "../interfaces/BinaryNumber";

const transform = (body: IBinaryNumber) => Api.post(`/transform`, body);

export const TransformService = {
	transform,
};
