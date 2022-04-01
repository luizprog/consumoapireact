import React, {useState, useEffect}  from 'react';
import {View, Button, Text, StyleSheet, TextInput, TouchableOpacity, FlatList
    , ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { blue, red } from 'react-native-reanimated/src/reanimated2/Colors';


const Home = () => {

    const ip = 'http://10.0.0.117';//'http://192.168.43.76';
    const [name,setName] = useState('');
    const [location, setLocation] = useState('');
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

    const [characters,   setCharacters] = useState([]); 

    const navigation = useNavigation();  
    const route = useRoute();
     
    function atualizaLista(){
        axios.get(ip+':3000/characters').then(
        (req) => {
            
            setCharacters(req.data);
        }).catch((erro)=> console.log(erro));
    }
    useEffect(() =>{ 
        console.log("Entrou no get");
        atualizaLista();
    },[ route.params?.res]);

    const addPersonagem = () => {
        axios.post(ip+':3000/characters',
        {name:           name,
        location:        location,        
        category:        category,
        strength:        strength,
        agilyty:         agilyty,
        dexterity:       dexterity,
        endurance:       endurance,
        intelligence:    intelligence,
        socialstanding:  socialstanding,
        vitality:        vitality,
        stamina:         stamina,
        fighting:        fighting

    }
        ).then((data) => 
        {
            const temp = [...characters, data.data];
            setCharacters(temp);
            alert("Novo personagem salvo com sucesso!");
        }
        ).catch((erro) => alert("Erro ao salvar " + erro));
    }

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

    const updateCharacter = (id) => {
        axios.patch(ip+':3000/characters/'+id, {name:'a',location:'b'}).then((data) => 
        {
            const temp = [...characters, data.data];
            setCharacters(temp);
            alert("Personagem Deletado com sucesso!");
        }
        ).catch((erro) => alert("Erro ao salvar " + erro));
    }    

    return(
        <ScrollView style={{flex:1}}>
    
        <Text></Text>

        <TextInput value="" style={styles.input} onChangeText={(txt)=>setName(txt)} placeholder='Nome do Personagem'></TextInput>
        <TextInput value="" style={styles.input} onChangeText={(txt)=>setLocation(txt)} placeholder='Local'></TextInput>
        <TextInput value="" style={styles.input} onChangeText={(txt)=>setCategory(txt)} placeholder     ='category'></TextInput>
        <TextInput value="10" style={styles.input} onChangeText={(txt)=>setStrength(txt)} placeholder     ='strength'></TextInput>
        <TextInput value="10" style={styles.input} onChangeText={(txt)=>setAgilyty(txt)} placeholder      ='agilyty'></TextInput>
        <TextInput value="10" style={styles.input} onChangeText={(txt)=>setDexterity(txt)} placeholder    ='dexterity'></TextInput>
        <TextInput value="10" style={styles.input} onChangeText={(txt)=>setEndurance(txt)} placeholder    ='endurance'></TextInput>
        <TextInput value="10" style={styles.input} onChangeText={(txt)=>setIntelligence(txt)} placeholder ='intelligence'></TextInput>
        <TextInput value="10" style={styles.input} onChangeText={(txt)=>setSocialStanding(txt)} placeholder       ='social'></TextInput>
        <TextInput value="10" style={styles.input} onChangeText={(txt)=>setVitality(txt)} placeholder     ='vitality'></TextInput>
        <TextInput value="10" style={styles.input} onChangeText={(txt)=>setStamina(txt)} placeholder      ='stamina'></TextInput>
        <TextInput value="10" style={styles.input} onChangeText={(txt)=>setFighting(txt)} placeholder     ='fighting'></TextInput>



        <TouchableOpacity style={styles.mybutton}>
        <Button  title='Salvar' onPress={addPersonagem}/>
        </TouchableOpacity>
        
        
        <FlatList style={styles.mylabel}
        keyExtractor={ (item, index) => item.id.toString() }
        data={characters} 
        renderItem={({item}) => (
            

            <View style={{flexDirection: 'row', margin:2,  borderWidth:0.5, borderBottomColor: "gray", 
                padding:3, borderRadius:5,}}>
                 <Text   style={styles.mytextlabel}>  
                    {item.name}  {item.location}  </Text> 
                <Icon style={styles.mybuttonUpdate} name="pencil" size={32}   onPress={() =>navigation.navigate('Details', {character: item})} />             
                <Icon style={styles.mybuttonDelete} name="trash" size={32}   onPress={() => {deleteCharacter(item.id)}} />             
                    
            </View>   
        )} />
        </ScrollView>
    );
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
        width: "60%"    
    },
    mybutton:{
      margin:20,
      width:"80%",
      alignSelf: 'center'
      
    },
    mybuttonDelete:{
        padding:5,
        borderRadius:3,
        marginRight:10,
        alignSelf:'flex-end',
        backgroundColor: 'orange',
        alignSelf: 'flex-end',
        
      }
      ,
    mybuttonUpdate:{
        padding:5,
        borderRadius:5,
        marginRight:10,
        backgroundColor:'lightblue',
        alignSelf: 'flex-end',
        
      }
  });

export default Home;