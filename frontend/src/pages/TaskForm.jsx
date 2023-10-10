import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { getTask, updateTask, postTask } from "../api/taskAPI"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"


export function TaskForm() {
    const params = useParams()
    console.log(params)

    const navigate = useNavigate()
    
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = handleSubmit( async data => {
      if(params.id){ // estoy actualizando
        try {
          await updateTask(params.id, data);
          navigate("/tasks");
          toast.success("Tarea actualizada", { position: "top-right"} )
       } catch (error) {
           console.log(error)
       }
      }else{ // caso contratio estoy haciendo nuevo registro
        try {
           await postTask(data);
           navigate("/tasks");
           toast.success("Tarea registrada", { position: "top-right"} )
        } catch (error) {
            console.log(error)
        }
      }
    })

    useEffect( () => {
      if(params.id){ 
        async function loadTask(){
          const res = await getTask(params.id);
          setValue("title", res.data.title)
          setValue("description", res.data.description)
        }
        loadTask();
      }
  }, []);


  return (
    <div className="container mx-auto">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registrar Nueva Tarea
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Titulo de la tarea
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    name="title"
                    type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  { ...register("title", { required:true }) }
                />
                { errors.description && <p className="text-red-300">Tienes un error</p> }
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Descripcion
                </label>
              </div>
              <div className="mt-2">
                <textarea
                id="description"
                name="description"
                rows="4"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                { ...register("description", { required:true }) }
                >
                </textarea>
                { errors.description && <p className="text-red-300">Tienes un error</p> }
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Guardar tarea
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
