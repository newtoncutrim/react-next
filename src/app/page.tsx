import { Person } from "@/components/Person";
import { Content } from "@/components/content";

import {Interno} from "@/components/interno";

const getDay = ()  => {
  return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}
const Page = () => {
  
  
  return (
    <div className="font-bold">
        <h1>o bagulho e doido - {getDay()}</h1>
        <Content />

        <h1 style={{color: 'red'}}> opa</h1>
        <Person 
          nome="newton"
          avatar="https://img.olhardigital.com.br/wp-content/uploads/2023/01/Destaque-foguete-1024x576.jpg"
          roles={['ola', 'opa']} 
        />

      <Interno>
        <div>
          <p>ddddddddddd
          <p>kkkk</p>
          </p>
        </div>
      </Interno>
    </div>
  );
}

export default Page;