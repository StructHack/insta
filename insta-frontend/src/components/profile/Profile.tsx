import { AxiosError } from "axios";
import { useEffect, useState } from "react";

type Profile = {
    id: number,
    attachment: string,
    fullName: string
}
export const Profile = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<AxiosError>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const data:Profile={

        id:1,
        attachment: "abcdef",
        fullName: "llksjdfiwefjHello world"
    } 
         

    const fetchProfile= async ()=>{
        setIsLoading(true)
        try{
        // const fetchedPosts = await axiosInstance.get("/posts")
        setProfile(data);
        setIsLoading(false);
        }catch(e:any){
         setError(e) 
         setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchProfile()
    },[])


    if(isLoading){
        return <div>Loading ...</div>
    }


  return (
    <div className="w-[33%]">
    {
        error ? 
        <div>{error?.message}</div>
        :<div>{
            profile?.fullName        }</div>
    }
    </div>

  )
}
