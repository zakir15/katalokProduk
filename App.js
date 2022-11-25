import React, {useState, useEffect } from "react";
import {View, Text, FlatList, ImageBackground} from 'react-native';
import { Card } from "react-native-paper";
import  styles from "./styles";

export default function App(){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json')
    .then((response)=> response.json())
    .then((hasil)=> setData(hasil))
    .catch(error=> {console.log;})
  }, []);

  const listHomestay = ({item}) =>{
    return (
      <Card style={styles.cardUtama}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{item.nama}</Text>
        </View>
        <View style={styles.containerImage}>
          <ImageBackground style={styles.image}
          source={{uri:item.fotoUrl}}>
            <Text style={styles.price}>Rp. {item.harga} RB</Text>
          </ImageBackground>
        </View>
      </Card>
    )
  }

 return (
    <View style={{flex:1, padding:24}}>
      <FlatList
      data={data}
      keyExtractor={item=>item.id}
      renderItem={listHomestay}/>
    </View>
  );
    }
