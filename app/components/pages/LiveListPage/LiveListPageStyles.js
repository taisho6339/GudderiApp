import { StyleSheet } from 'react-native';
import constants from '../../../constants/consstants';

export default StyleSheet.create({
  tabLineStyle: {
    backgroundColor: constants.mainColor,
    position: 'absolute',
    bottom: 0,
  },
  activeTabTextStyle: {
    color: constants.boldTextColor,
    fontWeight: 'bold',
  },
});