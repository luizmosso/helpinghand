import React, { useState } from 'react'
import HorizontalList from '../../../components/HorizontalList'
import { 
    LiContainer, LiImage, LiLabel, Label, Details,
    Container, Title, Description, SearchButton, List
} from './style'
import fake from '../../../store/fake'

export default function Categories(){
    const LIST_CLASSNAME = 'horizontalList'
    const BREAK_LINE_CHAR = '<br>'

    const { categories } = fake
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [showDetails, setShowDetails] = useState(false)

    const ListItem = ({id, name, icon, onClick, selected}) => (
        <LiContainer key={id} onClick={() => onClick(id)}>
          <LiImage src={icon} selected={selected} />
          <LiLabel selected={selected} >{name}</LiLabel>
        </LiContainer>
      )
    
    const handleListItemClick = async (id) => {
        const category = categories.find(cat => cat.id === id)
        await setShowDetails(false)
        if(selectedCategory){
            if(selectedCategory.id === id)
                setSelectedCategory(null)
            else
                setSelectedCategory(category)
        }
        else
            setSelectedCategory(category)

        await setShowDetails(true)
        const list = document.querySelector(`.${LIST_CLASSNAME}`)
        const distance = categories.indexOf(category) * 100
        list.scrollTo({ top: 0, left: distance, behavior: 'smooth' });
    }

    return (
        <Container>
            <List>
                <Label>Do que você precisa?</Label>
                <HorizontalList mt={3}
                className={LIST_CLASSNAME}
                wrapItems={!selectedCategory}
                items={() => (categories.map(category => (
                    <ListItem 
                        {...category} 
                        onClick={handleListItemClick} 
                        selected={selectedCategory && selectedCategory.id === category.id} 
                    />
                )))} 
                />
            </List>
            {
                selectedCategory && showDetails &&
                <Details>
                    <Title>{selectedCategory.name}</Title>{
                        selectedCategory.description &&
                        selectedCategory.description
                            .split(BREAK_LINE_CHAR).map((text, index) => (
                                <Description key={index}>{text}</Description>
                        ))
                    }
                    <SearchButton>É isso mesmo ?</SearchButton>
                </Details>
            }
        </Container>
    )
}