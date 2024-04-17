import React, {useState} from "react";
import { View, Text, Button } from "react-native";
const Example = () =>{
    const [name, setName] = useState("RAM");
    let data = "Satnam"; {/* onPress Event */}
    function testName(){
        setName("RAWAN");
        data = "Satnam";
    };

    return(
        <View>
            <Text style={{fontSize: 30}} > State Example:</Text>
            <Text style={{fontSize: 30}} > {data}</Text>
            <Text style={{fontSize: 30}} > {name}</Text>
            <Button title="Update Name" onPress={testName}></Button>
        </View>
    );
};

export default Example