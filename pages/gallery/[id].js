import Contact from "../../components/Contact"
import Menu from "../../components/Menu"
import { getPlaiceholder } from "plaiceholder"
import { hostname } from "../../config"
import Flickity from "react-flickity-component"
import "flickity/css/flickity.css"

const DetailsPage = ({ painting, imageProps }) => {
    const { Name, Type, Size, Author, Photo, Status, Line } = painting

    return (
        <>
            <div className="h-screen">
                <div className="bg-grayish h-4/5">
                    <Menu />
                    <div className="text-center">
                        <h1 className="font-playfair text-5xl md:text-8xl mb-10">
                            {Name}
                        </h1>
                        <Flickity>
                            <img
                                style={{
                                    marginLeft: "5em",
                                    marginRight: "5em",
                                }}
                                {...imageProps}
                                src={Photo[0].url}
                                placeholder="blur"
                                className="shadow-2xl mx-auto"
                            />
                            <img
                                style={{
                                    marginLeft: "5em",
                                    marginRight: "5em",
                                }}
                                src={Photo[1].url}
                                width={600}
                                placeholder="blur"
                                className="shadow-2xl mx-auto"
                            />
                        </Flickity>
                    </div>

                    <div
                        className="pt-5 mx-auto bg-white pb-10"
                        style={{ maxWidth: `500px` }}
                    >
                        <div className="flex justify-between mt-4">
                            <h3 className="text-4xl font-playfair">Details</h3>
                            <span className="bg-green-400 px-2 py-1 rounded h-8">
                                {Status}
                            </span>
                        </div>
                        <hr />
                        <div className="my-5 text-xl">
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
