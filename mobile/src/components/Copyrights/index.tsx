import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

export function Copyrights() {
  return (
    <View>
      <Text style={styles.text}>
        Feito com ♥ pela Rocketseat
      </Text>
    </View>
  );
}