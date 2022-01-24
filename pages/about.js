import Head from "next/head"
import Menu from "../components/Menu"
import Contact from "../components/Contact"
import Image from "next/image"

export default function Gallery() {
    return (
        <div>
            <Head>
                <title>About | Fine Art Naples, FL</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            <Menu />

            <div className="md:px-20 py-10">
                <h1 className="text-center font-playfair text-5xl md:text-8xl mb-10">
                    Biography
                </h1>
                <div className="md:flex">
                    <Image
                        src="/bio.jpg"
                        width={700}
                        height={500}
                        alt="Gerhpe Bio"
                        className="mt-4 w-full md:w-1/2"
                    />

                    <div className="w-full md:w-1/2 p-4 text-justify">
                        <p>
                            <span className="font-playfair text-2xl font-bold ">
                                Gerhson J Pernia (Gerhpe)
                            </span>{" "}
                            Known in the artistic world as Gerhpe. Plastic
                            artist with more than 30 years of experience
                            specialized in oil and acrylic on canvas with styles
                            that range from the Abstract as the impressionism
                            that with the technique of brushes and spatulas
                            captures a very particular art of vibrant colors and
                            a movement that is felt in each artwork. Fans of his
                            art are excited to contemplate the different
                            explosions of colors that captivate them and take
                            pride in having a work in their homes which fill
                            them with motivation every day. Many of his fans
                            express the satisfaction of having a Gerhpe work
                            expressing energy, who have acquired a Gerhpe work
                            love the nature that with Gerhpe’s strength and
                            energy in the sunsets as well as on sailboats that
                            in the middle of a storm or a placid sea bathed in a
                            special light and tropical colors make them
                            appreciate their work more and more. When a
                            spectator discovers the images that Gerhpe captures
                            in his impressionist art, it represents a delight
                            for the artist to see in his eyes the surprise of
                            that discovery. Gerhson Pernia was born in Venezuela
                            in 1966 graduated in the school of Plastic Arts of
                            San Cristobal, also graduated from law school and
                            now presents his artwork in the USA.
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}
