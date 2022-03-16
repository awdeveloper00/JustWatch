import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {rootStore} from './mobx/store';
import {styles} from './Styles';
import Image1 from './assets/Spiderman1.jpg';
import Image2 from './assets/TGH.png';
const Tile = () => {
  const [text1, setText1] = useState(true);
  const [text2, setText2] = useState(false);

  const onPressHandeler = data => {
    if (data == 1) {
      setText1(true);
      setText2(false);
    } else {
      setText2(true);
      setText1(false);
    }
  };

  const onBackHandeler = () => {
    setText1(false);
    setText2(false);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.App}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onPressHandeler(1)}
          style={[styles.Tile, text1 ? styles.TileFocus : styles.TileOutFocus]}>
          <Image source={Image1} style={styles.Image} resizeMode={'contain'} />
          <Text style={styles.TileDescription}>
            {text1 ? rootStore.authors[0].Title : null}
          </Text>
          <Text style={styles.AboutDescription}>
            {text1 ? rootStore.authors[0].About : null}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.Tile, text2 ? styles.TileFocus : styles.TileOutFocus]}
          onPress={onPressHandeler}>
          <Image source={Image2} style={styles.Image} resizeMode={'contain'} />
          <Text style={styles.TileDescription}>
            {text2 ? rootStore.authors[1].Title : null}
          </Text>
          <Text style={styles.AboutDescription}>
            {text2 ? rootStore.authors[1].About : null}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={onBackHandeler}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Tile;
