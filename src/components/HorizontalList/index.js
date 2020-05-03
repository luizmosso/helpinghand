import React from 'react'
import { List } from './style'

export default function HorizontalList({ items, ...rest }){
    return (
        <List {...rest} >{items()}</List>
    )
}