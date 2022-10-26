import React, {FunctionComponent, useState} from 'react';
import {TextInput, View, Text} from 'react-native';

const Amount: FunctionComponent = ({value, fee, currency}) => {
  const [currencyValue, setCurrencyValue] = useState<number>(0);
  return (
    <View>
      <TextInput value={value} onChangeText={setCurrencyValue} />
      <View>
        <Text>{`Fee (incl.VAT)fee USD${fee}`}</Text>
      </View>
      <View>
        <Text>{`Total to pay: USD${value + fee}`}</Text>
      </View>
    </View>
  );
};

export default Amount;
