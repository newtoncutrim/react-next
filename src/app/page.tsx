'use client'
import  {Formulario} from '@/components/Formulario';
import {Person} from "@/components/Person";
import {People} from "@/components/People";
import {Hora} from "@/components/Hora";
import {EventClick} from "@/components/EventClick";
import { FormEvent } from 'react';
const Teste = () => {
    const handleAlert = (e: FormEvent) => {
        e.preventDefault();
        alert("carregando");
    }
    return (
        <>
            <form onSubmit={handleAlert}>
                <h1>teste</h1>
                <input type="text" />
                <button type="submit">enviar</button>
            </form>
        </>
    );
}

export default Teste;
