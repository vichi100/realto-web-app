import FontAwesome_ttf from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Entypo_ttf from 'react-native-vector-icons/Fonts/Entypo.ttf';
import AntDesign_ttf from 'react-native-vector-icons/Fonts/AntDesign.ttf';
import MaterialCommunityIcons_ttf from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';


const IconsCSS = `
@font-face {
  src: url(${FontAwesome_ttf});
  font-family: FontAwesome;
}
@font-face {
    src: url(${AntDesign_ttf});
    font-family: AntDesign;
  }
  @font-face {
    src: url(${MaterialCommunityIcons_ttf});
    font-family: MaterialCommunityIcons;
  }
@font-face {
  src: url(${Entypo_ttf});
  font-family: Entypo;
}
`;

const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) style.styleSheet.cssText = IconsCSS;
else style.appendChild(document.createTextNode(IconsCSS));

document.head.appendChild(style);