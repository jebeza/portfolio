export function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-8">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-215 py-7 px-63.75">
        
        <div className="col-span-2 bg-red-400 rounded-[32px]">
          1
        </div>

        <div className="col-start-3 bg-red-400 rounded-[32px]">
          2
        </div>

        <div className="row-span-2 col-start-4 bg-red-400 rounded-[32px]">
          3
        </div>

        <div className="row-start-2 bg-red-400 rounded-[32px]">
          4
        </div>

        <div className="row-start-2 bg-red-400 rounded-[32px]">
          5
        </div>

        <div className="row-span-2 row-start-2 bg-red-400 rounded-[32px]">
          6
        </div>

        <div className="col-span-2 row-start-3 bg-red-400 rounded-[32px]">
          7
        </div>

        <div className="col-start-4 row-start-3 bg-red-400 rounded-[32px]">
          8
        </div>
      </div>
    </div>
  );
}

export default App;
