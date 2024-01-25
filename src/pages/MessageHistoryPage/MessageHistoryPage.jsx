import { checkToken } from '../../utilities/users-service';

export default function MessageHistoryPage() {
  
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <div className='text-white'>
      <h1>MessageHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}