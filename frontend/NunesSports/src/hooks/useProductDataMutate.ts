import axios, { AxiosPromise } from "axios";
import { ProductData } from "../interface/ProductData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080/product";

const postData = async (data: ProductData): AxiosPromise<any> => {
    // Se houver um ID, enviamos a requisição de atualização (PUT)
    if (data.id) {
        return axios.put(`${API_URL}/${data.id}`, data); // PUT para atualizar
    } else {
        return axios.post(API_URL, data); // POST para criar
    }
};

export function useProductDataMutate() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: postData,
        onSuccess: () => {
            queryClient.invalidateQueries("product-data"); // Atualiza a lista de produtos
        }
    });
}
