"use client"

type Props = {
    label: string;
    aoClick: () => void;
}
export const Botao2 = ({label, aoClick}: Props) => {
    
    return(
        <>
            <button onClick={aoClick} className="bg-blue-600  p-3 mr-3">{label}</button>
        </>
    );

}