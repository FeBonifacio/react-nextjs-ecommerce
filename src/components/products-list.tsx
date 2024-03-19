"use client"
// aqui vai ficar o map e retornar os cards do produtos

import { useProducts } from "@/hooks/userProdocts"

interface ProductsListProps {

}

export function ProductsList(props: ProductsListProps) {

    const { data } = useProducts();
    //console.log(data);

    return (
        <>
        </>
    )

}