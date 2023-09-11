import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../actions/actions';

const NameDemo = () => {
  const [inputName, setInputName] = useState('');
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.Reducers);

  console.log('Inside NameDemo---------');

  const handleNameChange = (text) => {
    setInputName(text);
  };

  const handleNameSubmit = () => {
    // Dispatch the setName action with the inputName as payload
    dispatch(setName(inputName));
  };

  return (
    <View style={{flex:1}} >
      <Text>Name Demo</Text>
      <Text>Name: {stateData.name}</Text>
      <TextInput
        placeholder="Enter a name"
        value={inputName}
        onChangeText={handleNameChange}
      />
      <Button title="Set Name" onPress={handleNameSubmit} />
    </View>
  );
};

export default NameDemo;
