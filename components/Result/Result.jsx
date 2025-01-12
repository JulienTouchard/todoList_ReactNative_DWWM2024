/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList } from 'react-native';
import TodoListContext from '../../TodoListContext';
import Item from '../Item/Item';
import { ResultStyle } from './ResultStyle.js';

export const Result = () => {
  const todoListContext = React.useContext(TodoListContext);
  return (
    <FlatList
        style={ResultStyle.list}
        data={todoListContext.list}
        renderItem={({item,index}) =><Item item={item} key={index} id={index}/>}
        keyExtractor={item => item}
      />
  );
};
