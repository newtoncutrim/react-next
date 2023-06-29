import { match } from "assert";

type value = {
    valor: number
}

export const Nota = ({valor}: value) => {
    if(valor > 5) valor = 5;
    if(valor < 0) valor = 0;

    

    const inteiro = Math.floor(valor);


    const array = ['🫠', '😅', '🙂', '🤭', '🤩'];

    let result;

    inteiro > 0 ? result = array[inteiro - 1] : result = array[inteiro];

    const emoji = result.repeat(inteiro) + "🥹".repeat(5 - inteiro);

    return(
        <>
            <div>{valor}</div>
            <div>
                {emoji}
            </div>
        </>
    );
}