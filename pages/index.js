import Image from "next/image"
import Link from "next/link"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import { hostname } from "../config"

export default function Home({ paintings, nextEvent }) {
    const grid = new Array(3)
        .fill()
        .map((_, i) => paintings.filter((_, j) => j % 3 === i))

    return (
        <Layout title="Gerhpe | Fine Art Naples, FL">
            <div className="h-screen bg-white font-playfair">
                <div className="bg-grayish h-4/5">
                    <Menu />
                    <div className="container mx-auto">
                        <h1 className="text-5xl md:text-8xl font-bold">
                            Gerhpe Fine Art
                        </h1>
                        <h3 className="text-lg md:text-2xl mt-2 md:mt-4">
                            Artist Specialized in Acrylic Paintings
                        </h3>
                        <h3 className="text-lg md:text-2xl mb-2 md:mb-4">
                            Exclusive, Original and Unique
                        </h3>
                        <div className="md:flex space-x-4">
                            <Image
                                src="/gerhpe.png"
                                width={700}
                                height={500}
                                alt="Gerhpe"
                                className="mt-4"
                            />
                            <div className="hidden md:flex flex-col justify-between h-80">
                                {nextEvent.length > 0 ? (
                                    <div>
                                        <h4 className="font-bold text-lg">
                                            Next Event:
                                        </h4>
                                        <a
                                            href={nextEvent[0].Link}
                                            className="hover:underline"
                                            target="_blank"
                                            rel="nonreferrer"
                                        >
                                            <p className="text-3xl font-bold">
                                                {nextEvent[0].Name}
                                            </p>
                                            <p className="text-xl">
                                                {nextEvent[0].Notes}
                                            </p>
                                            <p className="text-xl">
                                                {new Date(
                                                    nextEvent[0].StartDate,
                                                ).toLocaleDateString() +
                                                    "-" +
                                                    new Date(
                                                        nextEvent[0].EndDate,
                                                    ).toLocaleDateString()}
                                            </p>
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <h1 className="hidden md:block text-9xl font-bold absolute bottom-0 right-0">
                        Gerhpe
                    </h1>
                </div>
            </div>

            <div id="gallery" className="bg-gray-100 md:px-20 mt-5 md:pt-10">
                <h1 className="text-center font-playfair text-4xl md:text-8xl mb-4">
                    Latest Paintings
                </h1>
                <h3 className="font-playfair text-xl md:text-3xl text-center mb-5">
                    "If you have a Gerhpe... you have good taste"
                </h3>
                <a
                    href="/gallery"
                    className="flex justify-center text-xl text-blue-500 mb-5"
                >
                    View All
                </a>
                <div className="w-100 md:w-11/12 mx-auto md:flex justify-center md:space-x-10">
                    {grid.map((col, i) => (
                        <div className="flex flex-col space-y-10">
                            {col.map(painting => (
                                <Link
                                    href={`/gallery/${painting.id}`}
                                    key={painting.id}
                                >
                                    <a>
                                        <ArtworkCard painting={painting} />
                                    </a>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

const ArtworkCard = ({ painting }) => (
    <div className="hover:shadow-xl border bg-white p-1">
        <img src={painting.Photo[0].thumbnails.large.url} />
        <div className="p-2">
            <h3 className="text-lg font-bold">{painting.Name}</h3>
            <p>{painting.Size} in</p>
            <p>{painting.Type}</p>
        </div>
    </div>
)

export async function getServerSideProps() {
    const res = await fetch(hostname + `/api/latestPaintings`)
    const data = await res.json()
    const resEvent = await fetch(hostname + "/api/events/nextEvent")
    const dataEvent = await resEvent.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { paintings: data, nextEvent: dataEvent },
    }
}
