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
import { FullName } from '@/Types/fullName';
import { List } from '@/Types/list';

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
    setNum(num + 2);
    setNum(v => v + 2)
    setNum(v => v + 2)
    setNum((v) => v + 2)
  }

  const [show, setShowSecret] = useState(false);
  function showSecret(){
    setShowSecret(!show);
  }

  const [fullName, setFullName] = useState<FullName>({name: 'newton', lastName: 'cutrim'})

  function clear() {
    setFullName({ ...fullName, name: '', lastName: ''})
  }

  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<List[]>([
    {id: 1, name: 'fazer arroz', checked: false},
  ]);

  function add(){
    if(itemInput == '') return;
    setList([...list, {id: list.length ,name: itemInput, checked: false}])
    setItemInput('')
  }
  
  function deletItem(id: number){
    setList(list.filter((item => item.id !== id)))
  }

  function check(id: number){
    let newList = [...list];
    
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].checked = !newList[i].checked
      }
    }
    setList(newList)
  }

  return (
    <div className="container mx-auto w-screen h-screen justify-center items-center flex flex-col">
      <h1>LISTA DE TAREFA</h1>
      <div>
        <input className='text-black' value={itemInput} onChange={(e) => setItemInput(e.target.value)} type="text" placeholder='adicionar tarefa'/>
        <button onClick={add} className='bg-blue-700'>adicionar</button>
      </div>
      <p>contem {list.length} tarefas</p>
      <ul>
        {list.map((item) => (
          <li  key={item.id}> 
          <input type="checkbox" checked={item.checked} onClick={() => check(item.id)} />
          {item.name} <button onClick={() => deletItem(item.id)}>[deletar]</button></li>
        ))}
        
      </ul>

      {/* <input className='mb-4 text-black' onChange={(e) => setFullName({ ...fullName, name: e.target.value})} type="text"  value={fullName.name}/>
      <input className='mb-4 text-black' type="text" onChange={e => setFuma aula de classes rapidão
      {/* <button className='bg-white text-red-600' onClick={showSecret}>{show ? 'esconder aria secreta ' : 'mostrar area secreta'}</button>
      { show && <div className='bg-slate-200 rounded-md p-3'>area secreta </div>} */}
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