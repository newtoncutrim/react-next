

type Cont = {
    nome?: string;
    avatar: string;
    roles: string[];
}

export const Person = ({nome = 'op', avatar, roles}: Cont) => {
    return (
        <>
            <h1>meu nome e {nome}</h1>
            <img src={avatar} />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </>
    );
}