
const ArtworkCard = ({ painting: { Name, Photo, Size } }) => (
    <div className="border p-1 shadow-lg bg-white mb-4">
        <img src={Photo[0].url} alt={Name} />
        <div className="p-2">
        <h1 className="font-bold text-2xl">{Name}</h1>
        <p className="text-md">{Size}</p>
        </div>
    </div>
)

export default ArtworkCard