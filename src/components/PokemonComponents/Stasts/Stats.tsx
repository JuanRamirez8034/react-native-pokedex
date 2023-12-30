import { View, Text } from 'react-native';
import React from 'react';
// librerias externas
import { map, capitalize } from 'lodash';
// estilos
import Styles from './Stats.styles';
// utilidades
import { orange, purple, yellow } from '../../../utils/Colors';
// interfaces
import { PokemonDetails } from '../../../models/PokemonDetails.interface';

interface Props {
  stats: PokemonDetails['stats'];
}


const Stats = ({ stats }: Props): JSX.Element => {

  // funcion para definir el color y tamano de la barra de porcentaje
  const widthPercentAndColorStyles = (num:number) : Record<string, string | number> => {
    const color = (num < 49) ? purple : (num <= 100) ? yellow : orange;
    const width = (num <= 100) ? num : (num * 0.5);
    return {
      width: `${width}%`,
      backgroundColor: color
    }
  };

  return (
    <View style={Styles.content}>
      <Text style={Styles.title}>Base Stats:</Text>
      {
        // recorriendo los stats para poder mostrar cada barra de porcentaje
        // se puede utilizar el metodo de 'array.map' convercional pero en este caso se utiliza el metodo 'map' proveniente de 'lodash'
        map(stats, (stat, index) => (
          <View key={index} style={Styles.statContent}>
            <Text style={Styles.statName}>{capitalize(stat.stat.name)}</Text>
            <View style={Styles.statStatusBarContent}>

              <Text style={Styles.statStatusBarNumber}>{stat.base_stat}</Text>
              
              <View style={Styles.statStatusBar}>
                <View style={{...Styles.statStatusBarPercent, ...widthPercentAndColorStyles(stat.base_stat)}}></View>
              </View>

            </View>
          </View>
        ))
      }
    </View>
  );
};

export default Stats;