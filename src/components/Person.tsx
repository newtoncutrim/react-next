import React from "react";
type Props = {
    name: string;
    url: string;
}
export const Person = ({name, url}: Props) => {
    return (
        <>
            <h1>Nome: {name}</h1>
            <a href={url}>LinK mapa</a>
        </>
    );  
}