
const ArtworkCard = ({ painting: { Name, Photo, Size } }) => (
    <div className="border p-2 shadow-sm bg-white">
        <img src={Photo[0].url} alt={Name} />
        <h1 className="font-semibold">{Name}</h1>
        <p className="text-sm">{Size}</p>
    </div>
)

export default ArtworkCard