import styled from "styled-components";

import { Banner } from "../components/Banner/Banner";
import { Category } from "../components/Category/Category";

const ProductsStyled = styled.section`
    background-color: var(--products-background-color);
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export function Index() {
    return (
        <main>
            <Banner />

            <ProductsStyled>
                <Category />
                <Category />
                <Category />
            </ProductsStyled>
        </main>
    );
}