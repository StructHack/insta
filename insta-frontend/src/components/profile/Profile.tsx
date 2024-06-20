import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import one from "../../assets/img/two.jpg"

type Profile = {
    id: number,
    attachment: string,
    fullName: string,
    website: string
}
export const Profile = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [error, setError] = useState<AxiosError>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const data:Profile={

        id:1,
        attachment: "abcdef",
        fullName: "Dipendra Shrestha",
        website: "https://google.com"
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
        :<div className="m-5 flex flex-row gap-3">
            <img src={one} className="w-[50px] rounded-[50%]"/>
            <p className="flex flex-col">
                <span className="font-bold">{data.fullName}</span>
                <span className="text-sm">{data.website}</span>
                </p>
            </div>
    }
    </div>

  )
}
