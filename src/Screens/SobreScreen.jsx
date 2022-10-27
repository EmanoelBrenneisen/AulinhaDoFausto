import { Button, Text, View } from "react-native"

export const SobreScreen =({navigation}) =>{
    return(
        <View>
            <Text>AAAAAAAAA</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}