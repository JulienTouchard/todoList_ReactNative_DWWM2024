/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {ItemStyle} from './ItemStyle.js'
import TodoListContext from '../../TodoListContext';
const Item = props => {
  const todoListContext = React.useContext(TodoListContext);
  return (
    <View style={ItemStyle.item}>
      <Text style={ItemStyle.txt}>{props.item}</Text>
      <Button
        style={ItemStyle.closeBtn}
        title="X"
        onPress={() => {
          todoListContext.deleteItem(props.id);
        }}
      />
    </View>
  );
};

export default Item;
