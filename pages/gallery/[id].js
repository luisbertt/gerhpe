import Contact from "../../components/Contact"
import Menu from "../../components/Menu"
import { getPlaiceholder } from "plaiceholder"
import { hostname } from "../../config"

const DetailsPage = ({ painting, imageProps }) => {
    const { Name, Type, Size, Author, Photo, Status, Line } = painting

    const [width, height] = Size.split(" ").filter(number => number !== "x")

    return (
        <>
            <div className="h-screen">
                <div className="bg-grayish h-4/5">
                    <Menu />
                    <div className="text-center">
                        <h1 className="font-playfair text-5xl md:text-8xl mb-10">
                            {Name}
                        </h1>
                        <img
                            {...imageProps}
                            placeholder="blur"
                            width={width * 10}
                            height={height * 10}
                            className="shadow-2xl mx-auto"
                        />
                        <a
                            href={Photo[1] ? Photo[1].url : "#"}
                            target="_blank"
                            rel="nonreferrer"
                        >
                            <button className="bg-white mx-auto border rounded text-xl p-2 mt-6">
                                Preview
                            </button>
                        </a>
                    </div>

                    <div
                        className="mx-auto bg-white pb-10"
                        style={{ maxWidth: `${width * 10}px` }}
                    >
                        <h3 className="text-4xl font-playfair my-4">Details</h3>
                        <hr />
                        <div className="my-5 text-xl font-playfair">
                            <p>
                                Size:{" "}
                                <span className="text-2xl">{Size} in</span>
                            </p>
                            <p>
                                Type: <span className="text-2xl">{Type}</span>
                            </p>
                            <p>
                                Author:{" "}
                                <span className="text-2xl">{Author}</span>
                            </p>
                            <p>
                                Status:{" "}
                                <span className="text-2xl">{Status}</span>
                            </p>
                            <p>
                                Line: <span className="text-2xl">{Line}</span>
                            </p>
                        </div>
                    </div>
                    <Contact />
                </div>
            </div>
        </>
    )
}

export default DetailsPage

export const getServerSideProps = async context => {
    const { id } = context.params
    const res = await fetch(hostname + "/api/paintings/" + id)
    const data = await res.json()

    const { base64, img } = await getPlaiceholder(
        data.Photo[0].thumbnails.large.url,
        { size: 10 }
    )

    return {
        props: { painting: data, imageProps: { ...img, blurDataURL: base64 } },
    }
}
