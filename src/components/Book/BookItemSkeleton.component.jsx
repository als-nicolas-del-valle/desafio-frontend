function BookItemSkeleton() {
  return (
    <div className="flex flex-row gap-4 w-full animate-pulseTW">
      <div className="w-48 h-64 bg-gray-300 rounded-lg" />
      <div className="flex flex-col gap-8 w-full border border-gray-300 rounded-lg p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="h-6 bg-gray-300 rounded-lg w-3/4 " />
          <div className="h-6 bg-gray-300 rounded-lg w-16" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-4 bg-gray-300 rounded-lg w-full" />
          <div className="h-4 bg-gray-300 rounded-lg w-full" />
          <div className="h-4 bg-gray-300 rounded-lg w-156" />
          <div className="h-4 bg-gray-300 rounded-lg w-1/2" />
        </div>
        <div className="flex flex-row gap-4">
          <div className="h-4 bg-gray-300 rounded-lg w-24" />
          <div className="h-4 bg-gray-300 rounded-lg w-24" />
        </div>
      </div>
    </div>
  );
}

export default BookItemSkeleton;
