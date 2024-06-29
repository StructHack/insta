import { useEffect, useState } from "react"
import axiosInstance from "../auth/AxiosInstance"
import { AxiosError } from "axios"
import two from '../../assets/img/two.jpg'
import food from '../../assets/img/food.jpg'
import { FaComment, FaHeart, FaShare } from "react-icons/fa"

type Posts = {
    id: number,
    title: string,
    user:{
        id: number,
        fullName: string,
        username: string
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
            title: "Some food",
            user:{
                id:2,
                fullName: "Dipendra Shrestha",
                username: "di11"
            },
            attachment: "sdfwerfsdf"
        }, 
                {
            id: 1,
            title: "Some food",
            user:{
                id:2,
                fullName: "Dipendra Shrestha",
                username: "k1234"
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
        console.log(123)
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
                return <div key={p.id} className="border-2 my-2">
                    <p className="flex flex-row gap-3 font-bold p-2">
                        <img src={two} className="w-8 rounded-[50%]"/>
                        {p.user.fullName}
                    </p>
                    
                    <img src={food} className="w-full"/>
                    <div className="flex flex-row gap-5 my-2 text-[20px] px-1">
                    <FaHeart />
                    <FaComment />
                    <FaShare/>
                    </div>
                    <p className="text-sm px-1">115 likes</p>
                    <p className="font-bold text-sm px-1 pb-2">{p.user.username} {p.title}</p>
                </div>
            })
        }</div>
    }
    </div>

  )
}
