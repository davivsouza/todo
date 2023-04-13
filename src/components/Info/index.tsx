import { View, Text } from "react-native";
import { styles } from "./styles";

interface InfoProps {
  tasks: string[];
  doneCounter: number
}

export function Info({ tasks, doneCounter }: InfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.infoTags}>
        <Text style={[{ color: "#4EA8DE" }, styles.tagLabel]}>Criadas</Text>
        <Text style={styles.counter}>{tasks.length}</Text>
      </View>

      <View style={styles.infoTags}>
        <Text style={[{ color: "#8284FA" }, styles.tagLabel]}>Concluídas</Text>
        <Text style={styles.counter}>{doneCounter}</Text>
      </View>
    </View>
  );
}
