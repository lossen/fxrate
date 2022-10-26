import React,{useCallback,useState} from 'react';
import {View,Text, Pressable} from 'react-native';
import currencies from '../mockApi/currencies';


const CurrencySwitcher: FC = ({currency}) => {
  cosnt [currentCurrency, setCurrentCurrency] = useState<string>(currency)

  const handleChangeCurrency = useCallback(() => {
    if(currentCurrency === ) 
  },[])
 
  return <Pressable onPress={handleChangeCurrency}>
    <Text>{currentCurrency}</Text>
    {/* <Icon/> */}</Text>
  </View>
};

export default CurrencySwitcher;

// how would you implement an icon in this screen?
// 