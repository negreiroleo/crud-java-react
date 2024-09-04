import { useState } from 'react';
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const deleteProduct = async (id: number) => {
  return axios.delete(`${API_URL}/product/${id}`);
};

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("product-data"); // Atualiza a lista após exclusão
    },
  });
}
