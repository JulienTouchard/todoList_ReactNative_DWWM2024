/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput } from 'react-native';
import {ChampStyle} from './ChampStype.js';
import TodoListContext from '../../TodoListContext';

const Champ = () => {
  const todoListContext = React.useContext(TodoListContext);
  return (

    <TextInput
      style={ChampStyle.titre}
      onChangeText={(text) => {
        todoListContext.setSaisie(text);
      }}
      value={todoListContext.saisie}
      placeholder="Ajoutez à votre liste ..."/>
  );
};

export default Champ;
