"use client"

export const Botao = () => {
    const handleButon = () => {
        alert('evento chamado');
    }

    const handleB = (msg: string) => {
        alert(msg);
    }
    
    return(
        <>
            <button onClick={handleButon} className="bg-blue-600  p-3 mr-3">Click aqui</button>
            <button onClick={() => handleB('opa')} className="bg-blue-600  p-3">Click aqui 2</button>
        </>
    );

}
