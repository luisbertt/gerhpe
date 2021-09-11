import { useState, useEffect } from "react"
import { getLatestPaintings, getFutureEvents } from "./api"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import ArtworkCard from "./components/ArtworkCard"
import ArtworkPage from "./components/ArtworkPage"
import Gerhpe from "./data/gerhpe.png"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/paintings/:id"
                        exact
                        component={ArtworkPage}
                    />
                </Switch>
            </BrowserRouter>
        </>
    )
}

const Home = () => (
    <div className="">
        <div className="container mx-auto h-screen bg-white">
            <h1 className="text-6xl font-bold mt-4">Gerhpe Fine Art</h1>
            <h3 className="text-3xl">
                Artist Specialized in Acrylic Paintings
            </h3>
            <h3 className="text-3xl">Exclusive, Original and Unique</h3>
            <div className="md:flex space-x-4">
                <img src={Gerhpe} alt="Gerhpe" className="mt-4" />
                <div className="md:flex flex-col justify-between h-80">
                    <div>
                        <h4 className="font-bold text-3xl">Next Event</h4>
                        <div className="hover:underline">
                            <p className="text-2xl">
                                Downtown Delray Craft Festival
                            </p>
                            <p className="text-xl">Sep 11-12 | 10am-4pm</p>
                        </div>
                    </div>
                    <div>
                        <ul className="text-3xl">
                            <li>
                                <a href="#gallery">Gallery 🖼</a>
                            </li>
                            <li>
                                <a href="#futureevents">Future Events 📆</a>
                            </li>
                            <li>
                                <a href="#contact">Contact ✉️</a>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className="hidden md:block text-9xl font-bold absolute bottom-0 right-0">
                Gerhpe
            </h1>
        </div>
        <PaintingsContainer />
        <FutureEvents />
        <Contact />
    </div>
)

const Contact = () => (
    <div id="contact" className="bg-black p-20 text-white">
        <div className="text-center">
            <h1 className="text-6xl font-bold text-center">Contact</h1>
            <p className="text-2xl text-gray-500 italic">Get in touch...</p>
        </div>
        <h4 className="text-4xl text-center mt-4">
            Send us an Email✉️ for Inquiries at
            <br />
            <b className="underline">Info@gerhpe.com</b>
        </h4>
        <h4 className="text-4xl text-center mt-4">
            ...or Call Us at
            <br />
            <b className="underline">(239) 297-7805</b>
        </h4>
    </div>
)

const FutureEvents = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        async function getData() {
            const data = await getFutureEvents()
            setEvents(data)
        }
        getData()
    }, [])

    return (
        <div id="futureevents" className="bg-gray-200 p-20">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-center">
                    Future Events
                </h1>
                <p className="text-2xl text-gray-500 italic">
                    Hope to see you there...
                </p>
            </div>
            <div className="container mx-auto md:flex justify-between mt-10">
                {events.length
                    ? events.map(event => (
                          <div className="md:w-96 hover:shadow-lg bg-white">
                              <img
                                  src={
                                      event.Attachments[0].thumbnails.large.url
                                  }
                                  alt={event.Name}
                              />
                              <div className="p-4">
                                  <h4 className="font-bold text-2xl">
                                      {event.Name}
                                  </h4>
                                  <p>{event.Notes}</p>
                                  <h4>{`${event.StartDate} | ${event.EndDate}`}</h4>
                              </div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    )
}

const PaintingsContainer = () => {
    const [paintings, setPaintings] = useState([])

    useEffect(() => {
        async function getData() {
            const data = await getLatestPaintings(15)
            const grid = new Array(3)
                .fill()
                .map((_, i) => data.filter((_, j) => j % 3 === i))
            setPaintings(grid)
        }
        getData()
    }, [])

    return (
        <div id="gallery" className="pt-10 space-y-4 bg-gray-100">
            <div className="text-center mt-4">
                <h1 className="text-6xl font-bold text-center mt-4">
                    Gerhpe's Gallery
                </h1>
                <p className="text-2xl text-gray-500 italic">
                    If you have a Gerhpe, you have a good taste...
                </p>
            </div>
            <div className="md:flex flex-wrap space-x-4 justify-center">
                {paintings.length
                    ? paintings.map((col, i) => (
                          <div className="w-1/4" key={i}>
                              {col.map(painting => (
                                  <Link
                                      to={`paintings/${painting.id}`}
                                      key={painting.id}
                                  >
                                      <ArtworkCard painting={painting} />
                                  </Link>
                              ))}
                          </div>
                      ))
                    : null}
            </div>
        </div>
    )
}

export default App
