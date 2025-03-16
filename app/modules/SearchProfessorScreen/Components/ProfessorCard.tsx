import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ProfessorCardProps {
    name: string,
    currentRoom: string
}

const ProfessorCard = (props: ProfessorCardProps) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.name}>Sala Atual: {props.currentRoom}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "90%",

        backgroundColor: "#f8f2f2",
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,

        justifyContent: 'center',
        padding: 10,
        marginBottom: 10
    },
    name: {
    }
})

export { ProfessorCard };
