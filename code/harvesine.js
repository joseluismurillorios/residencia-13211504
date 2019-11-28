/**\textcolor{allcomment}{// Funcioón para convertir grados en radianes }  -*/
export const deg2rad = deg => deg * (Math.PI / 180);

export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  /**\textcolor{allcomment}{// Radio de la tierra en kilómetros }  -*/
  const R = 6371;
  /**\textcolor{allcomment}{// Diferencia en radianes de las latitudes }  -*/
  const dLat = deg2rad(lat2 - lat1);
  /**\textcolor{allcomment}{// Diferencia en radianes de las longitudes }  -*/
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2))
    * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;/**\textcolor{allcomment}{// Distancia en kilómetros }  -*/
  return d;
};