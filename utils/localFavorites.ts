const toggleFavorites = (id: number) => {
  console.log("toggleFavorite Llamado");

  //hay que traernos el arreglo que esta en el localStorage
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  //Hay que verificar si el id que me lllega por parametro esta o no esta

  //Si esta, hay que quitar ese id del arreglo

  //Si no esta, hay que agregarlo al arreglo
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default {
  toggleFavorites,
  existInFavorites,
  pokemons,
};
