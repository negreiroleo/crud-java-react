import axios from "axios";
import { ProductData } from "../interface/ProductData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080"; // Alterado para http

const fetchData = async (): Promise<ProductData[]> => {
    try {
        const response = await axios.get<ProductData[]>(`${API_URL}/product`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        throw error;
    }
}

export function useProductData() {
    const query = useQuery<ProductData[], Error>({
        queryKey: ['product-data'],
        queryFn: fetchData,
        retry: 2
    });

    return {
        ...query,
        data: query.data
    };
}