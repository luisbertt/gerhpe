import Head from "next/head"
import Menu from "../../components/Menu"
import Contact from "../../components/Contact"
import { hostname } from "../../config"

export default function Gallery({ events }) {
    return (
        <div>
            <Head>
                <title>Events | Fine Art Naples, FL</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Menu />

            <div className="md:px-20 py-10">
                <h1 className="text-center font-playfair text-5xl md:text-8xl mb-10">
                    Events
                </h1>
                {events.map(event => (
                    <div className="flex space-x-4 mt-4">
                        <img
                            src={event.Attachments[0].thumbnails.large.url}
                            width={400}
                        />
                        <div>
                            <h3 className="text-4xl">{event.Name}</h3>
                            <p className="text-xl">{event.Notes}</p>
                            <p className="text-xl">
                                {new Date(event.StartDate).toLocaleDateString()}{" "}
                                - {new Date(event.EndDate).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Contact />
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(hostname + `/api/events/nextEvent`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { events: data },
    }
}
