import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';
import { generalstyles } from '../generalstyles/generalstyles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ScrollCardDetails = ({
    item,
    scrollCardStyles
}: any) => {
    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity style={[scrollCardStyles]}
            onPress={() =>
                navigation.navigate('ProductDetails', {
                    item,
                    screen: item.screen,
                })
            }
        >
            {/* image */}
            <Image
                style={{
                    height: 150,
                    width: 150,
                    resizeMode: "cover",
                    borderRadius: 20
                }}
                source={{ uri: item.packageImageUri }}
            />
            {/* image */}
            {/* names */}
            <View style={styles.packageViewStyles}>
                <View style={[generalstyles.flexStyles, generalstyles.centerContent]}>

                    <Text style={styles.nameStyles}>{item.name}</Text>
                </View>
            </View>
            {/* names */}

            {/* rating */}
            <View style={[generalstyles.centerContent, generalstyles.flexStyles]}>
                {
                    Array(item.rating).fill(item.rating).map((_, index) => (
                        <AntDesign
                            name="star"
                            color={theme.colors.buttonColor}
                            size={15}
                            key={index}
                        />
                    ))
                }
            </View>
            {/* rating */}
        </TouchableOpacity>
    );
};

export default ScrollCardDetails;

const styles = StyleSheet.create({
    packageViewStyles: {
        marginHorizontal: 10,
    },
    nameStyles: {
        color: theme.colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 4,
    },

    sessionStyles: {
        color: theme.colors.white,
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    description: {
        color: theme.colors.white,
        fontSize: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});


//   <ImageBackground
//   source={{ uri: item.packageImageUri }}
//   style={[packageImageStyles]}
// >
//   <View style={styles.packageViewStyles}>
//     <View style={[generalstyles.flexStyles, generalstyles.centerContent]}>
//       <Feather name="package" size={20} color={theme.colors.white} />
//       <Text style={styles.nameStyles}>{item.name}</Text>
//     </View>
//     <Text style={styles.description}>{item.description}</Text>

//     {/* price */}
//     <View style={[generalstyles.flexStyles, generalstyles.centerContent]}>
//       <Text
//         style={{
//           color: theme.colors.white,
//           fontSize: 25,
//           fontWeight: 'bold',
//         }}
//       >
//         $
//       </Text>
//       <Text
//         style={{
//           color: theme.colors.white,
//           fontSize: 25,
//           fontWeight: 'bold',
//         }}
//       >
//         {item.price}
//       </Text>
//     </View>
//     {/* price */}
//     {/* sessions */}
//     <View style={[generalstyles.flexStyles]}>
//       <AntDesign
//         name="checkcircle"
//         size={15}
//         color={theme.colors.white}
//       />
//       <Text style={styles.sessionStyles}>
//         {item.sessions} Work out sessions
//       </Text>
//     </View>
//     {/* sessions */}
//     {/* durations */}
//     <View style={[generalstyles.flexStyles]}>
//       <AntDesign
//         name="checkcircle"
//         size={15}
//         color={theme.colors.white}
//       />
//       <Text style={styles.sessionStyles}>
//         {item.duration} minutes duration
//       </Text>
//     </View>

//     {/* durations */}

//     <View style={[generalstyles.absoluteStyles, packageTypeStyle]}>
//       <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>
//         {item.packageType}
//       </Text>
//     </View>
//   </View>
// </ImageBackground>
