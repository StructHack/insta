import { useEffect, useState } from "react"
import axiosInstance from "../auth/AxiosInstance"
import { AxiosError } from "axios"
import two from '../../assets/img/two.jpg'
import food from '../../assets/img/food.jpg'

type Posts = {
    id: number,
    title: string,
    user:{
        id: number,
        fullName: string
    },
    attachment: string
}

export const Post = () => {

    const [posts, setPosts] = useState<Posts[] | null>(null);
    const [error, setError] = useState<AxiosError>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const data:Posts[] = [
        {
            id: 1,
            title: "Hello world,",
            user:{
                id:2,
                fullName: "Dipendra Shrestha"
            },
            attachment: "sdfwerfsdf"
        } 
    ]

    const fetchPosts = async ()=>{
        setIsLoading(true)
        try{
        // const fetchedPosts = await axiosInstance.get("/posts")
        setPosts(data);
        setIsLoading(false);
        }catch(e:any){
         setError(e) 
         setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchPosts()
    },[])

    if(isLoading){
        return <div>Loading ...</div>
    }


  return (
    <div>
    {
        error ? 
        <div>{error?.message}</div>
        :<div>{
            posts?.map(p=>{
                return <div key={p.id} className="border-2">
                    <p className="flex flex-row gap-3 font-bold p-2">
                        <img src={two} className="w-8 rounded-[50%]"/>
                        {p.user.fullName}
                    </p>
                    
                    <img src={food} className="w-full"/>
                </div>
            })
        }</div>
    }
    </div>

  )
}
