import { checkToken } from '../../utilities/users-service';

export default function MessageHistoryPage() {
  
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <div className='text-white p-8'>
      <h1 className="text-4xl font-bold mb-6">Message History Page</h1>
      <button 
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded focus:outline-none focus:shadow-outline"
        onClick={handleCheckToken}
      >
        Check When My Login Expires
      </button>
    </div>
  );
}