import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ArtworkPageSkeleton from "./ArtworkPageSkeleton"
import { getPainting } from "../api"
import Gerhpe from "../data/gerhpe_logo.jpg"

const ArtworkPage = ({ match }) => {
    const [painting, setPainting] = useState(null)

    useEffect(() => {
        async function getData() {
            const data = await getPainting(match.params.id)
            setPainting(data)
        }
        getData()
    }, [match.params.id])

    if (painting)
        return (
            <>
            <div className="container mx-auto"> 
            <div className="flex space-x-20 h-full">
                <Link to="/Home"><img src={Gerhpe} alt="" width="250px"/></Link>
                <ul className="flex space-x-10 text-2xl m-auto">
                    <Link to="/">Home</Link>
                    <Link to="/">Gallery</Link>
                    <Link to="/">Future Events</Link>
                    <Link to="/">Contact</Link>
                </ul>
            </div>
                <div className=" flex space-x-10">
                  
                        <div className="border p-4">
                           
                                <img
                                    src={painting.Photo[0].thumbnails.large.url}
                                    alt={painting.Name}
                                    className="mx-auto"
                                />
                            
                        </div>
                    
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-5xl font-bold">{painting.Name}</h1>
                         <div className="">
                            <p>Size: {painting.Size}</p>
                            <p>Type: {painting.Type}</p>
                            <p>Author: {painting.Author}</p>
                            <p>Status: {painting.Status}</p>
                            <p>Line: {painting.Line}</p>
                        </div>
                        <div>
                            
                            <a href={painting.Photo[1].thumbnails.large.url} target="_blank" rel="noreferrer"><button className="text-xl border p-2 rounded">Set Preview</button></a>
                            {/* <img src={painting.Photo[1].thumbnails.large.url} alt={painting.Name + ' Ambientado'} className="mt-2"/> */}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    return <ArtworkPageSkeleton />
}

export default ArtworkPage