import { Image, View } from "react-native";

import logoImg from '../../assets/Logo.png'


export function Header(){

    return (
        <View>
            <Image source={logoImg}/>
        </View>
    )

}