import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.texto2}>
        <Text>🚩</Text>
        <Text>9185 Mayflower Drive Atlanta</Text>
      </View>
      <View style={styles.container1}>
      <Image style={styles.image1} source={{uri: 'https://www.thespruceeats.com/thmb/IzejeJObvz4lvYpW06uwhX6iR00%3D/3680x2456/filters:fill(auto%2C1)/GettyImages-Ridofranz-1053855542-60b89644efd2470fbfb6475b175064df.jpg'}}></Image>
      <Text style={styles.puntos}>...</Text>
      </View>
      <View style={styles.texto2}>
      <Text style={styles.title1}>All Restaurants</Text>
      </View>
      <View style={styles.containScroll}>
      <View style={styles.containScroll}>
        <View style={styles.card1}>
          <Image style={styles.image2} source={{uri: 'https://th.bing.com/th/id/OIP.Szyf1is2FPD70zAW8TeadAHaE8?rs=1&pid=ImgDetMain'}}></Image>
          <Text style={styles.title2}>Groceries</Text>
          <Text>burger, dessert</Text>
        </View>
      </View>
      <View style={styles.containScroll}>
        <View style={styles.card1}>
          <Image style={styles.image2} source={{uri: 'https://th.bing.com/th/id/OIP.Szyf1is2FPD70zAW8TeadAHaE8?rs=1&pid=ImgDetMain'}}></Image>
          <Text style={styles.title2}>Groceries</Text>
          <Text>burger, dessert</Text>
        </View>
      </View>
      </View>
      
      <View style={styles.texto2}>
      <Text style={styles.title1}>All Grocerise</Text>
      </View>
      
      <View>
        <View style={styles.containScroll}>
        <View style={styles.card1}>
          <Image style={styles.image2} source={{uri: 'https://mycreativejuic.es/wp-content/uploads/2018/06/vegetables-2977891_1920.jpg'}}></Image>
          <Text style={styles.title2}>Groceries</Text>
          <Text>15-20 min</Text>
        </View>
        <View style={styles.card1}>
          <Image style={styles.image2} source={{uri: 'https://mycreativejuic.es/wp-content/uploads/2018/06/vegetables-2977891_1920.jpg'}}></Image>
          <Text style={styles.title2}>Groceries</Text>
          <Text>15-20 min</Text>
        </View>
        </View>
        
      </View>

      <View style={styles.texto2}>
      <Text style={styles.title1}>Specials</Text>
      </View>
      
      <View>
        <View style={styles.card2}>
        <Image style={styles.image3} source={{uri: 'https://centergourmet.com.br/wp-content/uploads/2024/01/Terrunyo-Cabernet-Sauvignon-Pirque-DO-2017-Harmonizacao.jpg'}}></Image>
        <Text>Grocery</Text>
        </View> 
      </View>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  container1: {
    alignItems: 'center',
  },

  containScroll: {
    flexDirection: 'row'
  },

  texto: {
    textAlign: 'left', 
    fontSize: 18,
    width: '100%',   
  },

  texto2: {
    paddingTop: 50,
    paddingLeft: 15,
    paddingBottom: 20
  },

  title1: {
    fontWeight: 'bold',
    fontSize: 20
  },

  title2: {
    fontWeight: 'bold',
    fontSize: 18
  },

  puntos: {
    fontSize: 40,
    color: 'gray'
  },

  image1: {
    width: 350,
    height: 250,
    borderRadius: 10
  },

  image2: {
    width: 230,
    height: 200,
    borderRadius: 10
  },

  image3: {
    width: 350,
    height: 200,
    borderRadius: 10
  },

  card1: {
    
    height: 270,
    width: 250,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: 'lightyellow',
    alignContent: 'center'
  },

  card2: {
    height: 200,
    width: 350,
    borderRadius: 10,
    margin: 5,
    padding: 10, 
    paddingBottom:50,
    alignContent: 'center'
  }
});
