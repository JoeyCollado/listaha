import { ReactNode } from "react";

export interface inputProps{
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
}

export interface formProps{
    children: ReactNode;
    action: (FormData: FormData) => void;
    className?: string;
    onSubmit?: () => void; 
}

export interface buttonProps{
    type?: 'button' | 'submit' | 'reset';
    text: string | ReactNode; //we going to pass icon with string
    onClick?: () => void; //function
    actionButton?: boolean; //if true add styling
    bgColor?: string;
}