import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import {  mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL,{ query })
}

export function useProducts(){
    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority],
        staleTime: 1000 * 60 * 2, // para disparr a requisição controlada, tempo q essa informação é valida e quando estorar o tempo , ele vai buscar novas informaç~poes no servidor
    })

    const products =  data?.data?.data?.allProducts

    //Filtro de busca
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

    return {
        data: filteredProducts
    }
}


// implementa um hook useProducts que busca produtos de uma API GraphQL 
// com base nos filtros e prioridades selecionados pelo usuário, e 
// filtra esses produtos com base em uma pesquisa fornecida.