import {Student} from '@/Types/student';

/* type Props = {
    id: number;
    active: boolean
    name: string;
    email: string;
    avatar: string;
    grade1: number;
    grade2: number;
} */

type Props = {
    students: Student[];
}

export const StudentList = ({students}: Props) => {
    return (
        <div>
            <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className='bg-blue-700' >
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Grade1</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Grade2</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Final Grade</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {students.map(student => (
                <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={student.avatar} alt="Avatar" />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                    </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">{student.active ? <div className='bg-green-600 rounded-md px-2 inline-block py-1 text-white text-xs'>Active</div> : <div className='bg-red-600 rounded-md px-2 inline-block py-1 text-white text-xs'>Inative</div>}</td>
                <td className="px-6 py-4 whitespace-nowrap text-black">{student.grade1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-black">{student.grade2}</td>
                <td className="px-6 py-4 whitespace-nowrap text-black font-bold">
                    {student.active && ((student.grade1 + student.grade2) / 2).toFixed(1)}
                    {!student.active && "---"}
                </td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};