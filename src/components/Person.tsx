

type Cont = {
    nome?: string;
    avatar: string;
    roles: string[];
    autor?: string;
}

export const Person = ({nome = 'op', avatar, roles, autor}: Cont) => {
    return (
        <>
            <h1>meu nome e {nome}</h1>
            <img src={avatar} />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
           
            { autor && <p>autor do componente é o {autor ?? 'desconhecido'}</p>}

            { !autor && <p>autor do componente é o {autor ?? 'desconhecido'}</p>}
            
        </>
    );
}