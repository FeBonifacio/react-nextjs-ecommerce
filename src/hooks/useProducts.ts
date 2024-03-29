import { ProductFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL, {query: `
        query {
            Product(id: "${productId}"){
                name
                description
                category
                price_in_cents
                image_url
            }
        }
    `})
}

export function useProduct(id: string) {
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id, // => quando o id tiver um valor dentro dele, vai ficar true e ira buscar os dados
        staleTime:  1000 * 60 * 5, // para disparr a requisição controlada, tempo q essa informação é valida e quando estorar o tempo , ele vai buscar novas informaç~poes no servidor
    });

    return {
        data: data?.data?.data?.Product
    }
}