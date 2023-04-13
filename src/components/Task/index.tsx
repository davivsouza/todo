import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import CheckBox from "expo-checkbox";
import { AntDesign } from '@expo/vector-icons'
import { Dispatch, SetStateAction, useState } from "react";

interface TaskProps {
  onDelete: (task: string) => void,
  onChangeCounter: Dispatch<SetStateAction<number>>,
  description: string
}

export function Task({ onDelete, onChangeCounter, description }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  
  function handleCheck(){
    setIsChecked(!isChecked)
    
    if(!isChecked){
      onChangeCounter(prevState => prevState + 1)
      return
    }

    onChangeCounter(prevState => prevState - 1)
    
  }

  return (
    <View style={styles.container} >
      <CheckBox color="#4EA8DE" value={isChecked} onValueChange={handleCheck} />
      <Text style={
        isChecked ? {
          textDecorationLine: 'line-through',
          color: "#808080"
        } : { color: '#fff', }
      }>{description}</Text>
      <TouchableOpacity onPress={() => onDelete(description)}>
        <AntDesign name="delete" color="#808080" size={20} />
      </TouchableOpacity>

    </View>
  )
}