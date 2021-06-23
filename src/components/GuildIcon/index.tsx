import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';



export function GuildIcon(){
    const uri = 'https://discord.com/assets/f9bb9c4af2b9c32a2c5ee0014661546d.png'
    return(
        <Image  
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}