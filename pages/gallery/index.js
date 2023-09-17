import Link from "next/link"
import Head from "next/head"
import Menu from "../../components/Menu"
import Contact from "../../components/Contact"
import { hostname } from "../../config"

export default function Gallery({ paintings }) {
    const grid = new Array(3)
        .fill()
        .map((_, i) => paintings.filter((_, j) => j % 3 === i))

    return (
        <div>
            <Head>
                <title>Gallery | Fine Art Naples, FL</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            <Menu />

            <div className="md:px-20 py-10">
                <h1 className="text-center font-playfair text-5xl md:text-8xl mb-10">
                    Gallery
                </h1>
                <div className="md:flex mx-10 my-5 md:space-x-2 space-y-2">
                    <div className="p-2 text-xl font-bold font-playfair">
                        Lines:
                    </div>
                    <div className="border p-2 rounded">
                        <a href="/line/Impressionist">Impressionist</a>
                    </div>
                    <div className="border p-2 rounded">
                        <a href="/line/Abstract">Abstract</a>
                    </div>
                    <div className="border p-2 rounded">
                        <a href="/line/Ligths%20and%20Shadows">
                            Lights and Shadows
                        </a>
                    </div>
                    <div className="border p-2 rounded">
                        <a href="/line/Luxury">Luxury</a>
                    </div>
                    <div className="border p-2 rounded">
                        <a href="/line/Tranquility">Tranquility</a>
                    </div>
                </div>
                <div className="w-100 md:w-11/12 mx-auto md:flex justify-center md:space-x-10">
                    {grid.map((col, i) => (
                        <div key={i} className="flex flex-col space-y-10">
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

            <Contact />
        </div>
    )
}

const ArtworkCard = ({ painting }) => (
    <div>
        {console.log(painting)}
        {painting.Photo && painting.Photo[0] && (
            <img src={painting.Photo[0]?.thumbnails.large.url} />
        )}
        <h3 className="text-lg font-bold mt-4">{painting.Name}</h3>
        <p>{painting.Size} in</p>
        <p>{painting.Type}</p>
    </div>
)

export async function getServerSideProps(context) {
    const res = await fetch(hostname + `/api/paintings`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { paintings: data },
    }
}
