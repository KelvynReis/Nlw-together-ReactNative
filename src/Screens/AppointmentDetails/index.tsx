import React from "react";
import { View } from 'react-native'

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';


//import  Styles  from './styles.ts';

export function AppointmentDetails(){
    return(
        <Background>
            <Header 
                title="Detalhes"
            />
        </Background>
    );
}