"use client"
// aqui vai ficar o map e retornar os cards do produtos

import { useProducts } from "@/hooks/userProdocts"
import { ProductCard } from "./product-card";
import styled from "styled-components";

interface ProductsListProps {

}

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    background-color: 000;
`

export function ProductsList(props: ProductsListProps) {

    const { data } = useProducts();
    //console.log(data);

    return (
        <ListContainer>
            {data?.map(product => 
                <ProductCard 
                    key={product.id}
                    title={product.name}
                    price={product.price_in_cents}
                    image={product.image_url}
                    id={product.id}
                />)}
        </ListContainer>
    )

}