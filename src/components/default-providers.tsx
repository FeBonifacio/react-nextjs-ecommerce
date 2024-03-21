"use client"

import { FilterContextProvider } from "@/context/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";


interface DefaulProvidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakpoints: "1068px"
}

export function DefaultProviders({ children } : DefaulProvidersProps) {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}