export default function Popup(){
    return (
        <div className="flex items-center justify-center">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <label className="block mb-2 text-xl font-bold text-gray-700">Enter Adventure Title:</label>
                <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Type here..."
                />
            </div>
        </div>
    );
}