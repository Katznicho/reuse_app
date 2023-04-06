import { DefaultTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';
//get dimensions
const { height, width } = Dimensions.get('screen');

export const theme = {
  ...DefaultTheme,
  roundness: 27,
  colors: {
    ...DefaultTheme.colors,
    notification: 'blue',
    primary: '#000000',
    secondary: '#1B252D',
    red: '#AF052E',
    accent: '#f7f7f7',
    surface: '#F1F7ED',
    backgroundScreenColor: '#121212',
    error: 'red',
    ligthgray: '#d3d3d3',
    disabled: '#d3d3d3',
    placeholder: 'grey',
    backdrop: '#005500',
    black: '#000000',
    yellow: 'gold',
    whitesmoke: 'whitesmoke',
    white: '#fff',
    myMessageColor: '#DCF8C5',
    // transparent: "#11ffee00",
    link: '#0000FF',
    screenColor: '#fff',
    textColor: '#fff',
    buttonColor: '#228B22', //"#D0FD3E",
    transparent: '#FFFFFF78',
    darkBlack: '#1E1E1E',
    arraowBackGroundColor: '#FFFFFF78',
  },
  font: {
    regular: 20,
    medium: 15,
  },
  spacing: {
    padding: 2,
  },
  dimensions: {
    width,
    height,
  },
  phoneSizes: {
    tablet: 700,
  },
};
