import { Button } from "./Segundo";
import { Segundo, Teste } from "./Teste";

export const Content = () => {
    return (
        <div className="w-40 h-40 bg-blue-600">
            <Teste/>
            <Segundo/>
            <Button/>
        </div>
    );
}