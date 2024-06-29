import { useState } from "react"

export const Search = () => {
  const [search, setSearch ] = useState<string>("");
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }
  return (
    <div>
      Search
      <form onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={handleChange} className="border-2"/>
      </form>
    </div>
  )
}
