import { View, Text } from 'react-native';
import React from 'react';
// librerias externas
import { map, capitalize } from 'lodash';
// utilidades
import { getPokemonColorByType } from '../../../utils/getColorByPokemonType';
// estilos
import Styles from './Type.styles';
// interfaces
import { PokemonDetails } from '../../../models/PokemonDetails.interface';

interface Props {
  types : PokemonDetails['types'];
}

const Type = ({ types }:Props) : JSX.Element => {
  return (
    <View style={Styles.content}>
      <Text style={Styles.title}>Types:</Text>
      <View style={Styles.flexContent}>
        {
          // aca mapeamos el contenido y renderizamos un componente para cada tipo
          // se puede realizar con el metodo de map convencional o el proveniente de 'lodash'
          map(types, (type, index)=>(
            <Text 
              key={index} 
              style={{...Styles.typeFigure, backgroundColor: getPokemonColorByType(type.type.name)}}
            >{capitalize(type.type.name)}</Text>
          ))
          // types.map(p => <Text>{p.type.name}</Text>)
        }
      </View>
    </View>
  );
};

export default Type;