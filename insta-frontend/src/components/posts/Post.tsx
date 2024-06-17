import { useEffect, useState } from "react"
import axiosInstance from "../auth/AxiosInstance"
import { AxiosError } from "axios"

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
                return <div key={p.id}>
                    {p.title}
                </div>
            })
        }</div>
    }
    </div>

  )
}
