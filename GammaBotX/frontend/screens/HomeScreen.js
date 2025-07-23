import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to GammaBot X</Text>
      <Button title="Chat with AI" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}
