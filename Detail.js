import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Title, Card } from 'react-native-paper';
import email from '../icon/email.png';
import call from '../icon/call.png';
import dollar from '../icon/dollar.png';

const Detail = ({navigation, route}) => {
  const {karyawan} = route.params

  return (
    <View style={{flex:1}}>

    LinearGradient colors=(["#0033ff","#6bc1ff"]) style=((height:"20%")) <View style={{alignItems: "center"}}>
    
    Image style={{width:120, height:120, borderRadius:120/2, marginTop:-50}}
    
    source=([uri:karyawan.foto}} />
    
    </View>
    
    <View style={{alignItems: "center", margin:15}}>
    
    <Title>(karyawan.nama)</Title>
    
    <Text style={{fontSize:14))>(karyawan. Jabatan)</Text>
    
    </View>
    
    <Card style={{margin:3))
    
    onPress={() => (Linking.openURL("mailto:$(karyawan.email)&subject')}} >
    
    <View style={{flexDirection: "row", padding:8}}> <Image source (email) style={{width:30, height:30)} />
    
    <Text style={styles.teks)>(karyawan.email)</Text>
    
    </View>

    <Card style={{margin:3}} onPress={()->(Linking.openURL(tel:S(karyawan.telp}'}}} >

<View style={{flexDirection: 'row', padding:8))>

<Image source (call) style={{width:30, height:30)) />

</Card>

<Text style={styles.teks)>(karyawan.telp)</Text>

</View>

</Card>

Card style-[(margin:3))

<View style={{flexDirection: 'row', padding:8))>

<Image source (dollar) style={{width:30, height:30)) /> <Text style={styles.teks)>(karyawan.gaji)</Text>

</View>

</Card>
  )
}
<Card style={{margin:3)) >

  <View style={{flexDirection: 'row', padding:8))>
  
  <Image source (dollar) style={{width:30, height:30)) /> <Text style={styles.teks)>(karyawan.gaji)</Text> </View>
  
  </Card>
  
  <View style={{padding:10))>
  
  <Button title='GO BACK onPress={()->navigation.navigate( 'Home')) />
  
  </View>
  
  </View>

const styles Stylesheet.create({

  teks: (
  
  fontSize:15,
  
  marginTop:3,
  
  marginleft:5

  export default Detail;