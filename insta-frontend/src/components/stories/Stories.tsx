import { useEffect, useState } from "react"
import axiosInstance from "../auth/AxiosInstance"
import { AxiosError } from "axios"
import one from "../../assets/img/one.jpg"

type Story = {
    id:number,
    attachment: string,
    user:{
        id: number,
        fullName: string
    }
}


export const Stories = () => {
    const [stories, setStories] = useState<Story[] | null>(null);
    const [error, setError] = useState<AxiosError>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const data:Story[] = [
        {
            id: 1,
            attachment: "one.jpg",
            user:{
                id:2,
                fullName: "Dipendra Shrestha"
            },
        } ,{
            id: 2,
            attachment: "two.jpg",
            user:{
                id:2,
                fullName: "Dipendra Shrestha"
            },

        } 
 ,{
            id: 3,
            attachment: "three.jpg",
            user:{
                id:2,
                fullName: "Dipendra Shrestha"
            },

        }
    ]

    const fetchStories= async ()=>{
        setIsLoading(true)
        try{
        // const fetchedPosts = await axiosInstance.get("/posts")
        setStories(data);
        setIsLoading(false);
        }catch(e:any){
         setError(e) 
         setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchStories()
    },[])

  if(isLoading) {
    return <div>Loading...</div>
  }
 return (
    <div className="flex flex-row gap-2 h-[100px] justify-start items-center p-4 border-2 my-2 mx-1 ">
        {
           error ? <div>{error.message}</div> :
           <div className="flex flex-row gap-[20px]">{
           stories?.map(s=>{
            return <div className="border-black border-2 rounded-[50%] h-[70px] w-[70px] overflow-hidden"key={s.id}><img src={one}/></div>
           }) 
            }</div>
        }
    </div>
  )
}
