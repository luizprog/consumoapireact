import React, {useState, useEffect}  from 'react';
import {View, Button,Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { red } from 'react-native-reanimated/src/reanimated2/Colors';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { useNavigation } from '@react-navigation/native';

const Details = () => {

    const ip = 'http://10.0.0.117';//'http://192.168.43.76';
    const [name,setName] = useState('');
    const [location, setLocation] = useState('');
    const [id, setID] = useState('');
    const [category,     setCategory] = useState('');
    const [strength,     setStrength] = useState('');
    const [agilyty,      setAgilyty] = useState('');
    const [dexterity,    setDexterity] = useState('');
    const [endurance,    setEndurance] = useState('');
    const [intelligence, setIntelligence] = useState('');
    const [socialstanding,       setSocialStanding] = useState('');
    const [vitality,     setVitality] = useState('');
    const [stamina,      setStamina] = useState('');
    const [fighting,     setFighting] = useState('');
    
        
    const [characters, setCharacters] = useState([]);    


    const navigation = useNavigation();  

    const route = useRoute();
    useEffect(() =>{ 
        const character = route.params.character;
        setName(character.name);
        setLocation(character.location);
        setCategory(character.category);
        setStrength(character.strength);
        setAgilyty(character.agilyty);
        setDexterity(character.dexterity);
        setEndurance(character.endurance);
        setIntelligence(character.intelligence);
        setSocialStanding(character.socialstanding);
        setVitality(character.vitality);
        setStamina(character.stamina);
        setFighting(character.fighting);
        
        setID(character.id);
        },[]);

    
    const deleteCharacter = (id) => {
        axios.delete(ip+':3000/characters/'+id).then((data) => 
        {

            const temp = characters.filter((item)=>{
                return item.id !== id;
            })
            setCharacters(temp);
            alert("Personagem Deletado com sucesso!");
        }
        ).catch((erro) => alert("Erro ao salvar " + erro));
    }

    const updateCharacter = () => {
        axios.patch(ip+':3000/characters/'+id, {name,location,
            category,strength,agilyty,dexterity,endurance,intelligence,
            socialstanding,vitality,stamina,fighting}).then((res) => 
        {            
            alert("Personagem Alterado com sucesso!");
            navigation.navigate('Home', { res });
        }
        ).catch((erro) => alert("Erro ao salvar " + erro));
    }    

    return(
        <ScrollView style={{flex:1}}>
        <Text></Text>

        <TextInput value={name} style={styles.input} onChangeText={(txt)=>setName(txt)} placeholder='Nome do Personagem'></TextInput>
        <TextInput value={location} style={styles.input} onChangeText={(txt)=>setLocation(txt)} placeholder=     'Local'></TextInput>
        <TextInput value={category} style={styles.input} onChangeText={(txt)=>setCategory(txt)} placeholder     ='category'></TextInput>
        <TextInput value={strength} style={styles.input} onChangeText={(txt)=>setStrength(txt)} placeholder     ='strength'></TextInput>
        <TextInput value={agilyty} style={styles.input} onChangeText={(txt)=>setAgilyty(txt)} placeholder      ='agilyty'></TextInput>
        <TextInput value={dexterity} style={styles.input} onChangeText={(txt)=>setDexterity(txt)} placeholder    ='dexterity'></TextInput>
        <TextInput value={endurance} style={styles.input} onChangeText={(txt)=>setEndurance(txt)} placeholder    ='endurance'></TextInput>
        <TextInput value={intelligence} style={styles.input} onChangeText={(txt)=>setIntelligence(txt)} placeholder ='intelligence'></TextInput>
        <TextInput value={socialstanding} style={styles.input} onChangeText={(txt)=>setSocialStanding(txt)} placeholder       ='social'></TextInput>
        <TextInput value={vitality} style={styles.input} onChangeText={(txt)=>setVitality(txt)} placeholder     ='vitality'></TextInput>
        <TextInput value={stamina} style={styles.input} onChangeText={(txt)=>setStamina(txt)} placeholder      ='stamina'></TextInput>
        <TextInput value={fighting} style={styles.input} onChangeText={(txt)=>setFighting(txt)} placeholder     ='fighting'></TextInput>

        <TouchableOpacity style={styles.mybutton}>
        <Button  title='Salvar' onPress={()=>{console.log(location); updateCharacter();}}/>
        </TouchableOpacity>

        
    </ScrollView>);
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

export default Details;