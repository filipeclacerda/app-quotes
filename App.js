import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import CardQuote from './components/card/card.component';

const list = [
  { id:1, likes: 222, text: 'Feliz é aquele que não é triste', author: 'Agostinho Carrara', profileImg: 'https://i.pinimg.com/564x/f7/60/f0/f760f0bbf371b4628d9ce0f509aa2a32.jpg' },
  { id:2, likes: 41, text: 'Tenho que terminar meus trabalhos', author: 'Platão', profileImg: 'http://www.integracaodaserra.com.br/wp-content/uploads/2019/07/socrates.jpg' },
  { id:3, likes: 11, text: 'O bombinho já foi!', author: 'Nietzsche', profileImg: 'https://cdn.pixabay.com/photo/2020/07/06/06/27/friedrich-nietzsche-5375698_1280.png' },
  { id:4, likes: 89, text: 'Eu bebo, cê beija', author: 'Sócrates', profileImg: 'https://i.pinimg.com/564x/e0/64/68/e0646826d44cac5d804603d687b16e23.jpg' },
  { id:5, likes: 122, text: 'Vai funfar, confia', author: 'Confia no pai', profileImg: 'https://i.pinimg.com/564x/4b/8f/26/4b8f265201569bbcf13f76127a5c0277.jpg' },
  { id:6, likes: 50, text: 'Juliete vai ganhar', author: 'Beatriz Bertacco', profileImg: 'https://scontent.fjdf2-2.fna.fbcdn.net/v/t1.6435-9/166988835_1105088783341958_4995967335722919518_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jvKi_Sjv-ggAX-reqSg&_nc_ht=scontent.fjdf2-2.fna&oh=0dab4c9ffe575cd4c4a1370d973f4b3d&oe=60B7D593' },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={list}
      keyExtractor={item => item.id}
      renderItem={({item}) =>
        <CardQuote text={item.text}
        author={item.author}
        profileImg={item.profileImg}
        likes={item.likes}
         />
      }
      >
      </FlatList>
      </SafeAreaView>
  );
}

