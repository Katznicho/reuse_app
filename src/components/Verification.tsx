import React from "react"
import { View } from "react-native";
import Octicons from "react-native-vector-icons/Octicons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../theme/theme';



interface VerificationInterface{
    isVerified:null|boolean|undefined,
    size:number,
    style:any
}
const Verification = ({ isVerified, style, size }: VerificationInterface) => {
    

    return isVerified ?
        <View style={style}>
            <MaterialIcons name={'verified'}
                size={size}
                color={theme.colors.white}
            />
        </View>

        :
        <View style={style}>
            <Octicons name={'unverified'}
                size={size}
                color={theme.colors.white}
            />

        </View>

}

export default Verification


