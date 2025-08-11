import { useQuery } from "@tanstack/react-query"
import { Coffee } from "components/Card";



const API_URL = "https://api.sampleapis.com/coffee/iced";

export const useCoffes = () => {
    return useQuery<Coffee[]> ({
			queryKey: ['coffeeKey'],
			queryFn: () =>
				fetch(`${API_URL}/coffe/iced`).then(res => res.json()),
		});
}