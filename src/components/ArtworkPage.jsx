import { useState, useEffect } from "react"
import ArtworkPageSkeleton from "./ArtworkPageSkeleton"
import { getPainting } from "../api"

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
            <div className="container mx-auto mt-8 flex border p-4 space-x-4">
                <div className="">
                    <img
                        src={painting.Photo[0].thumbnails.large.url}
                        alt={painting.Name}
                        className="h-96"
                    />
                </div>
                <div className="">
                    <h1 className="text-3xl font-bold">{painting.Name}</h1>
                     <p>Size: {painting.Size}</p>
                     <p>Type: {painting.Type}</p>
                     <p>Author: {painting.Author}</p>
                     <p>Status: {painting.Status}</p>
                     <p>Line: {painting.Line}</p>
                </div>
            </div>
        )
    return <ArtworkPageSkeleton />
}

export default ArtworkPage