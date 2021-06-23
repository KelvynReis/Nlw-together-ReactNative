import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';

import { Category } from '../Category';

type Props = {
    CategorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({
    CategorySelected,
    setCategory
}: Props){
    return(
        <ScrollView 
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map(category =>(
                    <Category 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === CategorySelected}
                        onPress={ () => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
            
    );
}