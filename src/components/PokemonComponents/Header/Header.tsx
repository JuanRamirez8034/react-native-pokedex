import { Text, View, SafeAreaView, Image } from 'react-native';

import { capitalize } from 'lodash';

import styles from './Header.styles';
import { getPokemonColorByType } from '../../../utils/getColorByPokemonType';

// Intefaz de propiedades del componente
interface Props {
  name: string;
  type: string;
  order: number;
  image: string;
}

const Header = ({ name, type, order, image }: Props): JSX.Element => {

  // determinando el color del fondo del pokemon
  const bgStyles = {...styles.background, backgroundColor: getPokemonColorByType(type)}

  return (
    <>
      <View style={[bgStyles]} />

      <SafeAreaView style={styles.container} >
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, '0')}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};
export default Header;
