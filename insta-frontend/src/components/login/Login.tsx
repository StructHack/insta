import screenshot from '../../assets/img/screenshot2.png';
import facebook from '../../assets/img/fb.png';

import {FieldValues, useForm} from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/Auth';

export const Login = () => {

    const auth = useAuth();

    const {
        register,
        handleSubmit,
        setError,
        formState: {errors, isSubmitting},
        reset,
        getValues
    } = useForm();

    const onSubmit = async (data:FieldValues)=>{
        console.log(data);
        try{
            const res = await auth.login(data.username, data.password)
        }catch(err:any){
            console.log('hurag')
            if(err?.code == "ERR_NETWORK"){
                setError("network",{
                    type:"custom",
                    message: "Server is down"
                })
            }
        }
        setTimeout(()=>{reset()},1000)
        // reset();
    }

  return (
    <div className="flex flex-row gap-4  mx-auto my-10 max-w-min p-3 justify-center ">
        <div>{errors.network && <p className='text-red-500 bg-red-200 fixed top-5 right-5 px-10 py-5'>{`${errors?.network?.message}`}</p>}</div>
            <img src={screenshot} className='hidden lg:block py-10'/>
        <div className='flex flex-col gap-3 justify-center items-center'>
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
        <div className='flex flex-row gap-1'>
            <NavLink to="/ouathfb" className="flex flex-row gap-1"><img src={facebook} className='w-6' /> Login with facebook</NavLink>
        </div>
        <div className='flex flex-row gap-1 text-sm'>Forgot password?</div>
        </div>
        <div className='border-slate-200 border-[2px] w-full p-7 text-center text-sm'>
                Don't have an account? 
                <NavLink to="/signup" className="text-blue-500 font-bold" > Sign up</NavLink> 
        </div>
        </div>
    </div>
  )
}
