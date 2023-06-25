import { Person } from "@/components/Person";
import { Content } from "@/components/content";

import {Interno} from "@/components/interno";
import { PeopleList } from "@/data/pepleList";

const getDay = ()  => {
  return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}

const engineer = PeopleList.filter(person => person.profession == "engineer");
const Page = () => {
  
  return (
    <div className="font-bold">

      {engineer.length > 0 &&
      <ul>
        {engineer.map(list => 
          <li key={list.id}> {list.name} - {list.profession}</li>
      )}
      </ul>
      }
       
      
    </div>
  );
}

export default Page;

