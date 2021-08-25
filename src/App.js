import { useState, useEffect } from "react"
// import { getLatestPaintings } from "./api"
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
// import ArtworkCard from "./components/ArtworkCard"
// import ArtworkPage from "./components/ArtworkPage"
// import GerhpeLogo from "./data/gerhpe_logo.jpg"

const App = () => {
    return (
        <div className="text-center container">
            <div className="spinner"></div>
            <div className="text-sm text-gray-500 mt-5 ">Updating...</div>
        </div>
        // <BrowserRouter>
        //     <Switch>
        //         <Route path="/" exact component={PaintingsContainer} />
        //         <Route path="/paintings/:id" exact component={ArtworkPage} />
        //     </Switch>
        // </BrowserRouter>
    )
}

// const PaintingsContainer = () => {
//     const [paintings, setPaintings] = useState([])

//     useEffect(() => {
//         async function getData() {
//             const data = await getLatestPaintings(25)
//             const grid = new Array(3)
//                 .fill()
//                 .map((_, i) => data.filter((_, j) => j % 3 === i))
//             setPaintings(grid)
//         }
//         getData()
//     }, [])

//     return (
//         <div className="container mx-auto mt-4 space-y-4">
//             <div className="text-center mt-4">
//                 <img
//                     src={GerhpeLogo}
//                     alt="Gerhpe Logo"
//                     className="w-96 mx-auto border rounded"
//                 />
//                 <h1 className="text-3xl font-bold text-center mt-4">
//                     Gerhpe's Gallery
//                 </h1>
//                 <p className="text-lg text-gray-500 italic">
//                     If you have a Gerhpe, you have a good taste...
//                 </p>
//             </div>
//             <div className="flex flex-wrap space-x-4 justify-center">
//                 {paintings.length
//                     ? paintings.map((col, i) => (
//                           <div className="w-1/4 space-y-4" key={i}>
//                               {col.map(painting => (
//                                   <Link
//                                       to={`paintings/${painting.id}`}
//                                       key={painting.id}
//                                   >
//                                       <ArtworkCard painting={painting} />
//                                   </Link>
//                               ))}
//                           </div>
//                       ))
//                     : null}
//             </div>
//         </div>
//     )
// }

export default App
