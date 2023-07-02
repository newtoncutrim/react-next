"use client"
import React, { useState } from 'react';
import { Person } from '@/components/Person';
import { Relogio } from '@/components/Relogio';
import { Content } from '@/components/content';
import { Interno } from '@/components/interno';
import { Nota } from '@/components/Nota';
import { StudentList } from '@/components/studentList';
import { students } from '@/data/estudents';
import { Botao } from '@/components/butoonEvent';
import { Botao2 } from '@/components/buttonEvent2';
import { FormEvent } from 'react';

/* const getDay = () => {
  return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date());
}; */

/* const getFrase = (hora: number): string => {
  if (hora >= 6 && hora < 12) {
    return 'Bom dia!';
  } else if (hora >= 12 && hora < 18) {
    return 'Boa tarde!';
  } else {
    return 'Boa noite!';
  }
}; */

const Page = () => {

  /* const handleClik1 = () => {
    alert('botao 1');
  }
  const handleClik2 = () => {
    alert('botao 2');
  }
  const handleClik3 = () => {
    alert('botao 3');
  } */
  
/*   const click = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('mandei');
  } */
  const [num, setNum] = useState(0);
  function click(){
    setNum(num + 1);
  }


  return (
    <div className="container mx-auto w-screen h-screen justify-center items-center flex flex-col">
      <p>{num}</p>
      <button onClick={click} className='bg-gray-300 p-4 justify-center items-center'>+1</button>
      {/* <h1>Form de Login</h1>
      <form onSubmit={click}>
        <label htmlFor="nome" >Nome:</label><br />
        <input type="text" />
        <input type="submit" value="enviar" />
      </form> */}
      {/* <Botao/> */}
      {/* <Botao2 label='click aqui 1' aoClick={handleClik1}/>
      <Botao2 label='click aqui 2' aoClick={handleClik2}/>
      <Botao2 label='click aqui 3' aoClick={handleClik3}/> */}
      {/* <StudentList students={students}/> */}
    </div>
  ); 
};

export default Page;











/*   const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  /* const frase = getFrase(hora); */


 /*{ <div className="flex items-center flex-col justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="text-9xl text-white block">{hora}:{minutos}</div>
     <div className="text-4xl text-white block">
      {hora > 0 && hora < 11 && 'BOM DIA'} 
      {hora >= 11 && hora < 18 && 'BOA TARDE'} 
      {hora >= 18 && hora < 12 && 'BOA NOITE'}
     </div>
    </div> }*/