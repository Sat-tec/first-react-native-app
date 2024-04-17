import React, { useState } from "react";
import { View, Text, Button } from "react-native";

type ChildProps = {
    name: string; // Assuming name is a string
};

const Parent = () => {
    const [name, setName] = useState("React Js");
    return (
        <View style={{ backgroundColor: 'red', padding: 5 }}>
            <Text style={{ fontSize: 30 }} > Parent Component</Text>
            <Button title='Update props' onPress ={() => setName("React-Native")}/>
            <Child name={name} />
        </View>
    );

};

const Child: React.FC<ChildProps> = (prop) => {
    return (
        <View style={{ backgroundColor: 'green', padding: 5 }}>
            <Text style={{ fontSize: 30, color: 'white' }} >Name :{prop.name}</Text>
        </View>
    );
};

export {Parent, Child}
