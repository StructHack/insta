import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import food from "../../assets/img/food.jpg"

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
        // throw new Error("somethig wint ")
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
    <div className="w-[45%]">
    {
        error ? 
        <div>{error?.message}</div>
        :<div>
            {profile?.fullName}
            </div>
    }
    </div>

  )
}
