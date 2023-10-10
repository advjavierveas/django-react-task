import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { deleteTask, getTasks } from "../api/taskAPI"
import { toast } from "react-hot-toast"

export function TaskPage(){
    
    const navigate = useNavigate()

    const [tasks, setTasks] = useState( [] )
    useEffect( () => {
        async function loadTasks(){
            const res = await getTasks();
            setTasks(res.data);
        }
        loadTasks();        
    }, []);

    function handleRemove(id) {
        const newTasks = tasks.filter((item) => item.id !== id);
        setTasks(newTasks);
    }

    return(
        <div className="container mx-auto">
            <ul role="list" className="divide-y divide-gray-100">
            
                { tasks.map(task => (   

                <li key={ task.id } className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4" onClick={ () => { navigate(`/tasks-form/${task.id}`) }} >
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{ task.title }</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ task.description } </p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">Opciones</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            <button
                                onClick={ async () => {
                                    const confirm = window.confirm('Estas seguro?')
                                    if(confirm){
                                        await deleteTask(task.id)
                                        handleRemove(task.id)
                                        toast.success("Tarea aliminada", { position: "top-right"})
                                    }
                                }}
                            >
                                Eliminar {task.id}
                            </button>
                        </p>
                    </div>
                </li>
                
                ))}
            
            </ul>
        </div>
        

    )
}