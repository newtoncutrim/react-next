type Desa = {
    hora: string|number;
    frase: string;
}


export const Relogio = ({hora, frase}: Desa) => {
    return (
        <>
            <div>{hora}</div>
            <div>{frase}</div>
        </>
    );
}