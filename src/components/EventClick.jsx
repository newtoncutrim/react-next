import React from "react";

export const EventClick = () => {
    function clicar(){
        alert("Olá, eu sou um evento!");
    }
    return(
        <>
            <button onClick={clicar}>click em min</button>
        </>
    );
}