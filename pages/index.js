import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Contact from "../components/Contact"
import Menu from "../components/Menu"

export default function Home({ paintings }) {
  const grid = new Array(3)
    .fill()
    .map((_, i) => paintings.filter((_, j) => j % 3 === i))

  return (
    <div>
      <Head>
        <title>Gerhpe | Fine Art Naples, FL</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="h-screen bg-white font-playfair">
        <div className="bg-grayish h-4/5">
          <Menu />
          <div className="container mx-auto">
            <h1 className="text-8xl font-bold">Gerhpe Fine Art</h1>
            <h3 className="text-2xl mt-4">
              Artist Specialized in Acrylic Paintings
            </h3>
            <h3 className="text-2xl mb-4">Exclusive, Original and Unique</h3>
            <div className="md:flex space-x-4">
              <Image
                src="/gerhpe.png"
                width={700}
                height={500}
                alt="Gerhpe"
                className="mt-4"
              />
              <div className="md:flex flex-col justify-between h-80">
                <div>
                  <h4 className="font-bold text-lg">Next Event:</h4>
                  <a
                    href="https://www.neptunefestival.com/events/neptune-festival-art-craft-show"
                    className="hover:underline"
                    target="_blank"
                    rel="nonreferrer"
                  >
                    <p className="text-3xl font-bold">
                      Neptune Festival Art & Craft Show
                    </p>
                    <p className="text-xl">Virginia Beach, VA</p>
                    <p className="text-xl">Sep 24-26 | 12pm-7pm</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h1 className="hidden md:block text-9xl font-bold absolute bottom-0 right-0">
            Gerhpe
          </h1>
        </div>
      </div>

      <div id="gallery" className="bg-gray-100 px-20 mt-5 pt-10">
        <h1 className="text-center font-playfair text-8xl mb-4">
          Latest Paintings
        </h1>
        <h3 className="font-playfair text-3xl text-center mb-5">
          "If you have a Gerhpe... you have good taste"
        </h3>
        <a
          href="/gallery"
          className="flex justify-center text-xl text-blue-500 mb-5"
        >
          View All
        </a>
        <div className="w-100 md:w-11/12 mx-auto flex justify-center space-x-10">
          {grid.map((col, i) => (
            <div className="flex flex-col space-y-10">
              {col.map(painting => (
                <Link href={`/gallery/${painting.id}`} key={painting.id}>
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
  const res = await fetch(process.env.HOSTNAME + `/api/latestPaintings`)
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
