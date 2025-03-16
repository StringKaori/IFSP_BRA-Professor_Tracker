import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./BottomTabParamList";
import { SearchProfessorScreen, SelectProfessorScreen } from "../../modules";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () =>  {
  return (
      <Tab.Navigator 
        initialRouteName="SearchProfessorScreen"
        screenOptions={{headerShown: false}}
        >
        <Tab.Screen 
          name="SearchProfessorScreen" 
          component={SearchProfessorScreen} />
        <Tab.Screen 
          name="SelectProfessorScreen" 
          component={SelectProfessorScreen} />
      </Tab.Navigator>
  );
}

export { BottomTab };
