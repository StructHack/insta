import { NavLink } from "react-router-dom"
import facebook from '../../assets/img/fb.png'
import { FieldValue, FieldValues, useForm } from "react-hook-form"

export const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues
    } = useForm();

    const onSubmit = async(data:FieldValues)=>{
        console.log(data)
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        reset();
    }

  return (
    <>
    <div className="flex flex-col gap-1 justify-center items-center border-[2px] border-slate-200 w-[300px] mx-auto my-5 p-3">
        <div className="text-[40px]">Instagram</div>
        <p className="text-center font-bold text-slate-400 text-sm">Sign up to see photos and videos from your friends.</p>
        <NavLink to="/ouathfb" className="flex flex-row gap-1 justify-center items-center bg-blue-500 text-white rounded-md p-1 w-full text-sm font-bold"><img src={facebook} className='w-6' /> Login with facebook</NavLink>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 w-full my-10 text-sm">
        <input 
                    {
                        ...register('email',{
                            required:"Email is required"
                        })
                    }
                    type="email" 
                    name="email"
                    placeholder="Email"
                    className="p-1.5 border-[grey] border rounded text-sm bg-gray-200 "

        />

        <input 
                    {
                        ...register('fullname',{
                            required:"Fullname is required"
                        })
                    }
                    type="text" 
                    name="fullname"
                    placeholder="Full Name"
                    className="p-1.5 border-[grey] border rounded text-sm bg-gray-200 "

        />

        <input 
                    {
                        ...register('username',{
                            required:"Username is required"
                        })
                    }
                    type="text" 
                    name="username"
                    placeholder="Username"
                    className="p-1.5 border-[grey] border rounded text-sm bg-gray-200 "

        />
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
                <div className="text-[10px] text-center my-2">
                    People who use our service may have uploaded your contact information to Instagram. Learn More
                </div>        
                <div className="text-[10px] text-center">
                    By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
                </div>
                <input 
                    disabled={isSubmitting}
                    type="submit" 
                    value="Sign up"
                    className="bg-blue-500 p-1.5 border rounded-md my-2 text-white" 
                />
        </form>

    </div>
    <div className="flex flex-row gap-1 justify-center items-center border-[2px] border-slate-200 w-[300px] mx-auto my-5 p-3">
        Have an account? <NavLink to="/" className="text-blue-500 font-bold">Log in</NavLink>
    </div>

    </>
  )
}
