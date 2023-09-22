'use client'
import  {Formulario} from '@/components/Formulario';
import {Person} from "@/components/Person";

const Teste = () => {
    return (
        <>
            <p>ola </p>
            <Formulario/>
            <Person name='newton cutrim' url='opcional' content='temos conteudo'/>
            <p>conteudo do chieldrn</p>
        </>
    );
}

export default Teste;
