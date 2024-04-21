export const filenames = [
  "Buffer_Zona1_AR",
  "Buffer_Zona1_LN",
  "Buffer_Zona2_AR",
  "Buffer_Zona2_LN",
  "Buffer_Zona3_Kuota_AR",
  "Buffer_Zona3_Kuota_LN",
  "Buffer_Zona3_Terbatas_AR",
  "Buffer_Zona3_Terbatas_LN",
  "Buffer_Zona4_AR",
  "Buffer_Zona4_LN",
  "Buffer_Zona5_AR",
  "Buffer_Zona5_LN",
  "Buffer_Zona6_AR",
  "Buffer_Zona6_LN",
];

export const initBuffer = async () => {
  
    const responsePromises = filenames.map((i) => {
      return fetch(`${window.location.origin}/buffer/${i}.json`);
    });
  
    const _responsePromises = responsePromises.filter((row) => row !== undefined);
  
    const responses = await Promise.all(_responsePromises);
  
    return Promise.all(responses?.map((response) => response.json()));
  };