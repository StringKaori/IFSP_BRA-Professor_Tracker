import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { ProfessorCard } from "../SearchProfessorScreen/Components/ProfessorCard";

const SelectProfessorScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
        <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10
  },
});

export { SelectProfessorScreen };
