"use client"

import { CartIcon } from "@/components/icons/cart-icon";
import { BackButton } from "@/components/layout/back-button";
import { DefaultPageLayout } from "@/components/layout/default-page-layout";
import { useProduct } from "@/hooks/useProducts";
import { formatValue } from "@/utils/format-price";
import styled from "styled-components";


const Container =  styled.div`
    /* display: flex; */
    /* align-items: flex-start; */
    /* justify-content: center; */
    /* flex-direction: column; */

    section {
        /* display: flex; */
        /* justify-content: center; */
        /* width: 100%; */
        /* gap: 32px; */
        /* margin-top: 24px; */

        img {
            /* max-width: 640px; */
            /* width: 50%; */
        }

        > div {
            /* display: flex; */
            /* justify-content: space-between; */
            /* flex-direction: column; */

            button {
                /* background: #115D8C; */
                /* mix-blend-mode: multiply; */
                /* border-radius: 4px; */
                /* color: white; */
                /* border: none; */
                /* cursor: pointer; */
                /* padding: 10px 0; */
                /* text-align: center; */
                /* font-size: 16px; */
                /* font-weight: 600px; */
                /* text-transform: uppercase; */

                /* display: flex; */
                /* align-items: center; */
                /* justify-content: center; */
                /* gap: 8px; */
            }
        }
    }
`;

const ProductInfo = styled.div`
            /* display: flex; */
            /* align-items: flex-start; */
            /* justify-content: center; */
            /* flex-direction: column; */

            span {
                /* font-weight: 400; */
                /* font-size: 16px; */
                /* line-height: 150%; */
                /* color: var(--text-dark-2); */
            }

            h2 {
                /* font-weight: 300; */
                /* font-size: 32px; */
                /* line-height: 150%; */
                /* color: var(--text-dark-2); */
                /* margin-top: 12px; */
            }

            span:nth-of-type(2) { //pegar o segundo span
                /* font-weight: 600; */
                /* font-size: 20px; */
                /* color: var(--shapes-dark); */
                /* margin-bottom: 24px; */
            }

            p {
                /* font-weight: 400; */
                /* font-size: 12px; */
                /* line-height: 150%; */
                /* color: var(--text-dark-2); */
            }

            div {
                /* margin-top: 58px; */

                h3 {
                    /* text-transform: uppercase; */
                    /* color: var(--text-dark); */
                    /* font-weight: 500; */
                    /* font-size: 16px; */
                }

                p {
                    /* font-weight: 400; */
                    /* font-size: 14px; */
                    /* color: var(--text-dark); */
            }
        }
`;


export default function Product ({ searchParams }: { searchParams: { id: string } }) {
    const { data } = useProduct(searchParams.id);

    console.log(data);

    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <section>
                    <img src={data?.image_url} />
                    <div>
                        <ProductInfo>
                            <span>{data?.category}</span>
                            <h2>{data?.name}</h2>
                            <span>{formatValue(data?.price_in_cents ?? 0)}</span>
                            <p>FRETE GRATIS PARA TODO MUNDO</p>
                            <div>
                                <h3>Descrição</h3>
                                <p>{data?.description}</p>
                            </div>
                        </ProductInfo>
                        <button>
                            <CartIcon />
                            ADICIONAR AO CARRINHO
                        </button>
                    </div>
                </section>
            </Container>
        </DefaultPageLayout>
    )
}