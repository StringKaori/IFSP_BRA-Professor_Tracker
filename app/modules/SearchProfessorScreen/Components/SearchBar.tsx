import { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const handleSearch = () => {
    if (!searchValue) {
        return;
    }
    console.log(searchValue)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Procurar professor"
        value={searchValue}
        spellCheck={false}
        autoCorrect={false}
        onChangeText={setSearchValue}
        onEndEditing={handleSearch}
        style={styles.searchInput}
      />
      <TouchableOpacity 
        onPress={handleSearch}>
        <MaterialIcons
          name="search"
          size={24}
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
    height: 50,
    width: "100%",
  },
  icon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f8f2f2",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
});

export { SearchBar };
