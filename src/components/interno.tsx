import { ReactNode } from "react";


type Props = {
    children: ReactNode;
}

export const Interno = ({children}: Props) =>{
    return (
        <div>
        
            {children}
        </div>
    );
}