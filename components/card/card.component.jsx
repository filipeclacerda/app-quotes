import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Paragraph, Avatar } from 'react-native-paper';

// MaterialCommunityIcons
// https://oblador.github.io/react-native-vector-icons/
// https://www.color-hex.com/color-palette/44545

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#c64242',
        padding: 24,
    },
    actions: {
        backgroundColor: '#f7c2c2',
        justifyContent: 'flex-end',
    },
    quote: {
        fontSize: 52,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        lineHeight: '120%'
    },
    likes: {
        paddingRight: 10
    }
});


const CardQuote = ({ text, author, profileImg, likes }) => {
    const [likeButton, setLikeButton] = useState("heart-outline")

    const handleLike = () =>{
        if (likeButton === "heart-outline"){
            setLikeButton("cards-heart")
            
        } else{
            setLikeButton("heart-outline")
            
        }
        
    }
    return (
        <Card >
            <Card.Title title={author}
            titleStyle={{ fontSize: 20 }}
            left={() =>
                <Avatar.Image size={42} source={{ uri: profileImg}}/>
            } />
            <Card.Content style={styles.content}>
                <Paragraph style={styles.quote}>{text}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.actions}>
                <Button 
                icon= "share-variant"
                color='#541616'
                labelStyle={{ fontSize: 24 }}
                />
                
                <Button 
                icon= {likeButton}
                color='#541616'
                labelStyle={{ fontSize: 24 }}
                onPress={handleLike}
                />
                <Text style={styles.likes}>
                    {likes}
                </Text>
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;