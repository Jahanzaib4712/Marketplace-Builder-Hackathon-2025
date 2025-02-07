import { Helicopter } from '@/app/types';
import { client } from './client'; // Sanity client
import HelicopterCard from '@/components/helicoptercard';



async function fetchHelicopterDataFromSanity() {
  try {
    // Fetch data from Sanity using only `_type`
    const sanityQuery = '*[_type == "helicopter"]';
    const sanityHelicopters = await client.fetch(sanityQuery);

    // Debug: Log fetched data
    console.log('Fetched Helicopters from Sanity:', sanityHelicopters);

    // Return all fields for the "helicopter" type
    return sanityHelicopters;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return [];
  }
}


export default async function SanityData() {
    // Fetch data only from Sanity
    const helicopters = await fetchHelicopterDataFromSanity();
  
    return (
      <div className="h-[100vh] ">
        <h1 className="text-3xl font-bold text-center mt-8">
          Helicopter Selling & Renting
        </h1>
        <div className="grid grid-cols-4 gap-6 p-8">
          {helicopters.map((helicopter: Helicopter) => (
            <HelicopterCard
              key={helicopter._id} // Use `_id` from Sanity as a unique key
              helicopter={helicopter}
            />
          ))}
        </div>
      </div>
    );
  }