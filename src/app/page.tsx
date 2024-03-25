"use client"

import { FilterBar } from "@/components/filter-bar";
import { DefaultPageLayout } from "@/components/layout/default-page-layout";
import { ProductsList } from "@/components/products-list";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
