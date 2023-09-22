import React, { ReactNode } from "react";
type Props = {
    name?: string;
    url?: string; //opcional
    content?: ReactNode;
}
//passando conteudo para dentro do elemento com chieldren
export const Person = ({name, url = '', content}: Props) => {
    return (
        <>
            <h1>Nome: {name ?? 'algum nome'}</h1>
            <a href={url}>LinK mapa</a>
            {/* conteudo filho */}
            {content && <h1>ola sou o conteudo da condicional</h1>}
            
        </>
    );  
}