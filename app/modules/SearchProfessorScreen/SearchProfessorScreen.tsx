import { SafeAreaView, StatusBar, Text, StyleSheet } from "react-native";
import { SearchBar } from "./Components/SearchBar";
import { ProfessorCard } from "./Components/ProfessorCard";

const SearchProfessorScreen = () => {

    return(
        <SafeAreaView style={styles.container}>
            <SearchBar />
            <StatusBar backgroundColor="purple" />
            <Text>
                Digite na barra acima o nome do professor que deseja localizar
            </Text>
            <ProfessorCard name={"Wilson Vendramel"} currentRoom={"A407"}/>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
});

export { SearchProfessorScreen };
