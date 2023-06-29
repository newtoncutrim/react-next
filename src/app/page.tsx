import React from 'react';
import { Person } from '@/components/Person';
import { Relogio } from '@/components/Relogio';
import { Content } from '@/components/content';
import { Interno } from '@/components/interno';
import { Nota } from '@/components/Nota';

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
/*   const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  /* const frase = getFrase(hora); */

  return (
    /*{ <div className="flex items-center flex-col justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="text-9xl text-white block">{hora}:{minutos}</div>
     <div className="text-4xl text-white block">
      {hora > 0 && hora < 11 && 'BOM DIA'} 
      {hora >= 11 && hora < 18 && 'BOA TARDE'} 
      {hora >= 18 && hora < 12 && 'BOA NOITE'}
     </div>
    </div> }*/

    <>
      <Nota valor={0}/>
     
    </>
  ); 
};

export default Page;
