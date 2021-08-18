const ArtworkPageSkeleton = () => (
  <div className="border border-gray-200 rounded-md p-4  w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="bg-gray-200 h-60 w-60"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

export default ArtworkPageSkeleton
