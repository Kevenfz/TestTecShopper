import axios from "axios";

export const getDistanceFromGoogleMaps = async (
  origin: string,
  destination: string
): Promise<number> => {
  const apiKey = process.env.GOOGLE_MAPAS_API_KEY;
  const response = await axios.get(
    `http://maps.googleapis.com/maps/api/distancematrix/json`,
    {
      params: { origins: origin, destinations: destination, key: apiKey },
    }
  );
  const distance = response.data.rows[0].elements[0].distance.value;
  return distance / 1000; //converter para quilometros
};

export const calculateFare = (distance: number): number => {
    const baseFare = 5; //valor base
    const perKmRate = 2; //valor por km
    return baseFare + distance * perKmRate;
}