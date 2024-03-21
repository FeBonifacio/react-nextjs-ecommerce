import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";
import { useFilter } from "@/hooks/useFilter";

export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;
    background-color: var(--bg-secondary);
    font-family: inherit; //vai erdar do mais proximo
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 14px;
        line-height: 22px;
    }
`;

// div -> input e icons
const InputContainer = styled.div`
    position: relative;
    width: 250px;

    svg {
        position: absolute;
        right: 20px;
        top: 20%;
        transform: translate(-50%);
    }

    @media (min-width: 768px) {
        width: 352px;
    }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    handleChange: (value: string) => void;
}

export function PrimaryInputWSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput onChange={(e) => props.handleChange(e.target.value)} {...props}/>
            <SearchIcon />
        </InputContainer>
    );
};