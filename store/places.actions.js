import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";
export const LOAD_PLACES = "LOAD_PLACES";

export const addPlace = (title, image, location) => {
  return async dispatch => {
    const response = await fetch(
       // poner aca api google
    );
    if (!responde.ok){
      throw new Error ("No se pudo abrir Maps");
    }
    const resData =await response.json();

    if (!resData.results){
      throw new Error ("No encontarron las coordenadas seleccionadas");
    }


    console.log(resData);

    const address = resData.results[0].formattes_addres;
        
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
        try {
          FileSystem.moveAsync({
            from: image,
            to: Path,
          });
          const result = await insertAddress(
            title,
            image,
            address,
            location.lat,
            location.lng

          );
          console.log(result);
        } catch (error) {
          console.log(error.message);
          throw error;
        }
        dispatch({ 
          type: ADD_PLACE,
          payload: { 
            title, 
            image: Path,
            address,
            lat : location.lat,
            lng: location.lng,
          }
        });
  };
};
