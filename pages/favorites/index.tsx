import { useEffect, useState } from "react";

import { NoFavorites } from "@/components/ui";

import { Layout } from "@/components/layouts";
import { localFavorites } from "@/utils";
import { Card, Grid } from "@nextui-org/react";
import { FavoritePokemons } from "@/components/pokemon";

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
