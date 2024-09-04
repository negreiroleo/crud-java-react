import { useState } from 'react';
import axios, { AxiosPromise } from "axios";
import { ProductData } from "../interface/ProductData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const updateProduct = async (data: ProductData): AxiosPromise<any> => {
  return axios.put(`${API_URL}/product/${data.id}`, data);
};

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("product-data");
    },
  });
}
