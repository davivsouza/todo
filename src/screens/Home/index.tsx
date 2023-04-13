import { useState, useRef } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import clipboard from "../../assets/Clipboard.png";

import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskDescription, setTaskDescription] = useState('')

  const inputTextRef = useRef<TextInput>(null)
  function handleCreateTask(){
    setTasks(prevState => [...prevState, taskDescription])
    inputTextRef.current?.blur()
    setTaskDescription('')
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          style={styles.textInput}
          onChangeText={setTaskDescription}
          value={taskDescription}
          ref={inputTextRef}
          onSubmitEditing={handleCreateTask}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
          <EvilIcons name="plus" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
      <Info tasks={[]} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        contentContainerStyle={{ marginTop: 40 }}
        renderItem={({ item: task }) => (
          <View>
            <Text>{task}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              alignItems: "center",
              gap: 3,
            }}
          >
            <Image source={clipboard} style={{ marginBottom: 16 }} />
            <Text style={{ fontWeight: "bold", color: "#808080" }}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={{ color: "#808080" }}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
