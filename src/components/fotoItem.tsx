import { Foto } from "@/Types/foto";


export type Props = {
    foto: Foto;
    onClick: () => void;
}

export const FotoItem = ({foto, onClick}: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-90">
            <img src={`http://localhost:3000/assets/${foto.url}`} alt="" className="w-full"/>
        </div>
    );
}