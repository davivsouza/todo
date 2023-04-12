import { View, Text } from "react-native";
import { styles } from "./styles";

interface InfoProps {
  tasks?: [];
}

export function Info({ tasks }: InfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.infoTags}>
        <Text style={[{ color: "#4EA8DE" }, styles.tagLabel]}>Criadas</Text>
        <Text style={styles.counter}>{tasks?.length || 0}</Text>
      </View>

      <View style={styles.infoTags}>
        <Text style={[{ color: "#8284FA" }, styles.tagLabel]}>Concluídas</Text>
        <Text style={styles.counter}>{tasks?.length || 0}</Text>
      </View>
    </View>
  );
}
