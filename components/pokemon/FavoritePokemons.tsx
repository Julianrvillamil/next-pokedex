import { FC } from "react";

import { Grid } from "@nextui-org/react";

import { FavoriteCardPokemon } from "./index";

interface Props {
  favoritePokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction={"row"} justify="flex-start">
      {favoritePokemons.map((id: number) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
