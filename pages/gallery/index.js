import Link from "next/link"
import Head from "next/head"
import Menu from "../../components/Menu"
import Contact from "../../components/Contact"

export default function Gallery({ paintings }) {
  const grid = new Array(3)
    .fill()
    .map((_, i) => paintings.filter((_, j) => j % 3 === i))

  return (
    <div>
      <Head>
        <title>Gallery | Fine Art Naples, FL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <div className="px-20 py-10">
        <h1 className="text-center font-playfair text-8xl mb-10">Gallery</h1>
        <div className="flex mx-10 my-5 space-x-2">
          <div className="p-2 text-xl font-bold font-playfair">Lines:</div>
          <a href="/line/Impressionist" className="border p-2 rounded">
            Impressionist
          </a>
          <a href="/line/Abstract" className="border p-2 rounded">
            Abstract
          </a>
          <a href="/line/Ligths%20and%20Shadows" className="border p-2 rounded">
            Lights and Shadows
          </a>
          <a href="/line/Luxury" className="border p-2 rounded">
            Luxury
          </a>
        </div>
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
  <div className="">
    <img src={painting.Photo[0].thumbnails.large.url} />
    <h3 className="text-lg font-bold mt-4">{painting.Name}</h3>
    <p>{painting.Size} in</p>
    <p>{painting.Type}</p>
  </div>
)

export async function getServerSideProps(context) {
  const res = await fetch(process.env.HOSTNAME + `/api/paintings`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  console.log(data)
  return {
    props: { paintings: data },
  }
}
