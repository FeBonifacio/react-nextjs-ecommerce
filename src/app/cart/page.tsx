"use client"
import { CartItem } from "@/components/cart/cart-item";
import { BackButton } from "@/components/layout/back-button";
import { DefaultPageLayout } from "@/components/layout/default-page-layout"
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatValue } from "@/utils/format-price";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
`;

const CartListContainer = styled.div`
    h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-dark-2);
        margin-top: 24px;
    }

    p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);
    }

    span {
        font-weight: 600;
    }
`;

const CartList = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`;

export default function CartPage() {

    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", []);

    const calculateTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
    }

    const cartTotal = formatValue(calculateTotal(value));

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if (item.id !== id) return item
            return {...item, quantity: quantity }
        })
        console.log(newValue)
        updateLocalStorage(newValue)
    }

    const handleDeleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if (item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <CartListContainer>
                    <h3>Seu carrinho</h3>
                    <p> Total {value.length} produtos <span>{cartTotal}</span></p>
                    <CartList>
                        {value.map(item => 
                        <CartItem 
                            product={item} 
                            key={item.id}
                            handleDelete={handleDeleteItem}
                            handleUpdatedQuantity={handleUpdateQuantity} 
                        />)}
                    </CartList>
                </CartListContainer>
            </Container>
        </DefaultPageLayout>
    )
}