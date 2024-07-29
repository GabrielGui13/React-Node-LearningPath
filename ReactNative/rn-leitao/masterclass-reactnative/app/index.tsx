import { Text, View, Alert } from "react-native";
import { styles } from '@/constants/styles';
import { Ionicons } from "@expo/vector-icons";
import { Botao } from "@/components/Botao";
import { useNavigation } from 'expo-router'
import { DrawerActions } from "@react-navigation/native";

export default function TelaInicial() {
  // Alert.alert("Teste", "Teste");  
  const nav = useNavigation()

  return (
    <View style={[styles.centralizado, { gap: 10 }]}>
      <Ionicons name="logo-react" size={100} />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Masterclass React Native</Text>
        <Text style={{ fontSize: 16 }}>Esquenta Formação.DEV</Text>
      </View>
      <Botao
        onPress={() => nav.dispatch(DrawerActions.openDrawer())}
      >
        <Text style={{ color: '#fff' }}>Exercícios</Text> 
      </Botao>
    </View>
  );
}