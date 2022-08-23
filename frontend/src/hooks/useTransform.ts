import { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { IBinaryNumber } from "../interfaces/BinaryNumber";
import { TransformService } from "../services/transformService";

export const useTransform = () => {
	const [number, setNumber] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const transformNumber = useCallback(async (body: IBinaryNumber) => {
		setLoading(true);
		try {
			const { data } = await TransformService.transform(body);
			setNumber(data.result);
			setError("");
		} catch (error: AxiosError | any) {
			if (!error?.response) {
				setError("Sem resposta do servidor!");
			}
			if (error.response.status === 400) {
				setError(error.response.data?.message);
			}
		} finally {
			setLoading(false);
		}
	}, []);

	return {
		number,
		error,
		loading,
		transformNumber,
	};
};
