import React, { useState } from 'react';
import {
  Text,
  Image,
  View,
ScrollView,
Pressable,
ImageBackground,
Modal,
TextInput,
Dimensions,
Alert
} from 'react-native';
import styles from '../Help/Styles';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import Colors from '../GlobalStyles/Color';

import getAsync from '../GetAsynData/getAsync';

const WindowHeight = Dimensions.get('window').height;

function Sorry({IsVisible,onHideModal}) {
    const asyncdata = getAsync()


const navigation = useNavigation()



return (
    <Modal
    visible={IsVisible}
    transparent={true}
    animationType="slide"
    >
    <SafeAreaView style={[styles.Container,{justifyContent:"center",backgroundColor:'rgba(0,0,0,0.9)'}]}>





<View  style={styles.TicketBox}>



<Text 
style={[styles.ModalTitles,{margin:20,fontSize:30,color:Colors.danger}]}>NOTICE!</Text>
<Text style={{color:Colors.send,textAlign:"center",fontWeight:"bold"}}>
    NEW PROMOTION AVAILABLE{'\n'}
</Text>
<Text style={{color:"white",textAlign:"center"}}>
    GET 10% comission from your first link referred person's first or new investment {'\n'}and {'\n'}GET 5% comission from your 2nd Link referred person's First or New investment.
</Text>

<View>
    <View style={{alignItems:'center'}}>
    <Text style={{color:"red",textAlign:"center"}}>
    NOTE: No commission on re-investing or merging new deposit with old balance.
</Text>
    <Text 
    onPress={()=> onHideModal()}
    style={{color:Colors.send,fontSize:24,fontWeight:"bold",margin:20,textDecorationLine:'underline'}}>Okay i aknowledge.</Text>



    </View>

</View>

</View>
    </SafeAreaView>
    </Modal>
  )

}
export default Sorry;

