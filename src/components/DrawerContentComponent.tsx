import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { generalstyles } from '../generalstyles/generalstyles';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Avatar, Caption, Drawer, Title } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Verification from './Verification';
import { theme } from '../theme/theme';

const DrawerContentComponent = ({ props }: any) => {
    return (<View style={[generalstyles.container]}>
        <DrawerContentScrollView  {...props}>
        <View style={[styles.userInfoSection]}>
            <View
              style={[
                generalstyles.flexStyles,
                {marginTop: 15, justifyContent: 'space-evenly'},
              ]}>
                <Avatar.Image
            size={50}
            source={{uri:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          />
              <View>
                <Title style={styles.title}>
                  {` Katende Nicholas`}
                  <Verification
                    isVerified={true}
                    style={{
                      margin: 10,
                    }}
                    size={18}
                  />
                </Title>
                <Caption style={styles.caption}>{`Katznicho@gmail.com`}</Caption>
              </View>
            </View>
            {/*some info */}
            {/*some info */}
          </View>

            {/*drawer items */}
            <Drawer.Section style={[styles.drawerSection]}>

                {/* home */}
                <Drawer.Item
                    label="Home"
                    icon={({ color, size }: any) => (
                        <AntDesign
                            name="home"
                            size={size}
                            color={color}
                        />
                    )}
                    active={true}


                />
                {/* home */}

                {/* chats */}
                <Drawer.Item
                    label="Chats"
                    icon={({ color, size }: any) => (
                        <Ionicons
                            name="chatbox-ellipses-outline"
                            size={size}
                            color={color}
                        />
                    )}

                />
                {/* chats */}

                {/* market place */}
                <Drawer.Item
                    label="Market Place"
                    icon={({ color, size }: any) => (
                        <AntDesign
                            name="shoppingcart"
                            size={size}
                            color={color}
                        />
                    )}

                />
                {/* market place*/}


                <Drawer.Item
                    label="Support"
                    icon={({ color, size }: any) => (
                        <AntDesign
                            name="customerservice"
                            size={size}
                            color={color}
                        />
                    )}

                />
                <Drawer.Item
                    label="Invite People"
                    icon={({ color, size }: any) => (
                        <AntDesign name="sharealt" size={size} color={color} />
                    )}

                />
            </Drawer.Section>

            {/* add drawer section with title communities */}
            <Drawer.Section style={[styles.drawerSection]} title="Communities">
                <Drawer.Item
                    label="Community 1"
                    icon={({ color, size }: any) => (
                        <AntDesign
                            name="customerservice"
                            size={size}
                            color={color}
                        />
                    )}
                />
                <Drawer.Item
                    label="Community 1"
                    icon={({ color, size }: any) => (
                        <AntDesign
                            name="customerservice"
                            size={size}
                            color={color}
                        />
                    )}
                />
            </Drawer.Section>

            <Drawer.Section >
                <Drawer.Item
                    label="Sign Out"
                    icon={({ color, size }: any) => (
                        <MaterialCommunityIcons
                            name="exit-to-app"
                            size={size}
                            color={color}
                        />
                    )}

                />
            </Drawer.Section>

        </DrawerContentScrollView>

    </View>
    )
}

export default DrawerContentComponent

const styles = StyleSheet.create({
    draweContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 0,
        marginLeft: -14,
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: 'bold',
        marginLeft: -20,
        color:theme.colors.white
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        marginLeft: -20,
        color:theme.colors.white
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});