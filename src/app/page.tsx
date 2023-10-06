'use client'
import  {Formulario} from '@/components/Formulario';
import {Person} from "@/components/Person";
import {People} from "@/components/People";
import {Hora} from "@/components/Hora";
import {EventClick} from "@/components/EventClick";
const Teste = () => {
    function handleAlert() {
        window.alert("Clicando no botão 1");
    }
    return (
        <>
{/*             <p>ola </p>
            <Formulario/>
            <Person name='newton cutrim' url='opcional' content='temos conteudo'/>
            <p>conteudo do chieldrn</p>
            <People/> */}
            <Hora/>
            <EventClick aoClicar={handleAlert}/>
        </>
    );
}

export default Teste;
