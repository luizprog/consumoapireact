import React, {useState, useEffect}  from 'react';
import {View, Button,Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';

import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { red } from 'react-native-reanimated/src/reanimated2/Colors';


const Home = () => {

    const [name,setName] = useState('');
    const [location, setLocation] = useState('');
    const [characters, setCharacters] = useState([]);    

    function atualizaLista(){
        axios.get('http://10.0.0.117:3000/characters').then(
        (req) => setCharacters(req.data)).catch((erro)=> console.log(erro));
    }
    useEffect(() =>{ 
        console.log("Entrou no get");
        atualizaLista();},[]);

    const addPersonagem = () => {
        axios.post('http://10.0.0.117:3000/characters',
        {name: name,
        location: location}
        ).then((data) => 
        {
            const temp = [...characters, data.data];
            setCharacters(temp);
            alert("Novo personagem salvo com sucesso!");
        }
        ).catch((erro) => alert("Erro ao salvar " + erro));
    }

    const deleteCharacter = (id) => {
        axios.delete('http://10.0.0.117:3000/characters/'+id).then((data) => 
        {

            const temp = characters.filter((item)=>{
                return item.id !== id;
            })
            setCharacters(temp);
            alert("Personagem Deletado com sucesso!");
        }
        ).catch((erro) => alert("Erro ao salvar " + erro));
    }

    const updateCharacter = (id) => {
        axios.patch('http://10.0.0.117:3000/characters/'+id, {name:'a',location:'b'}).then((data) => 
        {
            const temp = [...characters, data.data];
            setCharacters(temp);
            alert("Personagem Deletado com sucesso!");
        }
        ).catch((erro) => alert("Erro ao salvar " + erro));
    }    

    return(
    <View >
        <Text></Text>

        <TextInput style={styles.input} onChangeText={(txt)=>setName(txt)} 
        placeholder='Nome do Personagem'></TextInput>

        <TextInput style={styles.input} onChangeText={(txt)=>setLocation(txt)} 
        placeholder='Local'></TextInput>
        <TouchableOpacity style={styles.mybutton}>
        <Button  title='Salvar' onPress={addPersonagem}/>
        </TouchableOpacity>

        <FlatList style={styles.mylabel} data={characters} 
        renderItem={({item}) => (
            <View style={{flexDirection: 'row', margin:2,  borderWidth:0.5, borderBottomColor: "gray", 
            padding:3, borderRadius:5,}}>
                <Text   style={styles.mytextlabel}>  
                    {item.name}  {item.location}  </Text> 
                    <Icon style={styles.mybuttonDelete} name="trash" size={32}   onPress={() => {deleteCharacter(item.id)}} />             
                    
            </View>        
        )} />
    </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        margin:20,
      alignSelf: 'center',
      borderColor: "gray",
      width: "60%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginBottom:10,
    },
    mylabel:{
        alignSelf: 'center',
        margin: 5     
    },
    mytextlabel:{
        alignSelf: 'flex-start',   
        width: "80%"    
    },
    mybutton:{
      margin:20,
      width:"80%",
      alignSelf: 'center'
      
    },
    mybuttonDelete:{
        padding:5,
        borderRadius:5,
        backgroundColor: 'orange',
        alignSelf: 'flex-end',
        
      }
  });

export default Home;