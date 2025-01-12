/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import Champ from './components/Champ/Champ';
import { Result } from './components/Result/Result';
import TodoListContext from './TodoListContext';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import { AppStyle } from './AppStyle';
import bgimg from './assets/img/chaussettes.webp';
import Footer from './components/Footer/Footer';
const storage = new MMKVLoader().initialize();
const App = () => {
  const [list, setList] = useMMKVStorage('list', storage, []);
  const [saisie, setSaisie] = useState('');
  const deleteItem = index => {
    let listTmp = list;
    listTmp.splice(index, 1);
    setList(listTmp);
  };
  const handlePress = () => {
    if (saisie.length > 0) {
      setList([...list, saisie]);
      //vider saisie;
      setSaisie('');
      //vider le champ???
    }
  };
  return (
    <>
      <SafeAreaView>
        <ImageBackground source={bgimg} style={AppStyle.bgImg}>
          <TodoListContext.Provider
            value={{ list, setList, saisie, setSaisie, deleteItem }}
          >
            <View style={{ borderWidth: 1, borderColor: 'red', width: '100%' }}>
              <Title />
              <Champ />
              <TouchableOpacity onPress={handlePress}>
                <Text style={AppStyle.buttonStyle}>Ajouter</Text>
              </TouchableOpacity>
            </View>
            <Result />
          </TodoListContext.Provider>

        </ImageBackground>

      </SafeAreaView>
      <Footer />
    </>
  );
};
export default App;
