import React from "react";

export const Hora = () => {
    const data = new Date()
    const horaMostar = new Date().toTimeString()
    const horaAtual = data.getHours()
    let mensagem = ''
    if(horaAtual >= 5 && horaAtual <= 12){
        mensagem = "bom dia"
    } else if(horaAtual > 12 && horaAtual <= 18) {
        mensagem = "boa tarde"
    } else {
        mensagem = "boa noite"
    }
    return(
        <>
            <h1>{horaMostar}</h1>
            <p>{mensagem}</p>
        </>
    );
}