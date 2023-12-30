import { TouchableWithoutFeedback, View, Text, Image } from "react-native";

import { capitalize } from "lodash";

import styles from "./PokemonCard.styles";
import { getPokemonColorByType } from "../../utils/getColorByPokemonType";
import { LightPokemon } from "../../models/PokemonLightDetails.interface";

// funcion (componente) encargada de renderizar la información
export default function PokemonCard ({item, navigate}:{item:LightPokemon,  navigate: (id:number)=>void}) : JSX.Element {

  // consiguiendo el color para cada tipo de pokemon
  const dataContainerStyles = {...styles.dataContainer, backgroundColor: getPokemonColorByType(item.type)};

  return (
    <TouchableWithoutFeedback onPress={()=>navigate(item.id)}>
      <View style={styles.cardContainer}>
        <View style={dataContainerStyles}>

          <Text style={styles.order}>#{`${item.order}`.padStart(3, '0')}</Text>

          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.plant}></View>

          <Text style={styles.name}>{capitalize(item.name)}</Text>

        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}