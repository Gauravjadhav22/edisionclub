import React from 'react'
import { View, Image } from 'react-native'
import loadingImg from '../../../assets/loading-bar.png'

const Loader = () => {
    return (
        <View style={{ alignSelf: 'center', position: 'relative', top: 133 }}>
            <Image source={loadingImg} style={{ height: 83, width: 84 }} />
        </View>
    )
}

export default Loader