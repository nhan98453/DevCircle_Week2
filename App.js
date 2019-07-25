import React from 'react';
import { Alert,ScrollView,TouchableOpacity,Button,Image, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons,Ionicons,AntDesign,Feather} from '@expo/vector-icons';
function alertFollow(){
    Alert.alert(
         'followed'
      );
}
function alertSend(){
    Alert.alert(
         'message sended'
      );
}
export default function App() {
return (
    <View style={styles.container}>
        <View style={styles.headerButton}>
            <TouchableOpacity>
                <View style={[styles.button]}>
                    <Ionicons name='md-arrow-back'></Ionicons>
                </View>
            </TouchableOpacity>
            <TouchableOpacity >
                <View style={[styles.button]}>
                    <AntDesign name='appstore-o'></AntDesign>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.header}>
            <View style={styles.avatarWrapper}>
                <Image style={styles.avatar}
                source={require('./assets/img/avatar.jpg')}
                />
            </View>
            <View style={styles.userInfo}>
                <Text style={{fontWeight:'bold',fontSize:24}}>Phan Trí Nhân</Text>
                <Text>Junior Student</Text>
                <View style={styles.btnWrapper}>
                    <TouchableOpacity onPress={alertFollow}>
                        <View style={[styles.button,styles.followBtn]}>
                            <Text style={styles.btnLabel}>Follow</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={alertSend}>
                        <View style={[styles.button,styles.sendBtn]}>
                            <Feather name='send'></Feather>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.countArea}>
            <View>
                <Text style={styles.countText}>210
                </Text>
                <Text style={styles.countLabelText}>Photos
                </Text>
            </View>
            <View>
                <Text style={styles.countText}>15k
                </Text>
                <Text style={styles.countLabelText}>Followers
                </Text>
            </View>
            <View>
                <Text style={styles.countText}>605
                </Text>
                <Text style={styles.countLabelText}>Following
                </Text>
            </View>
        </View>
        <ScrollView contentContainerStyle={styles.imageArea}>
            <View>
                {imgData.slice(0,centerImgData).map(item=>{
                    return <Image style={styles.image} source={item.imgSource} key={item.id}/>
                })}
            </View>
            <View>
                {imgData.slice(centerImgData,imgData.length).map(item=>{
                    return <Image style={styles.image} source={item.imgSource} key={item.id}/>
                })}
            </View>
        </ScrollView>
        <View style={styles.bottomTab}>
            <TouchableOpacity>
                <View style={[styles.button,styles.bottomButton]}>
                    <Ionicons name='ios-menu'></Ionicons>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={[styles.button,styles.bottomButton]}>
                    <AntDesign name='pluscircleo'></AntDesign>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={[styles.button,styles.bottomButton]}>
                    <MaterialCommunityIcons name='account'></MaterialCommunityIcons>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);
}

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const imgData = [
  { id: 1, imgSource: require('./assets/img/1.jpg') },
  { id: 2, imgSource: require('./assets/img/2.jpg') },
  { id: 3, imgSource: require('./assets/img/3.jpg') },
  { id: 4, imgSource: require('./assets/img/4.jpg') },
  { id: 5, imgSource: require('./assets/img/5.jpg') },
  { id: 6, imgSource: require('./assets/img/6.jpg') }
];
const centerImgData = Math.floor(imgData.length / 2);
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:20,
    },
    headerButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
    },
    header:{
        flex:0.25,
        flexDirection:'row',
    },
    avatarWrapper:{
        flex:0.4,
        justifyContent:'center',
        alignItems:'center'
    },
    avatar:{
        width:120,
        height:120,
        borderRadius:60
    },
    userInfo:{
        flex:0.6,
        justifyContent:'center',
    },
    btnWrapper:{
        flexDirection:'row',
        marginTop:10
    },
    btnLabel:{
        color:'white'
    },
    button:{
        borderRadius:15,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    followBtn:{
        width:120,
        backgroundColor:FOLLOW_COLOR,
    },
    sendBtn:{
        width:40,
        backgroundColor:SEND_MESSAGE_COLOR,
        marginLeft:10
    },
    countArea:{
        flex:0.15,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    countText:{
        fontSize:16,
        fontWeight:'bold',
    },
    imageArea:{
        flex:0.5,
        flexDirection:'row',
        justifyContent:'center',
    },
    image:{
        width:150,
        height:150
    },
    bottomTab:{
        flex:0.1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    bottomButton:{
        width:70,
        backgroundColor:'blue',
        fontSize:24
    }
});
