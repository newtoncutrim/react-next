import {ListaPeople} from "@/data/ListaPeople";

export const People = () => {
    return (
        <>
            { ListaPeople.length > 0 &&
            <ul>
            {ListaPeople.map(pessoa => <li key={pessoa.id}>{pessoa.nome} {pessoa.idade}</li>)}
            </ul>
            }
        </>
    );
}