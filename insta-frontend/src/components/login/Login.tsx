import screenshot from '../../assets/img/screenshot2.png';

import {FieldValues, useForm} from 'react-hook-form'

export const Login = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues
    } = useForm();

    const onSubmit = async (data:FieldValues)=>{
        console.log(data)
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        reset();
    }

  return (
    <div className="flex flex-row gap-4  mx-auto my-10 max-w-min p-3 justify-center ">
            <img src={screenshot} className='hidden lg:block py-10'/>
        <div className="flex flex-col gap-10 justify-center items-center border-slate-200 border-[2px] p-3">
            <p className="text-[50px]">Instagram</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 w-[300px]">
                <input 
                    {
                        ...register('username',{
                            required:"Username is required"
                        })
                    }
                    type="text" 
                    name="username"
                    placeholder="Phone number, username or email"
                    className="p-1.5 border-[grey] border rounded text-sm bg-gray-200"

                />
                {errors.username && (
                    <p className='text-red-500 text-sm'>{`${errors?.email?.message}`}</p>
                )}
                <input
                    {
                        ...register('password',{
                            required: "Password is required",
                            minLength:{
                                value:8,
                                message: "Password must be at least 10 characters."
                            }
                        })
                    }               
                    type="password" 
                    name="password"
                    placeholder="Password"
                    className="p-1.5 border-[grey] border rounded text-sm bg-gray-200"
                />
                {errors.password && (
                    <p className='text-red-500 text-sm'>{`${errors?.password?.message}`}</p>
                )}
                <input 
                    disabled={isSubmitting}
                    type="submit" 
                    value="Log in"
                    className="bg-blue-500 p-1.5 border rounded-md my-2 text-white" 
                />
            </form>
        <legend>sdf</legend>
        </div>
        
    </div>
  )
}
