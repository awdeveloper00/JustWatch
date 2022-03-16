import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: 100,
  },

  Tile: {
    width: '30%',
    height: '55%',
    margin: '5%',
  },
  TileFocus: {
    opacity: 1,
    borderWidth: 6,
    borderColor: 'red',
    transform: [{scale: 1}],
    borderRadius: 20,
    padding: '1%',
    shadowColor: '#333',
    shadowOffset: {width: 6, height: 10},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  TileDescription: {
    marginTop: '2%',
    textAlign: 'center',
    fontWeight: '600',
  },
  AboutDescription: {
    marginTop: '4%',
    fontWeight: '400',
  },
  App: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  TileOutFocus: {
    transform: [{scale: 0.85}],
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center',
    width: '20%',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
