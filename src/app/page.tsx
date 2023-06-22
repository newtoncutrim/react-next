import { Content } from "@/components/content";

const getDay = ()  => {
  return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}
const Page = () => {
  const data = {
    nome: 'newton',
    foguete: "https://img.olhardigital.com.br/wp-content/uploads/2023/01/Destaque-foguete-1024x576.jpg"
  }
  
  return (
    <div className="font-bold">
        <h1>o bagulho e doido {data.nome} - {getDay()}</h1>
        <Content />
        <img src={data.foguete} />
        <span>{40 + 23}</span> 
        <h1 style={{color: 'red'}}> opa</h1>
    </div>
  );
}

export default Page;