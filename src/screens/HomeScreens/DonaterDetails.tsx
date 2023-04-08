import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ImageBackground,
} from 'react-native';
import React from 'react';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { generalstyles } from '../../generalstyles/generalstyles';
import { theme } from '../../theme/theme';
import ProfileCard from '../../components/ProfileCard';
import ProfileReview from '../../components/ProfileReview';


const DonaterDetails = () => {
    const navigation = useNavigation<any>();
    const { params } = useRoute<any>();
    return (
        <SafeAreaView style={generalstyles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {/* header section */}
                <ImageBackground
                    source={{ uri: params.item.image }}
                    style={{ width: '100%', height: 300 }}
                    resizeMode="cover"
                >
                    <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                        <IconButton
                            icon="chevron-left"
                            iconColor={theme.colors.white}
                            size={28}
                            onPress={() => navigation.goBack()}
                            containerColor={theme.colors.darkBlack}
                        />
                    </View>
                </ImageBackground>

                <View style={[generalstyles.flexStyles , {justifyContent:"space-between", alignItems:"center"}]}>
                    <View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginHorizontal: 10,
                                    color: theme.colors.white,
                                }}
                            >
                                {params.item.name}
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 12,
                                    marginHorizontal: 10,
                                    color: theme.colors.buttonColor,
                                    width:250
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, doloremque.
                            </Text>
                        </View>
                    </View>


                    <View>
                        <Button
                            mode="contained"
                            contentStyle={{
                                flexDirection: 'row-reverse',
                            }}
                            //  loading={true}
                            buttonColor={theme.colors.buttonColor}
                            textColor={theme.colors.white}
                            onPress={() => navigation.navigate('Packages')}
                        >
                            Follow
                        </Button>
                    </View>

                </View>
                {/* header section */}

                {/* card section */}
                <ProfileCard />
                {/* card section */}

                {/* Reviews */}
                <ProfileReview />
                {/* Reviews */}
            </ScrollView>
            {/* book appountment */}
            <View style={[generalstyles.absoluteStyles, { bottom: 10, right: 10 }]}>
                <Button
                    mode="contained"
                    contentStyle={{
                        flexDirection: 'row-reverse',
                    }}
                    //  loading={true}
                    buttonColor={theme.colors.buttonColor}
                    textColor={theme.colors.white}
                    onPress={() => navigation.navigate('Packages')}
                >
                    View Available Products
                </Button>
            </View>

            {/* book appointment */}
        </SafeAreaView>
    );
};

export default DonaterDetails;
