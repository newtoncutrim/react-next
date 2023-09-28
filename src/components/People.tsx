import {ListaPeople} from "@/data/ListaPeople";

export const People = () => {
    const age = ListaPeople.filter(person => person.idade >= 30)
    return (
        <>
{/*             { ListaPeople.length > 0 &&
            <ul>
            {ListaPeople.map(pessoa => <li key={pessoa.id}>{pessoa.nome} {pessoa.idade}</li>)}
            </ul>
            } */}
            {ListaPeople.length > 0 &&
                <ul>
                    {age.map(person => <li>{person.nome} - {person.idade}</li>)}
                </ul>
            }
        </>
    );
}