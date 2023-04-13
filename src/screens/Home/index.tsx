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
import { Task } from "../../components/Task";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskDescription, setTaskDescription] = useState('')
  const [doneCounter, setDoneCounter] = useState(0)

  const inputTextRef = useRef<TextInput>(null)
  function handleCreateTask() {
    setTasks(prevState => [...prevState, taskDescription])
    inputTextRef.current?.blur()
    setTaskDescription('')

  }

  function handleDeleteTask(deletedTask: string) {
    const filteredTask = tasks.filter(task => task !== deletedTask)
    setTasks(filteredTask)
    setDoneCounter(prevState => prevState - 1)
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
      <Info tasks={tasks} doneCounter={doneCounter} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        contentContainerStyle={{ marginTop: 40 }}
        renderItem={({ item: task }) => (
          <Task description={task} onDelete={handleDeleteTask} onChangeCounter={setDoneCounter} />
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
